<template>
  <div class="page">
    <!-- Header -->
    <div class="page-header">
      <div class="flex-between">
        <div>
          <div class="page-title">🐔 Vue Chicken</div>
          <div class="page-subtitle">{{ todayFormatted }}</div>
        </div>
        <button class="btn btn-ghost btn-icon" @click="$router.push('/batches/new')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- P&L Hero -->
    <div class="section">
      <div class="pnl-card card">
        <div class="pnl-label">Total Profit / Loss</div>
        <div class="big-num" :class="netProfit >= 0 ? 'text-green' : 'text-red'">
          {{ netProfit >= 0 ? '+' : '' }}{{ formatCurrency(netProfit, sym) }}
        </div>
        <div class="pnl-row mt-2">
          <div class="pnl-item">
            <div class="text-xs text-muted">Revenue</div>
            <div class="text-green font-bold">{{ formatCurrency(totalRevenue, sym) }}</div>
          </div>
          <div class="pnl-sep"></div>
          <div class="pnl-item">
            <div class="text-xs text-muted">Expenses</div>
            <div class="text-red font-bold">{{ formatCurrency(totalExpenses, sym) }}</div>
          </div>
          <div class="pnl-sep"></div>
          <div class="pnl-item">
            <div class="text-xs text-muted">Margin</div>
            <div class="font-bold" :class="marginColor">{{ marginPct }}</div>
          </div>
        </div>
        <div class="pnl-sparkline mt-3" v-if="revenueHistory.length > 1">
          <SparkLine :data="revenueHistory" color="#10B981" width="100%" height="44" />
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="section">
      <div class="stat-row">
        <div class="stat-card">
          <div class="stat-label">Active Batches</div>
          <div class="stat-value">{{ activeBatches.length }}</div>
          <div class="stat-sub">{{ eggActive }} egg · {{ meatActive }} meat</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Birds</div>
          <div class="stat-value">{{ totalBirds.toLocaleString() }}</div>
          <div class="stat-sub">{{ totalMortality }} losses total</div>
        </div>
      </div>
      <div class="stat-row mt-2">
        <div class="stat-card">
          <div class="stat-label">🥚 Eggs Today</div>
          <div class="stat-value text-amber">{{ eggsToday.toLocaleString() }}</div>
          <div class="stat-sub">{{ totalEggs.toLocaleString() }} total</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">📉 Mortality Rate</div>
          <div class="stat-value" :class="mortalityRateColor">{{ mortalityRate }}%</div>
          <div class="stat-sub">{{ totalMortality }} birds lost</div>
        </div>
      </div>
    </div>

    <!-- Active Batches -->
    <div class="section" v-if="activeBatches.length">
      <div class="section-header">
        <span class="section-title">Active Batches</span>
        <button class="section-action" @click="$router.push('/batches')">See all</button>
      </div>
      <div class="batch-list">
        <div
          v-for="batch in activeBatches.slice(0, 4)"
          :key="batch.id"
          class="batch-row card card-sm"
          @click="$router.push(`/batches/${batch.id}`)"
        >
          <div class="batch-mode-icon" :class="batch.mode === 'egg' ? 'egg-icon' : 'meat-icon'">
            {{ batch.mode === 'egg' ? '🥚' : '🍗' }}
          </div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="font-bold" style="font-size:14px">{{ batch.name }}</div>
              <div class="badge" :class="batch.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ batch.mode }}</div>
            </div>
            <div class="flex gap-2 mt-1">
              <span class="text-xs text-muted">{{ batch.currentCount }} birds</span>
              <span class="text-xs text-muted">·</span>
              <span class="text-xs text-muted">Wk {{ weeksOld(batch.startDate) }}</span>
              <span class="text-xs text-muted">·</span>
              <span class="text-xs" :class="batchPnl(batch.id) >= 0 ? 'profit-positive' : 'profit-negative'">
                {{ batchPnl(batch.id) >= 0 ? '+' : '' }}{{ formatCurrency(batchPnl(batch.id), sym) }}
              </span>
            </div>
            <!-- Progress bar for mortality -->
            <div class="progress-bar mt-2">
              <div class="progress-fill"
                :style="{ width: batchMortalityPct(batch) + '%', background: batchMortalityPct(batch) > 5 ? 'var(--red)' : 'var(--green)' }" />
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    </div>

    <!-- No batches CTA -->
    <div class="section" v-else>
      <div class="card" style="text-align:center; padding: 32px 20px;">
        <div style="font-size:48px; margin-bottom:12px">🐣</div>
        <div class="font-bold mb-2" style="font-size:17px">Start Your First Batch</div>
        <div class="text-sm text-muted mb-3">Add your first flock to start tracking costs, production, and profits.</div>
        <button class="btn btn-primary" @click="$router.push('/batches/new')" style="margin: 0 auto">+ New Batch</button>
      </div>
    </div>

    <!-- Recent Alerts -->
    <div class="section" v-if="alerts.length">
      <div class="section-title mb-2">⚠️ Alerts</div>
      <div class="alert alert-warn" v-for="a in alerts" :key="a">{{ a }}</div>
    </div>

    <!-- Recent Logs -->
    <div class="section" v-if="recentLogs.length">
      <div class="section-header">
        <span class="section-title">Recent Activity</span>
      </div>
      <div class="card card-sm">
        <div v-for="(log, i) in recentLogs" :key="i" class="list-item">
          <div class="icon-circle" :style="{ background: log.color + '22' }">{{ log.icon }}</div>
          <div class="flex-1">
            <div class="text-sm font-bold">{{ log.title }}</div>
            <div class="text-xs text-muted">{{ log.sub }}</div>
          </div>
          <div class="text-xs text-muted">{{ log.date }}</div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div style="height: 16px"></div>
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
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, formatDateShort, weeksOld, today, pctNum } from '@/utils/formatters'

const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const { settings } = useSettingsStore()

const sym = computed(() => settings.currencySymbol)
const todayFormatted = computed(() => new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }))

const activeBatches = computed(() => batchStore.active)
const eggActive = computed(() => activeBatches.value.filter(b => b.mode === 'egg').length)
const meatActive = computed(() => activeBatches.value.filter(b => b.mode === 'meat').length)
const totalBirds = computed(() => activeBatches.value.reduce((s, b) => s + b.currentCount, 0))
const totalExpenses = computed(() => expenseStore.totalAll)
const totalRevenue = computed(() => revenueStore.totalAll)
const netProfit = computed(() => totalRevenue.value - totalExpenses.value)
const totalMortality = computed(() => mortalityStore.totalAll)
const totalEggs = computed(() => eggStore.totalAll)

const marginPct = computed(() => {
  if (!totalRevenue.value) return '0%'
  return pctNum(netProfit.value, totalRevenue.value).toFixed(1) + '%'
})
const marginColor = computed(() => {
  const m = pctNum(netProfit.value, totalRevenue.value)
  return m >= 0 ? 'text-green' : 'text-red'
})

const mortalityRate = computed(() => {
  const total = batchStore.batches.reduce((s, b) => s + b.initialCount, 0)
  if (!total) return 0
  return ((totalMortality.value / total) * 100).toFixed(1)
})
const mortalityRateColor = computed(() => Number(mortalityRate.value) > 5 ? 'text-red' : 'text-green')

const eggsToday = computed(() => {
  const t = today()
  return eggStore.collections.filter(c => c.date === t).reduce((s, c) => s + c.totalEggs, 0)
})

function batchPnl(batchId: string) {
  const rev = revenueStore.revenues.filter(r => r.batchId === batchId).reduce((s, r) => s + r.amount, 0)
  const exp = expenseStore.expenses.filter(e => e.batchId === batchId).reduce((s, e) => s + e.amount, 0)
  return rev - exp
}

function batchMortalityPct(batch: any) {
  const dead = mortalityStore.records.filter(r => r.batchId === batch.id).reduce((s, r) => s + r.count, 0)
  return pctNum(dead, batch.initialCount)
}

const revenueHistory = computed(() => {
  const last14 = revenueStore.revenues.slice(0, 14).map(r => r.amount)
  return last14.length > 1 ? last14.reverse() : []
})

const alerts = computed(() => {
  const list: string[] = []
  activeBatches.value.forEach(b => {
    const dead = mortalityStore.records.filter(r => r.batchId === b.id).reduce((s, r) => s + r.count, 0)
    const pct = (dead / b.initialCount) * 100
    if (pct > 5) list.push(`"${b.name}" mortality rate is ${pct.toFixed(1)}% — check flock health.`)
  })
  return list.slice(0, 3)
})

const recentLogs = computed(() => {
  const logs: any[] = []
  eggStore.collections.slice(0, 3).forEach(c => {
    const b = batchStore.getById(c.batchId)
    logs.push({ icon: '🥚', color: '#EAB308', title: `${c.totalEggs} eggs collected`, sub: b?.name || 'Unknown batch', date: formatDateShort(c.date) })
  })
  mortalityStore.records.slice(0, 2).forEach(r => {
    const b = batchStore.getById(r.batchId)
    logs.push({ icon: '💀', color: '#EF4444', title: `${r.count} bird loss (${r.cause})`, sub: b?.name || 'Unknown batch', date: formatDateShort(r.date) })
  })
  expenseStore.expenses.slice(0, 2).forEach(e => {
    const b = batchStore.getById(e.batchId)
    logs.push({ icon: '💰', color: '#F59E0B', title: `${e.description}`, sub: b?.name || '', date: formatDateShort(e.date) })
  })
  return logs.sort((a, b) => b.date > a.date ? 1 : -1).slice(0, 6)
})
</script>

<style scoped>
.pnl-card {
  background: linear-gradient(135deg, #162033 0%, #1a2a45 100%);
  border: 1px solid var(--border2);
  padding: 20px;
}
.pnl-label { font-size: 12px; font-weight: 600; color: var(--text3); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
.pnl-row { display: flex; align-items: center; gap: 0; }
.pnl-item { flex: 1; text-align: center; }
.pnl-sep { width: 1px; height: 28px; background: var(--border); }
.pnl-sparkline { margin: 0 -4px; opacity: 0.8; }
.batch-list { display: flex; flex-direction: column; gap: 8px; }
.batch-row { display: flex; align-items: center; gap: 12px; cursor: pointer; transition: border-color 0.15s; }
.batch-row:active { border-color: var(--amber); }
.batch-mode-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.egg-icon { background: rgba(234,179,8,0.1); }
.meat-icon { background: rgba(239,68,68,0.1); }
</style>
