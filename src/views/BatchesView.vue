<template>
  <div class="page">
    <div class="page-header">
      <div class="flex-between mb-3">
        <div>
          <div class="page-title">Batches</div>
          <div class="page-subtitle">{{ batchStore.batches.length }} total · {{ batchStore.active.length }} active</div>
        </div>
        <button class="btn btn-primary btn-sm" @click="$router.push('/batches/new')">+ New</button>
      </div>
      <div class="chips-scroll">
        <button v-for="f in filters" :key="f.value" class="chip" :class="{ active: filter === f.value }" @click="filter = f.value">
          {{ f.label }}
        </button>
      </div>
    </div>

    <div class="section">
      <div v-if="!filtered.length" class="empty-state">
        <div class="empty-icon">🐣</div>
        <div class="empty-title">No batches found</div>
        <div class="empty-desc">{{ filter === 'all' ? 'Create your first batch to get started.' : 'No batches match this filter.' }}</div>
        <button v-if="filter === 'all'" class="btn btn-primary mt-3" @click="$router.push('/batches/new')" style="margin:16px auto 0">+ Create Batch</button>
      </div>

      <div v-else class="batch-cards">
        <div
          v-for="b in filtered"
          :key="b.id"
          class="batch-card"
          :class="b.mode === 'egg' ? 'bc-egg' : 'bc-meat'"
          @click="$router.push(`/batches/${b.id}`)"
        >
          <!-- Top stripe -->
          <div class="bc-stripe" :class="b.mode === 'egg' ? 'stripe-egg' : 'stripe-meat'"></div>

          <!-- Header -->
          <div class="bc-head">
            <div class="bc-emoji">{{ b.mode === 'egg' ? '🥚' : '🍗' }}</div>
            <div class="flex-1 min-w-0">
              <div class="bc-name">{{ b.name }}</div>
              <div class="bc-breed">{{ b.breed || 'Unknown breed' }}</div>
            </div>
            <div class="bc-badges">
              <div class="badge" :class="'badge-' + b.status">{{ b.status }}</div>
            </div>
          </div>

          <!-- Metrics row -->
          <div class="bc-metrics">
            <div class="bc-metric">
              <div class="bc-m-val">{{ b.currentCount.toLocaleString() }}</div>
              <div class="bc-m-lbl">Birds</div>
            </div>
            <div class="bc-mdiv"></div>
            <div class="bc-metric">
              <div class="bc-m-val">Wk {{ weeksOld(b.startDate) }}</div>
              <div class="bc-m-lbl">Age</div>
            </div>
            <div class="bc-mdiv"></div>
            <div class="bc-metric">
              <div class="bc-m-val" :class="batchPnl(b.id) >= 0 ? 'text-green' : 'text-red'">
                {{ batchPnl(b.id) >= 0 ? '+' : '' }}{{ formatCurrency(batchPnl(b.id), sym) }}
              </div>
              <div class="bc-m-lbl">P&L</div>
            </div>
            <div class="bc-mdiv"></div>
            <div class="bc-metric">
              <div class="bc-m-val" :class="mortalityPct(b) > 5 ? 'text-red' : 'text-green'">
                {{ mortalityPct(b).toFixed(1) }}%
              </div>
              <div class="bc-m-lbl">Mortality</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="bc-footer">
            <template v-if="b.mode === 'egg'">
              <div class="bc-footer-row">
                <div class="text-xxs text-dim font-bold" style="text-transform:uppercase;letter-spacing:.5px">Production Rate</div>
                <div class="text-xs font-bold" style="color:var(--egg2)">{{ productionRate(b) }}%</div>
              </div>
              <div class="progress-bar mt-1">
                <div class="progress-fill" :style="{ width: productionRate(b) + '%', background: 'linear-gradient(90deg, var(--egg), #D4A017)' }"/>
              </div>
              <div class="bc-footer-sub">{{ totalEggsForBatch(b.id).toLocaleString() }} eggs collected</div>
            </template>
            <template v-else>
              <div class="bc-footer-row">
                <div class="text-xxs text-dim font-bold" style="text-transform:uppercase;letter-spacing:.5px">Avg Weight</div>
                <div class="text-xs font-bold" style="color:var(--meat2)">{{ latestWeight(b.id) }}</div>
              </div>
              <div class="bc-footer-row mt-1">
                <div class="text-xxs text-dim">Target: {{ b.targetWeight || '—' }} {{ settings.weightUnit }}</div>
                <div class="text-xxs text-dim">{{ b.targetAgeWeeks || '—' }}wk target age</div>
              </div>
            </template>
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
  { label: 'All', value: 'all' }, { label: '🐔 Active', value: 'active' },
  { label: '🥚 Egg', value: 'egg' }, { label: '🍗 Meat', value: 'meat' },
  { label: '✅ Done', value: 'done' },
]
const filter = ref('all')

const filtered = computed(() => {
  const b = batchStore.batches
  if (filter.value === 'active') return b.filter(x => x.status === 'active')
  if (filter.value === 'egg') return b.filter(x => x.mode === 'egg')
  if (filter.value === 'meat') return b.filter(x => x.mode === 'meat')
  if (filter.value === 'done') return b.filter(x => x.status !== 'active')
  return b
})

function batchPnl(id: string) {
  const rev = revenueStore.revenues.filter(r => r.batchId === id).reduce((s, r) => s + r.amount, 0)
  const exp = expenseStore.expenses.filter(e => e.batchId === id).reduce((s, e) => s + e.amount, 0)
  return rev - exp
}
function mortalityPct(b: any) {
  const dead = mortalityStore.records.filter(r => r.batchId === b.id).reduce((s, r) => s + r.count, 0)
  return pctNum(dead, b.initialCount)
}
function totalEggsForBatch(id: string) {
  return eggStore.collections.filter(c => c.batchId === id).reduce((s, c) => s + c.totalEggs, 0)
}
function productionRate(b: any) {
  const days = Math.max(1, Math.floor((Date.now() - new Date(b.startDate).getTime()) / 86400000))
  const expected = b.currentCount * days
  return Math.min(100, pctNum(totalEggsForBatch(b.id), expected)).toFixed(0)
}
function latestWeight(id: string) {
  const r = weightStore.records.filter(r => r.batchId === id).sort((a, b) => b.date.localeCompare(a.date))[0]
  return r ? `${r.averageWeight} ${settings.weightUnit}` : '— kg'
}
</script>

<style scoped>
.batch-cards { display: flex; flex-direction: column; gap: 12px; }
.min-w-0 { min-width: 0; }

.batch-card {
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.batch-card:active { transform: scale(0.98); }
.bc-egg:active { border-color: var(--egg); }
.bc-meat:active { border-color: var(--meat); }

.bc-stripe { height: 3px; width: 100%; }
.stripe-egg { background: linear-gradient(90deg, var(--egg) 0%, #FCD34D 100%); }
.stripe-meat { background: linear-gradient(90deg, var(--meat) 0%, #FF6B6B 100%); }

.bc-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px 12px;
}
.bc-emoji { font-size: 28px; line-height: 1; flex-shrink: 0; margin-top: 2px; }
.bc-name { font-size: 16px; font-weight: 800; letter-spacing: -0.3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bc-breed { font-size: 12px; color: var(--text3); font-weight: 500; margin-top: 2px; }
.bc-badges { display: flex; flex-direction: column; gap: 4px; align-items: flex-end; flex-shrink: 0; }

.bc-metrics {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: rgba(0,0,0,0.15);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.bc-metric { flex: 1; text-align: center; }
.bc-m-val { font-size: 14px; font-weight: 800; letter-spacing: -0.3px; }
.bc-m-lbl { font-size: 9px; color: var(--text3); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }
.bc-mdiv { width: 1px; height: 30px; background: var(--border2); }

.bc-footer { padding: 12px 16px 14px; }
.bc-footer-row { display: flex; justify-content: space-between; align-items: center; }
.bc-footer-sub { font-size: 11px; color: var(--text3); margin-top: 5px; font-weight: 500; }
</style>
