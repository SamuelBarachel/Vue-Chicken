<template>
  <div class="page">
    <div class="page-header">
      <div class="flex-between mb-3">
        <div>
          <div class="page-title">Batches</div>
          <div class="page-subtitle">{{ batchStore.batches.length }} total</div>
        </div>
        <button class="btn btn-primary" style="padding: 10px 16px; font-size:13px" @click="$router.push('/batches/new')">
          + New Batch
        </button>
      </div>
      <!-- Filter chips -->
      <div class="chips-scroll">
        <button v-for="f in filters" :key="f.value" class="chip" :class="{ active: filter === f.value }" @click="filter = f.value">
          {{ f.label }}
        </button>
      </div>
    </div>

    <div class="section">
      <div v-if="filtered.length === 0" class="empty-state">
        <div class="empty-emoji">🐣</div>
        <div class="empty-title">No batches yet</div>
        <div class="empty-desc">Tap "+ New Batch" to add your first flock</div>
      </div>
      <div v-else class="batch-cards">
        <div
          v-for="batch in filtered"
          :key="batch.id"
          class="batch-card card"
          @click="$router.push(`/batches/${batch.id}`)"
        >
          <!-- Mode header stripe -->
          <div class="batch-card-header" :class="batch.mode === 'egg' ? 'egg-stripe' : 'meat-stripe'">
            <div class="batch-card-emoji">{{ batch.mode === 'egg' ? '🥚' : '🍗' }}</div>
            <div class="flex-1">
              <div class="font-bold" style="font-size:16px">{{ batch.name }}</div>
              <div class="text-xs text-muted">{{ batch.breed }} · Started {{ formatDate(batch.startDate) }}</div>
            </div>
            <div class="flex" style="flex-direction:column; align-items:flex-end; gap:4px">
              <div class="badge" :class="'badge-' + batch.status">{{ batch.status }}</div>
              <div class="badge" :class="batch.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ batch.mode }}</div>
            </div>
          </div>

          <!-- Stats row -->
          <div class="batch-stats">
            <div class="bs-item">
              <div class="bs-val">{{ batch.currentCount }}</div>
              <div class="bs-lbl">Birds</div>
            </div>
            <div class="bs-div"></div>
            <div class="bs-item">
              <div class="bs-val">Wk {{ weeksOld(batch.startDate) }}</div>
              <div class="bs-lbl">Age</div>
            </div>
            <div class="bs-div"></div>
            <div class="bs-item">
              <div class="bs-val" :class="batchPnl(batch.id) >= 0 ? 'profit-positive' : 'profit-negative'">
                {{ batchPnl(batch.id) >= 0 ? '+' : '' }}{{ formatCurrency(batchPnl(batch.id), sym) }}
              </div>
              <div class="bs-lbl">P&L</div>
            </div>
            <div class="bs-div"></div>
            <div class="bs-item">
              <div class="bs-val" :class="mortalityPct(batch) > 5 ? 'text-red' : 'text-green'">
                {{ mortalityPct(batch).toFixed(1) }}%
              </div>
              <div class="bs-lbl">Mortality</div>
            </div>
          </div>

          <!-- Egg production or weight bar -->
          <div v-if="batch.mode === 'egg'" class="batch-footer">
            <div class="text-xs text-muted">Production Rate</div>
            <div class="flex-between mt-1">
              <div class="text-xs font-bold text-amber">{{ productionRate(batch) }}%</div>
              <div class="text-xs text-muted">{{ totalEggsForBatch(batch.id) }} total eggs</div>
            </div>
            <div class="progress-bar mt-1">
              <div class="progress-fill" :style="{ width: productionRate(batch) + '%', background: 'var(--amber)' }"/>
            </div>
          </div>
          <div v-else class="batch-footer">
            <div class="flex-between">
              <div class="text-xs text-muted">Latest avg weight</div>
              <div class="text-xs font-bold text-amber">{{ latestWeight(batch.id) }}</div>
            </div>
            <div class="text-xs text-muted mt-1">Target: {{ batch.targetWeight || '—' }} {{ settings.weightUnit }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useRevenueStore } from '@/stores/revenue'
import { useMortalityStore } from '@/stores/mortality'
import { useEggStore } from '@/stores/eggs'
import { useWeightStore } from '@/stores/weights'
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, formatDate, weeksOld, pctNum } from '@/utils/formatters'

const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const weightStore = useWeightStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const filters = [
  { label: 'All', value: 'all' },
  { label: '🐔 Active', value: 'active' },
  { label: '🥚 Egg', value: 'egg' },
  { label: '🍗 Meat', value: 'meat' },
  { label: '✅ Completed', value: 'completed' },
]
const filter = ref('all')

const filtered = computed(() => {
  const b = batchStore.batches
  if (filter.value === 'all') return b
  if (filter.value === 'active') return b.filter(x => x.status === 'active')
  if (filter.value === 'egg') return b.filter(x => x.mode === 'egg')
  if (filter.value === 'meat') return b.filter(x => x.mode === 'meat')
  if (filter.value === 'completed') return b.filter(x => x.status === 'completed' || x.status === 'sold')
  return b
})

function batchPnl(batchId: string) {
  const rev = revenueStore.revenues.filter(r => r.batchId === batchId).reduce((s, r) => s + r.amount, 0)
  const exp = expenseStore.expenses.filter(e => e.batchId === batchId).reduce((s, e) => s + e.amount, 0)
  return rev - exp
}

function mortalityPct(batch: any) {
  const dead = mortalityStore.records.filter(r => r.batchId === batch.id).reduce((s, r) => s + r.count, 0)
  return pctNum(dead, batch.initialCount)
}

function totalEggsForBatch(batchId: string) {
  return eggStore.collections.filter(c => c.batchId === batchId).reduce((s, c) => s + c.totalEggs, 0)
}

function productionRate(batch: any) {
  const daysSinceStart = Math.max(1, Math.floor((Date.now() - new Date(batch.startDate).getTime()) / 86400000))
  const expected = batch.currentCount * daysSinceStart
  const total = totalEggsForBatch(batch.id)
  return Math.min(100, pctNum(total, expected)).toFixed(0)
}

function latestWeight(batchId: string) {
  const latest = weightStore.records.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))[0]
  return latest ? `${latest.averageWeight} ${settings.weightUnit}` : '—'
}
</script>

<style scoped>
.batch-cards { display: flex; flex-direction: column; gap: 12px; }
.batch-card { padding: 0; overflow: hidden; cursor: pointer; transition: border-color 0.15s; }
.batch-card:active { border-color: var(--amber); }
.batch-card-header { display: flex; align-items: flex-start; gap: 12px; padding: 14px 14px 12px; }
.egg-stripe { border-bottom: 1px solid rgba(234,179,8,0.1); }
.meat-stripe { border-bottom: 1px solid rgba(239,68,68,0.1); }
.batch-card-emoji { font-size: 26px; line-height: 1; }
.batch-stats { display: flex; align-items: center; padding: 10px 14px; gap: 0; }
.bs-item { flex: 1; text-align: center; }
.bs-val { font-size: 14px; font-weight: 700; color: var(--text); }
.bs-lbl { font-size: 10px; color: var(--text3); font-weight: 500; margin-top: 2px; }
.bs-div { width: 1px; height: 28px; background: var(--border); }
.batch-footer { padding: 10px 14px 14px; border-top: 1px solid var(--border); }
</style>
