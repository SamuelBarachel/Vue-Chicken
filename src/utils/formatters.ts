export function formatCurrency(amount: number, symbol = '$'): string {
  return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
}

export function today(): string {
  return new Date().toISOString().split('T')[0]
}

export function nowTime(): string {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export function weekAgo(): string {
  const d = new Date()
  d.setDate(d.getDate() - 7)
  return d.toISOString().split('T')[0]
}

export function daysBetween(start: string, end?: string): number {
  const s = new Date(start)
  const e = end ? new Date(end) : new Date()
  return Math.floor((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24))
}

export function weeksOld(startDate: string): number {
  return Math.floor(daysBetween(startDate) / 7)
}

export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export function pct(value: number, total: number): string {
  if (!total) return '0%'
  return `${((value / total) * 100).toFixed(1)}%`
}

export function pctNum(value: number, total: number): number {
  if (!total) return 0
  return parseFloat(((value / total) * 100).toFixed(1))
}
