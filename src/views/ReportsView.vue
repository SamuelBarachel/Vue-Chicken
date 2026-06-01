<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Reports</div>
      <div class="page-subtitle">Financial & production analysis</div>
    </div>

    <!-- Overall P&L -->
    <div class="section">
      <div class="pnl-hero card">
        <div class="pnl-title">Farm P&L Summary</div>
        <div class="big-num mt-1" :class="farmPnl >= 0 ? 'text-green' : 'text-red'">
          {{ farmPnl >= 0 ? '+' : '' }}{{ formatCurrency(farmPnl, sym) }}
        </div>
        <div class="pnl-sub">
          <div><span class="text-muted text-xs">Revenue</span><br><span class="text-green font-bold">{{ formatCurrency(totalRev, sym) }}</span></div>
          <div><span class="text-muted text-xs">Expenses</span><br><span class="text-red font-bold">{{ formatCurrency(totalExp, sym) }}</span></div>
          <div><span class="text-muted text-xs">Margin</span><br><span class="font-bold" :class="margin >= 0 ? 'text-green' : 'text-red'">{{ margin.toFixed(1) }}%</span></div>
        </div>
        <!-- Revenue bar chart (simple CSS) -->
        <div class="rev-chart mt-3" v-if="revenueHistory.length">
          <div class="text-xs text-muted mb-1">Revenue trend (last entries)</div>
          <SparkLine :data="revenueHistory" color="#10B981" width="100%" height="48" />
        </div>
      </div>
    </div>

    <!-- Expense breakdown -->
    <div class="section">
      <div class="section-title mb-2">Expense Breakdown</div>
      <div class="card">
        <div v-for="cat in expenseBreakdown" :key="cat.key" class="exp-cat-row">
          <div class="exp-cat-icon" :style="{ background: cat.color + '22' }">{{ cat.icon }}</div>
          <div class="flex-1">
            <div class="flex-between mb-1">
              <div class="text-sm font-bold">{{ cat.label }}</div>
              <div class="text-sm font-bold">{{ formatCurrency(cat.total, sym) }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: cat.pct + '%', background: cat.color }"/>
            </div>
            <div class="text-xs text-muted mt-1">{{ cat.pct.toFixed(1) }}% of total</div>
          </div>
        </div>
        <div v-if="!expenseBreakdown.length" class="empty-state" style="padding:20px">
          <div class="empty-desc">No expenses recorded yet</div>
        </div>
      </div>
    </div>

    <!-- Per-batch performance -->
    <div class="section">
      <div class="section-title mb-2">Batch Performance</div>
      <div class="batch-perf-list">
        <div v-for="b in batchPerformance" :key="b.id" class="card mb-2">
          <div class="flex-between mb-2">
            <div>
              <div class="font-bold">{{ b.name }}</div>
              <div class="flex gap-2 mt-1">
                <span class="badge" :class="b.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ b.mode }}</span>
                <span class="badge" :class="'badge-' + b.status">{{ b.status }}</span>
              </div>
            </div>
            <div class="text-right">
              <div class="font-bold" :class="b.pnl >= 0 ? 'profit-positive' : 'profit-negative'" style="font-size:18px">
                {{ b.pnl >= 0 ? '+' : '' }}{{ formatCurrency(b.pnl, sym) }}
              </div>
              <div class="text-xs text-muted">P&L</div>
            </div>
          </div>
          <div class="stat-row stat-row-3" style="gap:6px">
            <div class="mini-stat">
              <div class="mini-val">{{ formatCurrency(b.revenue, sym) }}</div>
              <div class="mini-lbl text-green">Revenue</div>
            </div>
            <div class="mini-stat">
              <div class="mini-val">{{ formatCurrency(b.expenses, sym) }}</div>
              <div class="mini-lbl text-red">Costs</div>
            </div>
            <div class="mini-stat">
              <div class="mini-val" :class="b.mortalityPct > 5 ? 'text-red' : 'text-green'">{{ b.mortalityPct.toFixed(1) }}%</div>
              <div class="mini-lbl">Mortality</div>
            </div>
          </div>
          <template v-if="b.mode === 'egg'">
            <div class="divider mt-2"></div>
            <div class="flex-between mt-2">
              <div class="text-xs text-muted">Eggs collected</div>
              <div class="text-xs font-bold text-amber">{{ b.totalEggs.toLocaleString() }}</div>
            </div>
            <div class="flex-between mt-1">
              <div class="text-xs text-muted">Cost per egg</div>
              <div class="text-xs font-bold">{{ b.costPerEgg }}</div>
            </div>
            <div class="flex-between mt-1">
              <div class="text-xs text-muted">Production rate</div>
              <div class="text-xs font-bold text-amber">{{ b.prodRate }}%</div>
            </div>
          </template>
          <template v-if="b.mode === 'meat'">
            <div class="divider mt-2"></div>
            <div class="flex-between mt-2">
              <div class="text-xs text-muted">FCR (feed conversion)</div>
              <div class="text-xs font-bold">{{ b.fcr }}</div>
            </div>
            <div class="flex-between mt-1">
              <div class="text-xs text-muted">Latest avg weight</div>
              <div class="text-xs font-bold text-amber">{{ b.latestWeight }}</div>
            </div>
            <div class="flex-between mt-1">
              <div class="text-xs text-muted">Cost per bird</div>
              <div class="text-xs font-bold">{{ b.costPerBird }}</div>
            </div>
          </template>
        </div>
        <div v-if="!batchPerformance.length" class="empty-state">
          <div class="empty-emoji">📊</div>
          <div class="empty-title">No batch data yet</div>
          <div class="empty-desc">Create your first batch to see reports</div>
        </div>
      </div>
    </div>

    <!-- Mortality insights -->
    <div class="section" v-if="mortalityInsights.length">
      <div class="section-title mb-2">Mortality Insights</div>
      <div class="card">
        <div v-for="ins in mortalityInsights" :key="ins.cause" class="list-item">
          <div class="icon-circle" style="background:var(--red-dim)">{{ ins.icon }}</div>
          <div class="flex-1">
            <div class="text-sm font-bold">{{ ins.cause }}</div>
            <div class="progress-bar mt-1">
              <div class="progress-fill" :style="{ width: ins.pct + '%', background: 'var(--red)' }"/>
            </div>
          </div>
          <div class="text-sm font-bold text-red">{{ ins.count }}</div>
        </div>
      </div>
    </div>

    <!-- Egg production trend (egg batches) -->
    <div class="section" v-if="eggTrend.length > 1">
      <div class="section-title mb-2">Egg Production Trend</div>
      <div class="card">
        <SparkLine :data="eggTrend" color="#EAB308" width="100%" height="64" />
        <div class="flex-between mt-2">
          <div class="text-xs text-muted">Past {{ eggTrend.length }} collections</div>
          <div class="text-xs text-amber font-bold">{{ totalEggs.toLocaleString() }} total</div>
        </div>
      </div>
    </div>

    <div style="height:16px"></div>
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

const revenueHistory = computed(() => revenueStore.revenues.slice(0, 20).map(r => r.amount).reverse())
const eggTrend = computed(() => eggStore.collections.slice(0, 20).map(c => c.totalEggs).reverse())

const expenseBreakdown = computed(() => {
  const cats: Record<string, { key: string; label: string; icon: string; color: string; total: number; pct: number }> = {}
  expenseStore.expenses.forEach(e => {
    if (!cats[e.category]) cats[e.category] = { key: e.category, label: e.category, icon: getCatIcon(e.category), color: getCatColor(e.category), total: 0, pct: 0 }
    cats[e.category].total += e.amount
  })
  const total = totalExp.value
  Object.values(cats).forEach(c => { c.pct = total ? (c.total / total) * 100 : 0 })
  return Object.values(cats).sort((a, b) => b.total - a.total)
})

const batchPerformance = computed(() => {
  return batchStore.batches.map(b => {
    const expenses = expenseStore.expenses.filter(e => e.batchId === b.id).reduce((s, e) => s + e.amount, 0)
    const revenue = revenueStore.revenues.filter(r => r.batchId === b.id).reduce((s, r) => s + r.amount, 0)
    const dead = mortalityStore.records.filter(r => r.batchId === b.id).reduce((s, r) => s + r.count, 0)
    const eggs = eggStore.collections.filter(c => c.batchId === b.id).reduce((s, c) => s + c.totalEggs, 0)
    const days = Math.max(1, Math.floor((Date.now() - new Date(b.startDate).getTime()) / 86400000))
    const latestWt = weightStore.records.filter(r => r.batchId === b.id).sort((a, b2) => b2.date.localeCompare(a.date))[0]
    const feedKg = expenseStore.expenses.filter(e => e.batchId === b.id && e.category === 'feed').reduce((s, e) => s + e.amount, 0)
    const totalWeightKg = (b.currentCount || 0) * (latestWt?.averageWeight || 0)
    return {
      ...b,
      expenses,
      revenue,
      pnl: revenue - expenses,
      mortalityPct: pctNum(dead, b.initialCount),
      totalEggs: eggs,
      costPerEgg: eggs ? formatCurrency(expenses / eggs, sym.value) : '—',
      prodRate: Math.min(100, pctNum(eggs, b.currentCount * days)).toFixed(0),
      fcr: totalWeightKg ? (feedKg / totalWeightKg).toFixed(2) : '—',
      latestWeight: latestWt ? `${latestWt.averageWeight} ${settings.weightUnit}` : '—',
      costPerBird: formatCurrency(expenses / (b.initialCount || 1), sym.value),
    }
  })
})

const mortalityInsights = computed(() => {
  const causes: Record<string, number> = {}
  mortalityStore.records.forEach(r => { causes[r.cause] = (causes[r.cause] || 0) + r.count })
  const total = Object.values(causes).reduce((s, v) => s + v, 0)
  return Object.entries(causes)
    .map(([cause, count]) => ({
      cause: cause.charAt(0).toUpperCase() + cause.slice(1),
      count,
      pct: total ? (count / total) * 100 : 0,
      icon: getMortIcon(cause),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
})

function getMortIcon(cause: string): string {
  const m: Record<string, string> = { disease: '🦠', predator: '🦊', heat: '🌡️', cold: '🥶', stress: '😰', injury: '🩸', unknown: '❓', other: '📌' }
  return m[cause] || '❓'
}
function getCatIcon(cat: string): string {
  const m: Record<string, string> = { feed: '🌾', medicine: '💊', vaccine: '💉', labor: '👷', utilities: '⚡', equipment: '🔧', chicks: '🐥', other: '📦' }
  return m[cat] || '📦'
}
function getCatColor(cat: string): string {
  const m: Record<string, string> = { feed: '#F59E0B', medicine: '#8B5CF6', vaccine: '#3B82F6', labor: '#10B981', utilities: '#EF4444', equipment: '#6B7280', chicks: '#FCD34D', other: '#9CA3AF' }
  return m[cat] || '#9CA3AF'
}
</script>

<style scoped>
.pnl-hero { background: linear-gradient(135deg, #0a1628 0%, #162033 100%); border: 1px solid var(--border2); padding: 20px; }
.pnl-title { font-size: 13px; font-weight: 600; color: var(--text3); text-transform: uppercase; letter-spacing: 0.5px; }
.pnl-sub { display: flex; gap: 0; margin-top: 12px; }
.pnl-sub > div { flex: 1; text-align: center; padding: 0 8px; border-right: 1px solid var(--border); }
.pnl-sub > div:last-child { border-right: none; }
.exp-cat-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); }
.exp-cat-row:last-child { border-bottom: none; }
.exp-cat-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.mini-stat { background: var(--card2); border-radius: 8px; padding: 8px 6px; text-align: center; }
.mini-val { font-size: 13px; font-weight: 700; color: var(--text); }
.mini-lbl { font-size: 10px; color: var(--text3); margin-top: 2px; }
</style>
