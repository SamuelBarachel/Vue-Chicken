<template>
  <div class="page">
    <!-- Header -->
    <div class="page-header">
      <div class="flex-between">
        <div>
          <div class="greeting">{{ greeting }}</div>
          <div class="page-title">Farm Overview</div>
        </div>
        <button class="add-batch-btn" @click="$router.push('/batches/new')">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          New Batch
        </button>
      </div>
    </div>

    <!-- P&L Hero Card -->
    <div class="section">
      <div class="hero-card" :class="netProfit >= 0 ? 'hero-profit' : 'hero-loss'">
        <div class="hero-bg-orb"></div>
        <div class="hero-label">Total Farm P&L</div>
        <div class="hero-amount" :class="netProfit >= 0 ? 'text-green' : 'text-red'">
          <span class="hero-sign">{{ netProfit >= 0 ? '+' : '−' }}</span>{{ formatCurrency(Math.abs(netProfit), sym) }}
        </div>
        <div class="hero-meta">
          <div class="hero-meta-item">
            <div class="hero-meta-dot green-dot"></div>
            <div>
              <div class="hero-meta-label">Revenue</div>
              <div class="hero-meta-val text-green">{{ formatCurrency(totalRevenue, sym) }}</div>
            </div>
          </div>
          <div class="hero-meta-div"></div>
          <div class="hero-meta-item">
            <div class="hero-meta-dot red-dot"></div>
            <div>
              <div class="hero-meta-label">Expenses</div>
              <div class="hero-meta-val text-red">{{ formatCurrency(totalExpenses, sym) }}</div>
            </div>
          </div>
          <div class="hero-meta-div"></div>
          <div class="hero-meta-item">
            <div class="hero-meta-dot amber-dot"></div>
            <div>
              <div class="hero-meta-label">Margin</div>
              <div class="hero-meta-val" :class="netProfit >= 0 ? 'text-green' : 'text-red'">{{ marginStr }}</div>
            </div>
          </div>
        </div>
        <div class="hero-spark" v-if="revenueHistory.length > 2">
          <SparkLine :data="revenueHistory" :color="netProfit >= 0 ? '#00C896' : '#FF4060'" width="100%" height="40" />
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="section">
      <div class="stat-grid">
        <div class="stat-card stat-egg" @click="$router.push('/batches')">
          <div class="stat-icon">🥚</div>
          <div class="stat-value">{{ eggsToday.toLocaleString() }}</div>
          <div class="stat-label">Eggs Today</div>
          <div class="stat-sub">{{ totalEggs.toLocaleString() }} total</div>
        </div>
        <div class="stat-card stat-birds" @click="$router.push('/batches')">
          <div class="stat-icon">🐔</div>
          <div class="stat-value">{{ totalBirds.toLocaleString() }}</div>
          <div class="stat-label">Live Birds</div>
          <div class="stat-sub">{{ activeBatches.length }} active batches</div>
        </div>
      </div>
      <div class="stat-grid mt-2">
        <div class="stat-card stat-mortality" :class="mortalityHigh ? 'stat-warn' : ''">
          <div class="stat-icon">📉</div>
          <div class="stat-value" :class="mortalityHigh ? 'text-red' : 'text-green'">{{ mortalityRate }}%</div>
          <div class="stat-label">Mortality Rate</div>
          <div class="stat-sub">{{ totalMortality }} birds lost</div>
        </div>
        <div class="stat-card stat-cost">
          <div class="stat-icon">💸</div>
          <div class="stat-value text-amber">{{ formatCurrency(costPerBird, sym) }}</div>
          <div class="stat-label">Avg Cost / Bird</div>
          <div class="stat-sub">all active batches</div>
        </div>
      </div>
    </div>

    <!-- Alerts -->
    <div class="section" v-if="alerts.length">
      <div class="alert-strip" v-for="(a, i) in alerts" :key="i">
        <div class="alert-strip-icon">⚠️</div>
        <div class="flex-1 text-sm" style="color:var(--amber2)">{{ a }}</div>
      </div>
    </div>

    <!-- Active Batches -->
    <div class="section" v-if="activeBatches.length">
      <div class="section-header">
        <span class="section-title">Active Batches</span>
        <button class="section-action" @click="$router.push('/batches')">See all →</button>
      </div>
      <div class="batch-list">
        <div
          v-for="b in activeBatches.slice(0, 5)"
          :key="b.id"
          class="batch-row"
          :class="b.mode === 'egg' ? 'batch-egg' : 'batch-meat'"
          @click="$router.push(`/batches/${b.id}`)"
        >
          <div class="batch-mode-stripe" :class="b.mode === 'egg' ? 'stripe-egg' : 'stripe-meat'"></div>
          <div class="batch-icon">{{ b.mode === 'egg' ? '🥚' : '🍗' }}</div>
          <div class="flex-1 min-w-0">
            <div class="batch-name">{{ b.name }}</div>
            <div class="batch-meta">
              <span>{{ b.currentCount }} birds</span>
              <span class="dot">·</span>
              <span>Wk {{ weeksOld(b.startDate) }}</span>
              <span class="dot">·</span>
              <span :class="batchPnl(b.id) >= 0 ? 'profit-positive' : 'profit-negative'">
                {{ batchPnl(b.id) >= 0 ? '+' : '' }}{{ formatCurrency(batchPnl(b.id), sym) }}
              </span>
            </div>
          </div>
          <div class="batch-mort" :class="batchMortalityPct(b) > 5 ? 'text-red' : 'text-green'">
            {{ batchMortalityPct(b).toFixed(1) }}%
            <div class="text-xxs text-dim">mort.</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    </div>

    <!-- Empty onboarding -->
    <div class="section" v-else>
      <div class="onboard-card card">
        <div class="onboard-emoji">🐣</div>
        <div class="onboard-title">Start Your First Flock</div>
        <div class="onboard-desc">Track every egg, every cost, and every profit from day one. Choose egg or meat mode to get started.</div>
        <div class="onboard-modes">
          <button class="onboard-mode egg-mode" @click="$router.push('/batches/new?mode=egg')">
            <span class="onboard-mode-icon">🥚</span>
            <span class="onboard-mode-label">Egg Layers</span>
          </button>
          <button class="onboard-mode meat-mode" @click="$router.push('/batches/new?mode=meat')">
            <span class="onboard-mode-icon">🍗</span>
            <span class="onboard-mode-label">Broilers</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mode summary pills -->
    <div class="section" v-if="activeBatches.length">
      <div class="mode-pills">
        <div class="mode-pill egg-pill">
          <span class="mode-pill-icon">🥚</span>
          <div>
            <div class="mode-pill-val">{{ eggActive }}</div>
            <div class="mode-pill-label">Egg Batches</div>
          </div>
          <div class="mode-pill-total">{{ totalEggs.toLocaleString() }} eggs</div>
        </div>
        <div class="mode-pill meat-pill">
          <span class="mode-pill-icon">🍗</span>
          <div>
            <div class="mode-pill-val">{{ meatActive }}</div>
            <div class="mode-pill-label">Meat Batches</div>
          </div>
          <div class="mode-pill-total">{{ totalMeatBirds.toLocaleString() }} birds</div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="section" v-if="recentLogs.length">
      <div class="section-header">
        <span class="section-title">Recent Activity</span>
      </div>
      <div class="card" style="padding: 4px 14px;">
        <div v-for="(log, i) in recentLogs" :key="i" class="activity-row">
          <div class="activity-icon" :style="{ background: log.color + '18', color: log.color }">{{ log.icon }}</div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-bold" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ log.title }}</div>
            <div class="text-xs text-muted">{{ log.sub }}</div>
          </div>
          <div class="text-xxs text-dim flex-shrink-0">{{ log.date }}</div>
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
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, formatDateShort, weeksOld, today, pctNum } from '@/utils/formatters'

const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const { settings } = useSettingsStore()

const sym = computed(() => settings.currencySymbol)

const hour = new Date().getHours()
const greeting = hour < 12 ? 'Good morning 🌅' : hour < 17 ? 'Good afternoon ☀️' : 'Good evening 🌙'

const activeBatches = computed(() => batchStore.active)
const eggActive = computed(() => activeBatches.value.filter(b => b.mode === 'egg').length)
const meatActive = computed(() => activeBatches.value.filter(b => b.mode === 'meat').length)
const totalBirds = computed(() => activeBatches.value.reduce((s, b) => s + b.currentCount, 0))
const totalMeatBirds = computed(() => activeBatches.value.filter(b => b.mode === 'meat').reduce((s, b) => s + b.currentCount, 0))
const totalExpenses = computed(() => expenseStore.totalAll)
const totalRevenue = computed(() => revenueStore.totalAll)
const netProfit = computed(() => totalRevenue.value - totalExpenses.value)
const totalMortality = computed(() => mortalityStore.totalAll)
const totalEggs = computed(() => eggStore.totalAll)

const eggsToday = computed(() => {
  const t = today()
  return eggStore.collections.filter(c => c.date === t).reduce((s, c) => s + c.totalEggs, 0)
})

const mortalityRate = computed(() => {
  const total = batchStore.batches.reduce((s, b) => s + b.initialCount, 0)
  if (!total) return '0.0'
  return ((totalMortality.value / total) * 100).toFixed(1)
})
const mortalityHigh = computed(() => Number(mortalityRate.value) > 5)

const costPerBird = computed(() => {
  const birds = activeBatches.value.reduce((s, b) => s + b.initialCount, 0)
  if (!birds || !totalExpenses.value) return 0
  return totalExpenses.value / birds
})

const marginStr = computed(() => {
  if (!totalRevenue.value) return '0%'
  return ((netProfit.value / totalRevenue.value) * 100).toFixed(1) + '%'
})

const revenueHistory = computed(() =>
  revenueStore.revenues.slice(0, 16).map(r => r.amount).reverse()
)

function batchPnl(id: string) {
  const rev = revenueStore.revenues.filter(r => r.batchId === id).reduce((s, r) => s + r.amount, 0)
  const exp = expenseStore.expenses.filter(e => e.batchId === id).reduce((s, e) => s + e.amount, 0)
  return rev - exp
}

function batchMortalityPct(batch: any) {
  const dead = mortalityStore.records.filter(r => r.batchId === batch.id).reduce((s, r) => s + r.count, 0)
  return pctNum(dead, batch.initialCount)
}

const alerts = computed(() => {
  const list: string[] = []
  activeBatches.value.forEach(b => {
    const dead = mortalityStore.records.filter(r => r.batchId === b.id).reduce((s, r) => s + r.count, 0)
    if ((dead / b.initialCount) * 100 > 5) list.push(`"${b.name}" mortality > 5% — inspect flock health.`)
  })
  return list.slice(0, 2)
})

const recentLogs = computed(() => {
  const logs: any[] = []
  eggStore.collections.slice(0, 2).forEach(c => {
    const b = batchStore.getById(c.batchId)
    logs.push({ icon: '🥚', color: '#EAB308', title: `${c.totalEggs} eggs collected`, sub: b?.name || '', date: formatDateShort(c.date) })
  })
  mortalityStore.records.slice(0, 2).forEach(r => {
    const b = batchStore.getById(r.batchId)
    logs.push({ icon: '💀', color: '#FF4060', title: `${r.count} bird loss — ${r.cause}`, sub: b?.name || '', date: formatDateShort(r.date) })
  })
  expenseStore.expenses.slice(0, 2).forEach(e => {
    const b = batchStore.getById(e.batchId)
    logs.push({ icon: '💰', color: '#F5A623', title: e.description, sub: b?.name || '', date: formatDateShort(e.date) })
  })
  revenueStore.revenues.slice(0, 2).forEach(r => {
    const b = batchStore.getById(r.batchId)
    logs.push({ icon: '💵', color: '#00C896', title: `Sold ${r.quantity} ${r.type}`, sub: b?.name || '', date: formatDateShort(r.date) })
  })
  return logs.slice(0, 5)
})
</script>

<style scoped>
.greeting {
  font-size: 12px;
  font-weight: 600;
  color: var(--text3);
  margin-bottom: 2px;
  letter-spacing: 0.3px;
}

.add-batch-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--amber-dim);
  border: 1.5px solid var(--amber-glow);
  color: var(--amber2);
  padding: 9px 14px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.15s;
}
.add-batch-btn:active { transform: scale(0.96); }

/* Hero Card */
.hero-card {
  border-radius: 22px;
  padding: 22px 20px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border2);
}
.hero-profit { background: linear-gradient(145deg, #091C2E 0%, #0A2240 50%, #0B1E38 100%); }
.hero-loss { background: linear-gradient(145deg, #1C0912 0%, #240F18 50%, #1A0B14 100%); }

.hero-bg-orb {
  position: absolute;
  top: -40px; right: -40px;
  width: 160px; height: 160px;
  background: radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.hero-amount {
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 18px;
}
.hero-sign { font-size: 28px; vertical-align: middle; margin-right: 2px; }

.hero-meta {
  display: flex;
  gap: 0;
  padding: 14px 0;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.hero-meta-item { flex: 1; display: flex; align-items: center; gap: 8px; padding: 0 12px; }
.hero-meta-item:first-child { padding-left: 0; }
.hero-meta-item:last-child { padding-right: 0; }
.hero-meta-div { width: 1px; background: rgba(255,255,255,0.06); }
.hero-meta-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.green-dot { background: var(--green2); box-shadow: 0 0 6px var(--green2); }
.red-dot { background: var(--red2); box-shadow: 0 0 6px var(--red2); }
.amber-dot { background: var(--amber2); box-shadow: 0 0 6px var(--amber2); }
.hero-meta-label { font-size: 10px; color: var(--text3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.hero-meta-val { font-size: 14px; font-weight: 800; letter-spacing: -0.3px; margin-top: 1px; }

.hero-spark { margin: 0 -20px; opacity: 0.7; }

/* Stat cards */
.stat-card {
  cursor: pointer;
  transition: all 0.18s;
  padding: 16px 14px;
}
.stat-card:active { transform: scale(0.97); }
.stat-icon { font-size: 20px; margin-bottom: 10px; }
.stat-card .stat-value { font-size: 28px; font-weight: 900; letter-spacing: -1px; line-height: 1; }
.stat-card .stat-label { font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 0.7px; margin-top: 6px; }
.stat-card .stat-sub { font-size: 11px; color: var(--text3); margin-top: 3px; }
.stat-warn { border-color: rgba(255,64,96,0.3) !important; background: linear-gradient(135deg, var(--card) 60%, rgba(255,64,96,0.05) 100%) !important; }

/* Alert strip */
.alert-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(245,166,35,0.07);
  border: 1px solid rgba(245,166,35,0.18);
  border-radius: 13px;
  padding: 11px 14px;
  margin-bottom: 8px;
}
.alert-strip-icon { font-size: 16px; flex-shrink: 0; }

/* Batch list */
.batch-list { display: flex; flex-direction: column; gap: 8px; }
.batch-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  padding: 13px 14px 13px 0;
  cursor: pointer;
  transition: all 0.18s;
  overflow: hidden;
  position: relative;
}
.batch-row:active { transform: scale(0.98); border-color: var(--amber); }

.batch-mode-stripe {
  width: 4px;
  align-self: stretch;
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
}
.stripe-egg { background: linear-gradient(to bottom, var(--egg), #D4A017); }
.stripe-meat { background: linear-gradient(to bottom, var(--meat), #C62828); }

.batch-icon { font-size: 24px; flex-shrink: 0; margin: 0 2px; }
.batch-name { font-size: 15px; font-weight: 700; letter-spacing: -0.2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.batch-meta { display: flex; align-items: center; gap: 5px; margin-top: 3px; flex-wrap: wrap; }
.batch-meta span { font-size: 12px; color: var(--text2); font-weight: 500; }
.batch-meta .dot { color: var(--text3); }
.batch-mort { text-align: right; font-size: 14px; font-weight: 800; flex-shrink: 0; }

.min-w-0 { min-width: 0; }
.flex-shrink-0 { flex-shrink: 0; }

/* Onboard card */
.onboard-card {
  background: linear-gradient(145deg, var(--card) 0%, #162238 100%);
  border: 1px solid var(--border2);
  text-align: center;
  padding: 32px 24px 24px;
}
.onboard-emoji { font-size: 56px; margin-bottom: 14px; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4)); }
.onboard-title { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 10px; }
.onboard-desc { font-size: 14px; color: var(--text2); line-height: 1.6; max-width: 280px; margin: 0 auto 24px; }
.onboard-modes { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.onboard-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px 12px;
  border-radius: 16px;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
}
.egg-mode { background: var(--egg-dim); border-color: var(--egg-glow); }
.egg-mode:active { transform: scale(0.96); }
.meat-mode { background: var(--meat-dim); border-color: var(--meat-glow); }
.meat-mode:active { transform: scale(0.96); }
.onboard-mode-icon { font-size: 32px; }
.onboard-mode-label { font-size: 13px; font-weight: 800; }
.egg-mode .onboard-mode-label { color: var(--egg2); }
.meat-mode .onboard-mode-label { color: var(--meat2); }

/* Mode pills */
.mode-pills { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mode-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius);
  padding: 14px;
  border: 1px solid transparent;
}
.egg-pill { background: var(--egg-dim); border-color: var(--egg-glow); }
.meat-pill { background: var(--meat-dim); border-color: var(--meat-glow); }
.mode-pill-icon { font-size: 22px; }
.mode-pill-val { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }
.egg-pill .mode-pill-val { color: var(--egg2); }
.meat-pill .mode-pill-val { color: var(--meat2); }
.mode-pill-label { font-size: 10px; color: var(--text3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.mode-pill-total { font-size: 11px; color: var(--text3); margin-left: auto; font-weight: 600; }

/* Activity */
.activity-row {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px 0;
  border-bottom: 1px solid var(--border);
}
.activity-row:last-child { border-bottom: none; }
.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}
</style>
