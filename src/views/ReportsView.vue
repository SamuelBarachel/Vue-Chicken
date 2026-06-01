<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Reports</div>
      <div class="page-subtitle">Financial & production analytics</div>
    </div>

    <!-- Farm P&L Hero -->
    <div class="section">
      <div class="rpt-hero" :class="farmPnl >= 0 ? 'hero-profit' : 'hero-loss'">
        <div class="rpt-hero-bg"></div>
        <div class="rpt-hero-label">Farm Total P&L</div>
        <div class="big-num mt-1" :class="farmPnl >= 0 ? 'text-green' : 'text-red'">
          {{ farmPnl >= 0 ? '+' : '' }}{{ formatCurrency(farmPnl, sym) }}
        </div>
        <div class="rpt-hero-pills mt-2">
          <div class="rpt-pill green-pill">
            <div class="rpt-pill-dot" style="background:var(--green2)"></div>
            <div>
              <div class="rpt-pill-lbl">Revenue</div>
              <div class="rpt-pill-val text-green">{{ formatCurrency(totalRev, sym) }}</div>
            </div>
          </div>
          <div class="rpt-pill red-pill">
            <div class="rpt-pill-dot" style="background:var(--red2)"></div>
            <div>
              <div class="rpt-pill-lbl">Expenses</div>
              <div class="rpt-pill-val text-red">{{ formatCurrency(totalExp, sym) }}</div>
            </div>
          </div>
          <div class="rpt-pill amber-pill">
            <div class="rpt-pill-dot" style="background:var(--amber2)"></div>
            <div>
              <div class="rpt-pill-lbl">Margin</div>
              <div class="rpt-pill-val" :class="margin >= 0 ? 'text-green' : 'text-red'">{{ margin.toFixed(1) }}%</div>
            </div>
          </div>
        </div>
        <div class="rpt-sparkline mt-3" v-if="revenueHistory.length > 2">
          <div class="text-xxs text-dim mb-1">Revenue trend</div>
          <SparkLine :data="revenueHistory" :color="farmPnl >= 0 ? '#00C896' : '#FF4060'" width="100%" height="52" />
        </div>
      </div>
    </div>

    <!-- Key metrics row -->
    <div class="section">
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Total Eggs</div>
          <div class="stat-value text-egg">{{ totalEggs.toLocaleString() }}</div>
          <div class="stat-sub">all batches</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Bird Losses</div>
          <div class="stat-value" :class="totalMortality > 0 ? 'text-red' : 'text-green'">{{ totalMortality.toLocaleString() }}</div>
          <div class="stat-sub">{{ mortalityRate }}% mortality rate</div>
        </div>
      </div>
    </div>

    <!-- Expense breakdown -->
    <div class="section" v-if="expenseBreakdown.length">
      <div class="section-title mb-3">Expense Breakdown</div>
      <div class="card">
        <div v-for="cat in expenseBreakdown" :key="cat.key" class="exp-row">
          <div class="exp-icon" :style="{ background: cat.color + '18' }">{{ cat.icon }}</div>
          <div class="flex-1">
            <div class="flex-between mb-1">
              <div class="text-sm font-bold" style="text-transform:capitalize">{{ cat.label }}</div>
              <div class="text-sm font-bold">{{ formatCurrency(cat.total, sym) }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: cat.pct + '%', background: cat.color }"/>
            </div>
            <div class="text-xxs text-dim mt-1">{{ cat.pct.toFixed(1) }}% of total</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Batch performance -->
    <div class="section">
      <div class="section-title mb-3">Batch Performance</div>
      <div v-if="!batchPerf.length" class="empty-state">
        <div class="empty-icon">📊</div>
        <div class="empty-title">No batch data yet</div>
        <div class="empty-desc">Create batches to see detailed performance reports</div>
      </div>
      <div v-else class="perf-list">
        <div v-for="b in batchPerf" :key="b.id" class="perf-card card">
          <div class="perf-head">
            <div class="perf-mode-icon">{{ b.mode === 'egg' ? '🥚' : '🍗' }}</div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-bold" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ b.name }}</div>
              <div class="flex gap-1 mt-1">
                <span class="badge" :class="b.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ b.mode }}</span>
                <span class="badge" :class="'badge-' + b.status">{{ b.status }}</span>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="font-heavy letter-tight" :class="b.pnl >= 0 ? 'profit-positive' : 'profit-negative'" style="font-size:17px">
                {{ b.pnl >= 0 ? '+' : '' }}{{ formatCurrency(b.pnl, sym) }}
              </div>
              <div class="text-xxs text-dim">P&L</div>
            </div>
          </div>

          <div class="perf-metrics">
            <div class="pm">
              <div class="pm-val text-green">{{ formatCurrency(b.revenue, sym) }}</div>
              <div class="pm-lbl">Revenue</div>
            </div>
            <div class="pm">
              <div class="pm-val text-red">{{ formatCurrency(b.expenses, sym) }}</div>
              <div class="pm-lbl">Costs</div>
            </div>
            <div class="pm">
              <div class="pm-val" :class="b.mortalityPct > 5 ? 'text-red' : 'text-green'">{{ b.mortalityPct.toFixed(1) }}%</div>
              <div class="pm-lbl">Mortality</div>
            </div>
            <div class="pm" v-if="b.mode === 'egg'">
              <div class="pm-val text-egg">{{ b.totalEggs.toLocaleString() }}</div>
              <div class="pm-lbl">Eggs</div>
            </div>
            <div class="pm" v-else>
              <div class="pm-val text-meat">{{ b.fcr }}</div>
              <div class="pm-lbl">FCR</div>
            </div>
          </div>

          <div class="perf-footer">
            <template v-if="b.mode === 'egg'">
              <div class="flex-between mb-1">
                <span class="text-xxs text-dim font-bold" style="text-transform:uppercase;letter-spacing:.5px">Production Rate</span>
                <span class="text-xs font-bold text-egg">{{ b.prodRate }}%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" :style="{ width:b.prodRate+'%', background:'var(--egg)' }"/></div>
              <div class="flex-between mt-2">
                <span class="text-xxs text-dim">Cost/egg: {{ b.costPerEgg }}</span>
                <span class="text-xxs text-dim">{{ b.totalEggs.toLocaleString() }} total eggs</span>
              </div>
            </template>
            <template v-else>
              <div class="flex-between">
                <span class="text-xxs text-dim">Latest weight: <strong class="text-meat">{{ b.latestWeight }}</strong></span>
                <span class="text-xxs text-dim">Cost/bird: {{ b.costPerBird }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Mortality causes -->
    <div class="section" v-if="mortalityInsights.length">
      <div class="section-title mb-3">Mortality Causes</div>
      <div class="card">
        <div v-for="ins in mortalityInsights" :key="ins.cause" class="list-item">
          <div class="icon-circle" style="background:var(--red-dim);font-size:17px">{{ ins.icon }}</div>
          <div class="flex-1">
            <div class="flex-between mb-1">
              <div class="text-sm font-bold">{{ ins.cause }}</div>
              <div class="text-sm font-bold text-red">{{ ins.count }} birds</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width:ins.pct+'%', background:'var(--red)' }"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Egg production sparkline -->
    <div class="section" v-if="eggTrend.length > 2">
      <div class="section-title mb-3">Egg Production Trend</div>
      <div class="card">
        <SparkLine :data="eggTrend" color="#EAB308" width="100%" height="64" />
        <div class="flex-between mt-2">
          <span class="text-xs text-muted">{{ eggTrend.length }} collections</span>
          <span class="text-xs font-bold text-egg">{{ totalEggs.toLocaleString() }} total eggs</span>
        </div>
      </div>
    </div>

    <div style="height:8px"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SparkLine from '@/components/SparkLine.vue'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useRevenueStore } from '@/stores/revenue'
import { useMortalityStore } from '@/stores/mortality'
import { useEggStore } from '@/stores/eggs'
import { useWeightStore } from '@/stores/weights'
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, pctNum } from '@/utils/formatters'

const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const weightStore = useWeightStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const totalRev = computed(() => revenueStore.totalAll)
const totalExp = computed(() => expenseStore.totalAll)
const farmPnl = computed(() => totalRev.value - totalExp.value)
const margin = computed(() => totalRev.value ? (farmPnl.value / totalRev.value) * 100 : 0)
const totalEggs = computed(() => eggStore.totalAll)
const totalMortality = computed(() => mortalityStore.totalAll)
const mortalityRate = computed(() => {
  const total = batchStore.batches.reduce((s,b) => s+b.initialCount,0)
  return total ? ((totalMortality.value/total)*100).toFixed(1) : '0.0'
})

const revenueHistory = computed(() => revenueStore.revenues.slice(0,20).map(r => r.amount).reverse())
const eggTrend = computed(() => eggStore.collections.slice(0,20).map(c => c.totalEggs).reverse())

const expenseBreakdown = computed(() => {
  const cats: Record<string,any> = {}
  expenseStore.expenses.forEach(e => {
    if (!cats[e.category]) cats[e.category] = { key:e.category, label:e.category, icon:getIcon(e.category), color:getColor(e.category), total:0, pct:0 }
    cats[e.category].total += e.amount
  })
  const total = totalExp.value
  Object.values(cats).forEach(c => { c.pct = total ? (c.total/total)*100 : 0 })
  return Object.values(cats).sort((a,b) => b.total-a.total)
})

const batchPerf = computed(() => batchStore.batches.map(b => {
  const expenses = expenseStore.expenses.filter(e => e.batchId===b.id).reduce((s,e) => s+e.amount,0)
  const revenue = revenueStore.revenues.filter(r => r.batchId===b.id).reduce((s,r) => s+r.amount,0)
  const dead = mortalityStore.records.filter(r => r.batchId===b.id).reduce((s,r) => s+r.count,0)
  const eggs = eggStore.collections.filter(c => c.batchId===b.id).reduce((s,c) => s+c.totalEggs,0)
  const days = Math.max(1,Math.floor((Date.now()-new Date(b.startDate).getTime())/86400000))
  const latestWt = weightStore.records.filter(r => r.batchId===b.id).sort((a,b2) => b2.date.localeCompare(a.date))[0]
  const feedAmt = expenseStore.expenses.filter(e => e.batchId===b.id&&e.category==='feed').reduce((s,e) => s+e.amount,0)
  const wt = (b.currentCount||0)*(latestWt?.averageWeight||0)
  return {
    ...b, expenses, revenue, pnl:revenue-expenses,
    mortalityPct:pctNum(dead,b.initialCount),
    totalEggs:eggs, costPerEgg:eggs ? formatCurrency(expenses/eggs,sym.value) : '—',
    prodRate:Math.min(100,pctNum(eggs,b.currentCount*days)).toFixed(0),
    fcr:wt ? (feedAmt/wt).toFixed(2) : '—',
    latestWeight:latestWt ? `${latestWt.averageWeight}${settings.weightUnit}` : '—',
    costPerBird:formatCurrency(expenses/(b.initialCount||1),sym.value),
  }
}))

const mortalityInsights = computed(() => {
  const causes: Record<string,number> = {}
  mortalityStore.records.forEach(r => { causes[r.cause] = (causes[r.cause]||0)+r.count })
  const total = Object.values(causes).reduce((s,v) => s+v,0)
  return Object.entries(causes).map(([cause,count]) => ({
    cause:cause.charAt(0).toUpperCase()+cause.slice(1), count,
    pct:total?(count/total)*100:0, icon:getMortIcon(cause)
  })).sort((a,b) => b.count-a.count).slice(0,5)
})

function getIcon(c: string) { return { feed:'🌾',medicine:'💊',vaccine:'💉',labor:'👷',utilities:'⚡',equipment:'🔧',chicks:'🐥',other:'📦' }[c]||'📦' }
function getColor(c: string) { return { feed:'#F5A623',medicine:'#9B6BFF',vaccine:'#3B7EFF',labor:'#00C896',utilities:'#FF4060',equipment:'#6B7280',chicks:'#FCD34D',other:'#9CA3AF' }[c]||'#9CA3AF' }
function getMortIcon(c: string) { return { disease:'🦠',predator:'🦊',heat:'🌡️',cold:'🥶',stress:'😰',injury:'🩸',unknown:'❓',other:'📌' }[c]||'❓' }
</script>

<style scoped>
.min-w-0 { min-width:0; }
.flex-shrink-0 { flex-shrink:0; }

/* Hero */
.rpt-hero { border-radius:22px;padding:22px 20px;border:1px solid var(--border);position:relative;overflow:hidden; }
.hero-profit { background:linear-gradient(145deg,#3D2014 0%,#2A1810 60%,#1A0E08 100%); }
.hero-loss   { background:linear-gradient(145deg,#3D100E 0%,#2A0C0A 60%,#1A0808 100%); }
.rpt-hero-bg { position:absolute;top:-40px;right:-40px;width:160px;height:160px;background:radial-gradient(circle,rgba(196,98,45,.12) 0%,transparent 70%);border-radius:50%;pointer-events:none; }
.rpt-hero-label { font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px; }
.rpt-hero-pills { display:flex;gap:10px; }
.rpt-pill { display:flex;align-items:center;gap:8px;flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:10px; }
.rpt-pill-dot { width:7px;height:7px;border-radius:50%;flex-shrink:0; }
.rpt-pill-lbl { font-size:10px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:.5px; }
.rpt-pill-val { font-size:14px;font-weight:900;letter-spacing:-.3px;margin-top:2px; }
.rpt-sparkline { margin:0 -4px;opacity:.75; }

/* Expense rows */
.exp-row { display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid var(--border); }
.exp-row:last-child { border-bottom:none; }
.exp-icon { width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0; }

/* Batch performance */
.perf-list { display:flex;flex-direction:column;gap:12px; }
.perf-card { padding:0;overflow:hidden; }
.perf-head { display:flex;align-items:center;gap:11px;padding:14px 14px 12px; }
.perf-mode-icon { font-size:26px;flex-shrink:0; }
.perf-metrics { display:flex;align-items:center;padding:9px 14px;background:rgba(0,0,0,.15);border-top:1px solid var(--border);border-bottom:1px solid var(--border); }
.pm { flex:1;text-align:center; }
.pm-val { font-size:13px;font-weight:800;letter-spacing:-.3px; }
.pm-lbl { font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:3px; }
.perf-footer { padding:11px 14px 13px; }
</style>
