import { jsPDF } from 'jspdf'

interface Batch {
  id: string
  name: string
  mode: 'egg' | 'meat'
  breed?: string
  status: string
  startDate: string
  endDate?: string
  initialCount: number
  currentCount: number
  targetWeight?: number
}

interface ReportData {
  batch: Batch
  currencySymbol: string
  weightUnit: string
  expenses: { category: string; amount: number; description: string; date: string }[]
  revenues: { type: string; amount: number; quantity: number; unitPrice: number; date: string; notes?: string }[]
  eggs: { date: string; totalEggs: number; gradeA: number; gradeB: number; broken: number }[]
  weights: { date: string; averageWeight: number; sampleSize: number; minWeight?: number; maxWeight?: number }[]
  mortality: { date: string; count: number; cause: string; notes?: string }[]
}

const GREEN  = '#15803D'
const ORANGE = '#F97316'
const DARK   = '#1a1a1a'
const MID    = '#555555'
const LIGHT  = '#888888'
const PAGE_W = 210
const M      = 16   // margin
const COL    = PAGE_W - M * 2

function fmt(n: number, sym: string) {
  return `${sym}${n.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function fmtDate(d: string) {
  if (!d) return '—'
  const dt = new Date(d)
  return dt.toLocaleDateString('en', { day: '2-digit', month: 'short', year: 'numeric' })
}

function weeksOld(startDate: string) {
  return Math.floor((Date.now() - new Date(startDate).getTime()) / (7 * 86400000))
}

export function useBatchPdfReport() {
  function generateReport(data: ReportData) {
    const { batch, currencySymbol: sym, weightUnit, expenses, revenues, eggs, weights, mortality } = data

    const doc = new jsPDF({ unit: 'mm', format: 'a4' })
    let y = 0

    function newPage() {
      doc.addPage()
      y = M
      drawPageBorder()
    }

    function drawPageBorder() {
      doc.setDrawColor(GREEN)
      doc.setLineWidth(0.4)
      doc.line(M, 8, PAGE_W - M, 8)
    }

    function checkY(needed: number) {
      if (y + needed > 280) newPage()
    }

    function sectionHeader(title: string, icon: string = '') {
      checkY(14)
      doc.setFillColor(GREEN)
      doc.roundedRect(M, y, COL, 9, 2, 2, 'F')
      doc.setTextColor('#ffffff')
      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      doc.text(`${icon}  ${title}`.trim(), M + 4, y + 6)
      y += 13
      doc.setTextColor(DARK)
    }

    function row2(label: string, value: string, bold = false, valueColor = DARK) {
      checkY(8)
      doc.setFontSize(8.5)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(LIGHT)
      doc.text(label, M + 2, y)
      doc.setFont('helvetica', bold ? 'bold' : 'normal')
      doc.setTextColor(valueColor)
      doc.text(value, PAGE_W - M - 2, y, { align: 'right' })
      doc.setTextColor(DARK)
      doc.setDrawColor('#e5e7eb')
      doc.setLineWidth(0.1)
      doc.line(M, y + 1.5, PAGE_W - M, y + 1.5)
      y += 7
    }

    function kpiGrid(items: { label: string; value: string; color?: string }[]) {
      const cols = Math.min(items.length, 3)
      const cellW = COL / cols
      const cellH = 16
      checkY(cellH + 4)
      items.slice(0, cols).forEach((item, i) => {
        const x = M + i * cellW
        doc.setFillColor('#f9fafb')
        doc.setDrawColor('#e5e7eb')
        doc.setLineWidth(0.2)
        doc.roundedRect(x + 1, y, cellW - 2, cellH, 1.5, 1.5, 'FD')
        doc.setFontSize(13)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(item.color || DARK)
        doc.text(item.value, x + cellW / 2, y + 9, { align: 'center' })
        doc.setFontSize(7)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(LIGHT)
        doc.text(item.label, x + cellW / 2, y + 13.5, { align: 'center' })
      })
      y += cellH + 5
    }

    // ── Cover header ──────────────────────────────────────────────
    drawPageBorder()

    // Gradient-inspired title bar
    doc.setFillColor(GREEN)
    doc.rect(0, 0, PAGE_W / 2, 42, 'F')
    doc.setFillColor(ORANGE)
    doc.rect(PAGE_W / 2, 0, PAGE_W / 2, 42, 'F')
    // Blend overlay
    for (let i = 0; i < 20; i++) {
      const alpha = i / 20
      const r = Math.round(21 + (249 - 21) * (i / 20))
      const g = Math.round(128 + (115 - 128) * (i / 20))
      const b = Math.round(61 + (22 - 61) * (i / 20))
      doc.setFillColor(r, g, b)
      doc.rect(PAGE_W / 2 - 20 + i * 2, 0, 2, 42, 'F')
    }

    doc.setTextColor('#ffffff')
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Vue Chicken', M, 20)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Batch Performance Report', M, 28)
    doc.setFontSize(8)
    doc.text(`Generated: ${new Date().toLocaleDateString('en', { day: '2-digit', month: 'long', year: 'numeric' })}`, M, 36)

    y = 52
    doc.setTextColor(DARK)

    // ── Batch overview ────────────────────────────────────────────
    sectionHeader('BATCH OVERVIEW')

    const totalDead = mortality.reduce((s, r) => s + r.count, 0)
    const mortalityPct = batch.initialCount ? ((totalDead / batch.initialCount) * 100).toFixed(1) : '0'

    kpiGrid([
      { label: 'Current Birds', value: batch.currentCount.toLocaleString(), color: GREEN },
      { label: 'Mortality Rate', value: `${mortalityPct}%`, color: Number(mortalityPct) > 5 ? '#EF4444' : GREEN },
      { label: 'Week', value: `Wk ${weeksOld(batch.startDate)}`, color: ORANGE },
    ])

    row2('Batch Name', batch.name, true)
    row2('Mode', batch.mode === 'egg' ? 'Egg Layers' : 'Broilers (Meat)')
    row2('Breed', batch.breed || 'Not specified')
    row2('Status', batch.status.charAt(0).toUpperCase() + batch.status.slice(1))
    row2('Start Date', fmtDate(batch.startDate))
    if (batch.endDate) row2('End Date', fmtDate(batch.endDate))
    row2('Initial Count', `${batch.initialCount.toLocaleString()} birds`)
    row2('Current Count', `${batch.currentCount.toLocaleString()} birds`)
    row2('Total Deaths', `${totalDead} birds`)

    // ── Financial summary ─────────────────────────────────────────
    checkY(10)
    y += 4
    sectionHeader('FINANCIAL SUMMARY')

    const totalExp = expenses.reduce((s, e) => s + e.amount, 0)
    const totalRev = revenues.reduce((s, r) => s + r.amount, 0)
    const netPnl = totalRev - totalExp
    const margin = totalRev ? ((netPnl / totalRev) * 100).toFixed(1) : '0'

    kpiGrid([
      { label: 'Total Revenue', value: fmt(totalRev, sym), color: GREEN },
      { label: 'Total Expenses', value: fmt(totalExp, sym), color: '#EF4444' },
      { label: 'Net P&L', value: `${netPnl >= 0 ? '+' : ''}${fmt(netPnl, sym)}`, color: netPnl >= 0 ? GREEN : '#EF4444' },
    ])

    row2('Gross Revenue', fmt(totalRev, sym), true, GREEN)
    row2('Total Expenses', fmt(totalExp, sym), true, '#EF4444')
    row2('Net Profit/Loss', `${netPnl >= 0 ? '+' : ''}${fmt(netPnl, sym)}`, true, netPnl >= 0 ? GREEN : '#EF4444')
    row2('Profit Margin', `${margin}%`, false, netPnl >= 0 ? GREEN : '#EF4444')
    row2('Expense Records', `${expenses.length}`)
    row2('Revenue Records', `${revenues.length}`)

    // ── Expense breakdown ─────────────────────────────────────────
    if (expenses.length > 0) {
      checkY(10)
      y += 4
      sectionHeader('EXPENSE BREAKDOWN BY CATEGORY')

      const cats: Record<string, number> = {}
      expenses.forEach(e => { cats[e.category] = (cats[e.category] || 0) + e.amount })
      const catEntries = Object.entries(cats).sort((a, b) => b[1] - a[1])

      catEntries.forEach(([cat, amt]) => {
        const pct = totalExp ? ((amt / totalExp) * 100).toFixed(1) : '0'
        checkY(8)
        const label = cat.charAt(0).toUpperCase() + cat.slice(1)
        doc.setFontSize(8.5)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(MID)
        doc.text(label, M + 2, y)
        doc.setTextColor(LIGHT)
        doc.text(`${pct}%`, M + 40, y, { align: 'right' })
        doc.setTextColor(DARK)
        doc.setFont('helvetica', 'bold')
        doc.text(fmt(amt, sym), PAGE_W - M - 2, y, { align: 'right' })
        // mini bar
        const barW = ((amt / totalExp) * (COL - 60))
        doc.setFillColor(GREEN)
        doc.roundedRect(M + 42, y - 3.5, Math.max(barW, 1), 4, 0.5, 0.5, 'F')
        doc.setDrawColor('#e5e7eb')
        doc.setLineWidth(0.1)
        doc.line(M, y + 1.5, PAGE_W - M, y + 1.5)
        y += 7
      })
    }

    // ── Production ────────────────────────────────────────────────
    if (batch.mode === 'egg' && eggs.length > 0) {
      checkY(10)
      y += 4
      sectionHeader('EGG PRODUCTION')

      const totalEggs = eggs.reduce((s, c) => s + c.totalEggs, 0)
      const gradeA = eggs.reduce((s, c) => s + c.gradeA, 0)
      const gradeB = eggs.reduce((s, c) => s + c.gradeB, 0)
      const broken = eggs.reduce((s, c) => s + c.broken, 0)
      const daysSince = Math.floor((Date.now() - new Date(batch.startDate).getTime()) / 86400000)
      const prodRate = (daysSince && batch.currentCount) ? Math.min(100, (totalEggs / (batch.currentCount * daysSince)) * 100).toFixed(1) : '0'
      const costPerEgg = totalEggs ? (totalExp / totalEggs).toFixed(4) : '—'

      kpiGrid([
        { label: 'Total Eggs', value: totalEggs.toLocaleString(), color: '#D97706' },
        { label: 'Production Rate', value: `${prodRate}%`, color: GREEN },
        { label: 'Cost / Egg', value: totalEggs ? fmt(totalExp / totalEggs, sym) : '—', color: DARK },
      ])

      row2('Total Eggs Collected', totalEggs.toLocaleString(), true)
      row2('Grade A', gradeA.toLocaleString())
      row2('Grade B', gradeB.toLocaleString())
      row2('Broken', broken.toLocaleString())
      row2('Production Rate', `${prodRate}%`)
      row2('Cost per Egg', costPerEgg !== '—' ? fmt(totalExp / totalEggs, sym) : '—')
      row2('Revenue per Egg', totalEggs && totalRev ? fmt(totalRev / totalEggs, sym) : '—')
      row2('Collection Records', `${eggs.length}`)

      // Recent 10 collections table
      checkY(20)
      y += 4
      doc.setFontSize(8)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(MID)
      doc.text('DATE', M + 2, y)
      doc.text('GRADE A', M + 42, y, { align: 'center' })
      doc.text('GRADE B', M + 80, y, { align: 'center' })
      doc.text('BROKEN', M + 116, y, { align: 'center' })
      doc.text('TOTAL', PAGE_W - M - 2, y, { align: 'right' })
      y += 2
      doc.setDrawColor(GREEN)
      doc.setLineWidth(0.3)
      doc.line(M, y, PAGE_W - M, y)
      y += 5

      eggs.slice(0, 10).forEach((c, i) => {
        checkY(7)
        if (i % 2 === 0) {
          doc.setFillColor('#f0fdf4')
          doc.rect(M, y - 4, COL, 6.5, 'F')
        }
        doc.setFontSize(8)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(DARK)
        doc.text(fmtDate(c.date), M + 2, y)
        doc.text(c.gradeA.toString(), M + 42, y, { align: 'center' })
        doc.text(c.gradeB.toString(), M + 80, y, { align: 'center' })
        doc.text(c.broken.toString(), M + 116, y, { align: 'center' })
        doc.setFont('helvetica', 'bold')
        doc.text(c.totalEggs.toString(), PAGE_W - M - 2, y, { align: 'right' })
        y += 6.5
      })
      if (eggs.length > 10) {
        doc.setFontSize(7.5)
        doc.setTextColor(LIGHT)
        doc.text(`... and ${eggs.length - 10} more records`, M + 2, y)
        y += 6
      }
    }

    if (batch.mode === 'meat' && weights.length > 0) {
      checkY(10)
      y += 4
      sectionHeader('WEIGHT RECORDS')

      const latest = weights[0]
      kpiGrid([
        { label: 'Latest Avg Weight', value: `${latest.averageWeight}${weightUnit}`, color: GREEN },
        { label: 'Sample Size', value: `${latest.sampleSize} birds`, color: DARK },
        { label: 'FCR (est.)', value: (() => { const feedAmt = expenses.filter(e => e.category === 'feed').reduce((s, e) => s + e.amount, 0); const wt = batch.currentCount * (latest.averageWeight || 0); return wt ? (feedAmt / wt).toFixed(2) : '—' })(), color: ORANGE },
      ])

      row2('Weight Records', `${weights.length}`)
      if (batch.targetWeight) row2('Target Weight', `${batch.targetWeight}${weightUnit}`)

      weights.slice(0, 8).forEach((w, i) => {
        checkY(7)
        doc.setFontSize(8)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(LIGHT)
        doc.text(fmtDate(w.date), M + 2, y)
        doc.setTextColor(GREEN)
        doc.setFont('helvetica', 'bold')
        doc.text(`${w.averageWeight}${weightUnit} avg`, PAGE_W - M - 2, y, { align: 'right' })
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(LIGHT)
        doc.text(`n=${w.sampleSize}`, M + 60, y, { align: 'center' })
        doc.setDrawColor('#e5e7eb')
        doc.setLineWidth(0.1)
        doc.line(M, y + 1.5, PAGE_W - M, y + 1.5)
        y += 7
      })
    }

    // ── Revenue records ───────────────────────────────────────────
    if (revenues.length > 0) {
      checkY(10)
      y += 4
      sectionHeader('SALES RECORDS')

      revenues.slice(0, 12).forEach((r, i) => {
        checkY(8)
        if (i % 2 === 0) {
          doc.setFillColor('#f0fdf4')
          doc.rect(M, y - 4, COL, 6.5, 'F')
        }
        doc.setFontSize(8)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(LIGHT)
        doc.text(fmtDate(r.date), M + 2, y)
        doc.setTextColor(MID)
        doc.text(r.type, M + 40, y)
        if (r.quantity && r.unitPrice) {
          doc.text(`${r.quantity} × ${fmt(r.unitPrice, sym)}`, M + 80, y)
        }
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(GREEN)
        doc.text(fmt(r.amount, sym), PAGE_W - M - 2, y, { align: 'right' })
        y += 6.5
      })
      if (revenues.length > 12) {
        doc.setFontSize(7.5)
        doc.setTextColor(LIGHT)
        doc.text(`... and ${revenues.length - 12} more records`, M + 2, y)
        y += 6
      }
    }

    // ── Mortality log ─────────────────────────────────────────────
    if (mortality.length > 0) {
      checkY(10)
      y += 4
      sectionHeader('MORTALITY LOG')

      const byCause: Record<string, number> = {}
      mortality.forEach(r => { byCause[r.cause] = (byCause[r.cause] || 0) + r.count })

      Object.entries(byCause).forEach(([cause, count]) => {
        row2(cause.charAt(0).toUpperCase() + cause.slice(1), `${count} birds`)
      })

      checkY(6)
      y += 2
      doc.setFontSize(7.5)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(DARK)
      doc.text(`Total losses: ${mortality.reduce((s,r) => s+r.count, 0)} birds (${mortalityPct}% of initial flock)`, M + 2, y)
      y += 8
    }

    // ── Footer on every page ──────────────────────────────────────
    const totalPages = (doc as any).internal.getNumberOfPages()
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p)
      doc.setDrawColor(ORANGE)
      doc.setLineWidth(0.4)
      doc.line(M, 289, PAGE_W - M, 289)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(LIGHT)
      doc.text(`Vue Chicken  •  ${batch.name}  •  Confidential`, M, 294)
      doc.text(`Page ${p} of ${totalPages}`, PAGE_W - M, 294, { align: 'right' })
    }

    const safeName = batch.name.replace(/[^a-zA-Z0-9]/g, '_')
    doc.save(`${safeName}_performance_report.pdf`)
  }

  return { generateReport }
}
