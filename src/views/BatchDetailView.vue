<template>
  <div class="page" v-if="batch">
    <!-- Header -->
    <div class="page-header">
      <div class="flex-between mb-3">
        <button class="btn btn-ghost btn-icon" @click="$router.back()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div style="text-align:center;flex:1">
          <div style="font-size:13px;color:var(--text2)">{{ batch.breed }}</div>
        </div>
        <button class="btn btn-ghost btn-icon" @click="$router.push(`/batches/${batch.id}/edit`)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
      </div>
      <!-- Batch name + mode banner -->
      <div class="batch-hero" :class="batch.mode === 'egg' ? 'hero-egg' : 'hero-meat'">
        <div class="hero-icon">{{ batch.mode === 'egg' ? '🥚' : '🍗' }}</div>
        <div class="hero-info">
          <div class="hero-name">{{ batch.name }}</div>
          <div class="flex gap-2 mt-1">
            <span class="badge" :class="batch.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ batch.mode }}</span>
            <span class="badge" :class="'badge-' + batch.status">{{ batch.status }}</span>
            <span class="text-xs text-muted">Week {{ weeksOld(batch.startDate) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="section">
      <div class="stat-row">
        <div class="stat-card">
          <div class="stat-label">P&L</div>
          <div class="stat-value-sm" :class="netPnl >= 0 ? 'profit-positive' : 'profit-negative'">
            {{ netPnl >= 0 ? '+' : '' }}{{ formatCurrency(netPnl, sym) }}
          </div>
          <div class="stat-sub">{{ formatCurrency(totalRev, sym) }} in · {{ formatCurrency(totalExp, sym) }} out</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Birds</div>
          <div class="stat-value-sm">{{ batch.currentCount }} / {{ batch.initialCount }}</div>
          <div class="stat-sub">{{ totalDead }} lost ({{ mortalityPct }}%)</div>
        </div>
      </div>
      <div class="stat-row mt-2" v-if="batch.mode === 'egg'">
        <div class="stat-card">
          <div class="stat-label">🥚 Total Eggs</div>
          <div class="stat-value-sm text-amber">{{ totalEggs.toLocaleString() }}</div>
          <div class="stat-sub">{{ prodRate }}% production rate</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Cost / Egg</div>
          <div class="stat-value-sm">{{ costPerEgg }}</div>
          <div class="stat-sub">Rev/egg: {{ revPerEgg }}</div>
        </div>
      </div>
      <div class="stat-row mt-2" v-if="batch.mode === 'meat'">
        <div class="stat-card">
          <div class="stat-label">Avg Weight</div>
          <div class="stat-value-sm text-amber">{{ latestAvgWeight }}</div>
          <div class="stat-sub">Target: {{ batch.targetWeight || '—' }} {{ settings.weightUnit }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">FCR</div>
          <div class="stat-value-sm">{{ fcr }}</div>
          <div class="stat-sub">Feed conversion ratio</div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="section" style="margin-bottom:8px">
      <div class="tabs">
        <button v-for="t in tabs" :key="t.id" class="tab" :class="{ active: activeTab === t.id }" @click="activeTab = t.id">
          {{ t.label }}
        </button>
      </div>
    </div>

    <!-- Tab: Overview -->
    <div v-if="activeTab === 'overview'" class="section">
      <div class="card mb-3">
        <div class="list-item">
          <div class="icon-circle" style="background:var(--amber-dim)">📅</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Started</div>
            <div class="text-xs text-muted">{{ formatDate(batch.startDate) }}</div>
          </div>
          <div class="text-sm text-amber font-bold">Day {{ daysSinceStart }}</div>
        </div>
        <div class="list-item">
          <div class="icon-circle" style="background:var(--green-dim)">🐔</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Current Count</div>
            <div class="text-xs text-muted">{{ batch.initialCount - batch.currentCount }} culled/lost</div>
          </div>
          <div class="text-sm font-bold">{{ batch.currentCount }}</div>
        </div>
        <div class="list-item" v-if="batch.notes">
          <div class="icon-circle" style="background:var(--blue-dim)">📝</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Notes</div>
            <div class="text-xs text-muted">{{ batch.notes }}</div>
          </div>
        </div>
        <div class="list-item">
          <div class="icon-circle" style="background:var(--amber-dim)">💰</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Cost per bird (initial)</div>
            <div class="text-xs text-muted">Total investment</div>
          </div>
          <div class="text-sm font-bold">{{ formatCurrency(totalExp / (batch.initialCount || 1), sym) }}</div>
        </div>
      </div>
      <!-- Quick action buttons -->
      <div class="quick-actions">
        <button v-for="qa in quickActions" :key="qa.label" class="qa-btn" :style="{ background: qa.bg }" @click="qa.action()">
          <span class="qa-icon">{{ qa.icon }}</span>
          <span class="qa-label">{{ qa.label }}</span>
        </button>
      </div>
    </div>

    <!-- Tab: Expenses -->
    <div v-if="activeTab === 'expenses'" class="section">
      <div class="flex-between mb-3">
        <div class="text-sm font-bold">Total: <span class="text-red">{{ formatCurrency(totalExp, sym) }}</span></div>
        <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showExpenseModal = true">+ Add</button>
      </div>
      <!-- Category breakdown -->
      <div class="card mb-3">
        <div v-for="cat in expenseCategories" :key="cat.key" class="list-item">
          <div class="icon-circle" :style="{ background: cat.color + '22' }">{{ cat.icon }}</div>
          <div class="flex-1">
            <div class="text-sm font-bold">{{ cat.label }}</div>
            <div class="progress-bar mt-1"><div class="progress-fill" :style="{ width: cat.pct + '%', background: cat.color }"/></div>
          </div>
          <div class="text-sm font-bold">{{ formatCurrency(cat.total, sym) }}</div>
        </div>
        <div v-if="!batchExpenses.length" class="empty-state" style="padding:20px">
          <div class="empty-emoji" style="font-size:32px">💸</div>
          <div class="empty-desc">No expenses logged yet</div>
        </div>
      </div>
      <!-- Expense list -->
      <div class="card">
        <div v-for="exp in batchExpenses" :key="exp.id" class="list-item">
          <div class="icon-circle" :style="{ background: getCatColor(exp.category) + '22' }">{{ getCatIcon(exp.category) }}</div>
          <div class="flex-1">
            <div class="text-sm font-bold">{{ exp.description }}</div>
            <div class="text-xs text-muted">{{ exp.category }} · {{ formatDate(exp.date) }}</div>
          </div>
          <div class="flex" style="flex-direction:column;align-items:flex-end;gap:4px">
            <div class="text-sm font-bold text-red">{{ formatCurrency(exp.amount, sym) }}</div>
            <button @click="expenseStore.remove(exp.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
            </button>
          </div>
        </div>
        <div v-if="!batchExpenses.length" class="empty-state" style="padding:20px">
          <div class="empty-desc">No expenses recorded</div>
        </div>
      </div>
    </div>

    <!-- Tab: Revenue -->
    <div v-if="activeTab === 'revenue'" class="section">
      <div class="flex-between mb-3">
        <div class="text-sm font-bold">Total: <span class="text-green">{{ formatCurrency(totalRev, sym) }}</span></div>
        <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showRevenueModal = true">+ Add Sale</button>
      </div>
      <div class="card">
        <div v-for="rev in batchRevenues" :key="rev.id" class="list-item">
          <div class="icon-circle" :style="{ background: rev.type === 'eggs' ? 'rgba(234,179,8,0.15)' : 'rgba(239,68,68,0.15)' }">
            {{ rev.type === 'eggs' ? '🥚' : rev.type === 'meat' ? '🥩' : rev.type === 'birds' ? '🐔' : '💵' }}
          </div>
          <div class="flex-1">
            <div class="text-sm font-bold">{{ rev.notes || rev.type }}</div>
            <div class="text-xs text-muted">{{ rev.quantity }} × {{ formatCurrency(rev.unitPrice, sym) }} · {{ formatDate(rev.date) }}</div>
          </div>
          <div class="flex" style="flex-direction:column;align-items:flex-end;gap:4px">
            <div class="text-sm font-bold text-green">+{{ formatCurrency(rev.amount, sym) }}</div>
            <button @click="revenueStore.remove(rev.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            </button>
          </div>
        </div>
        <div v-if="!batchRevenues.length" class="empty-state" style="padding:20px">
          <div class="empty-emoji" style="font-size:32px">💰</div>
          <div class="empty-desc">No revenue recorded yet</div>
        </div>
      </div>
    </div>

    <!-- Tab: Production (egg or meat) -->
    <div v-if="activeTab === 'production'" class="section">
      <template v-if="batch.mode === 'egg'">
        <div class="flex-between mb-3">
          <div class="text-sm font-bold">{{ totalEggs.toLocaleString() }} total eggs</div>
          <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showEggModal = true">+ Collect</button>
        </div>
        <div class="card">
          <div v-for="col in batchEggs" :key="col.id" class="list-item">
            <div class="icon-circle" style="background:rgba(234,179,8,0.15)">🥚</div>
            <div class="flex-1">
              <div class="flex-between">
                <div class="text-sm font-bold">{{ col.totalEggs }} eggs</div>
                <div class="text-xs text-muted">{{ formatDate(col.date) }}</div>
              </div>
              <div class="flex gap-2 mt-1">
                <span class="text-xs text-green">A: {{ col.gradeA }}</span>
                <span class="text-xs text-amber">B: {{ col.gradeB }}</span>
                <span class="text-xs text-red">Broken: {{ col.broken }}</span>
              </div>
              <div class="progress-bar mt-1">
                <div class="progress-fill" :style="{ width: Math.min(100, (col.totalEggs / batch.currentCount) * 100) + '%', background: 'var(--amber)' }"/>
              </div>
            </div>
            <button @click="eggStore.remove(col.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0;margin-left:8px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            </button>
          </div>
          <div v-if="!batchEggs.length" class="empty-state" style="padding:20px">
            <div class="empty-emoji" style="font-size:32px">🥚</div>
            <div class="empty-desc">No egg collections logged yet</div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex-between mb-3">
          <div class="text-sm font-bold">Weight Records</div>
          <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showWeightModal = true">+ Record</button>
        </div>
        <div class="card">
          <div v-for="wt in batchWeights" :key="wt.id" class="list-item">
            <div class="icon-circle" style="background:rgba(239,68,68,0.15)">⚖️</div>
            <div class="flex-1">
              <div class="flex-between">
                <div class="text-sm font-bold">{{ wt.averageWeight }} {{ settings.weightUnit }} avg</div>
                <div class="text-xs text-muted">{{ formatDate(wt.date) }}</div>
              </div>
              <div class="flex gap-2 mt-1">
                <span class="text-xs text-muted">Min: {{ wt.minWeight }}</span>
                <span class="text-xs text-muted">Max: {{ wt.maxWeight }}</span>
                <span class="text-xs text-muted">n={{ wt.sampleSize }}</span>
              </div>
              <div v-if="batch.targetWeight" class="progress-bar mt-1">
                <div class="progress-fill" :style="{ width: Math.min(100, (wt.averageWeight / batch.targetWeight) * 100) + '%', background: 'var(--red)' }"/>
              </div>
            </div>
            <button @click="weightStore.remove(wt.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0;margin-left:8px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            </button>
          </div>
          <div v-if="!batchWeights.length" class="empty-state" style="padding:20px">
            <div class="empty-emoji" style="font-size:32px">⚖️</div>
            <div class="empty-desc">No weight records yet</div>
          </div>
        </div>
      </template>
    </div>

    <!-- Tab: Health -->
    <div v-if="activeTab === 'health'" class="section">
      <div class="flex-between mb-3">
        <div class="text-sm font-bold">{{ totalDead }} birds lost</div>
        <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showMortalityModal = true">+ Log Loss</button>
      </div>
      <div class="card mb-3">
        <div class="list-item">
          <div class="icon-circle" style="background:var(--red-dim)">💀</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Total Mortality</div>
            <div class="progress-bar mt-1"><div class="progress-fill" :style="{ width: mortalityPct + '%', background: Number(mortalityPct) > 5 ? 'var(--red)' : 'var(--green)' }"/></div>
          </div>
          <div class="text-sm font-bold" :class="Number(mortalityPct) > 5 ? 'text-red' : 'text-green'">{{ mortalityPct }}%</div>
        </div>
      </div>
      <div class="card">
        <div v-for="rec in batchMortality" :key="rec.id" class="list-item">
          <div class="icon-circle" style="background:var(--red-dim)">💀</div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="text-sm font-bold">{{ rec.count }} birds — {{ rec.cause }}</div>
              <div class="text-xs text-muted">{{ formatDate(rec.date) }}</div>
            </div>
            <div v-if="rec.notes" class="text-xs text-muted mt-1">{{ rec.notes }}</div>
          </div>
          <button @click="mortalityStore.remove(rec.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0;margin-left:8px">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
          </button>
        </div>
        <div v-if="!batchMortality.length" class="empty-state" style="padding:20px">
          <div class="empty-emoji" style="font-size:32px">✅</div>
          <div class="empty-desc">No mortality events logged — great!</div>
        </div>
      </div>
    </div>

    <!-- Tab: Environment -->
    <div v-if="activeTab === 'env'" class="section">
      <div class="flex-between mb-3">
        <div v-if="latestEnv">
          <div class="text-sm font-bold">Latest: {{ latestEnv.temperature }}°{{ settings.temperatureUnit }}</div>
          <div class="text-xs text-muted" v-if="latestEnv.humidity">Humidity: {{ latestEnv.humidity }}%</div>
        </div>
        <div v-else class="text-sm text-muted">No readings yet</div>
        <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" @click="showEnvModal = true">+ Log</button>
      </div>
      <!-- Temp alert -->
      <div class="alert alert-danger mb-3" v-if="latestEnv && (latestEnv.temperature > 35 || latestEnv.temperature < 18)">
        ⚠️ Temperature out of optimal range (18–32°C)
      </div>
      <div class="card">
        <div v-for="log in batchEnvLogs" :key="log.id" class="list-item">
          <div class="icon-circle" :style="{ background: getTempColor(log.temperature) + '22' }">🌡️</div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="text-sm font-bold">{{ log.temperature }}°{{ settings.temperatureUnit }}</div>
              <div class="text-xs text-muted">{{ formatDate(log.date) }} {{ log.time }}</div>
            </div>
            <div class="flex gap-2 mt-1">
              <span v-if="log.humidity" class="text-xs text-muted">💧{{ log.humidity }}%</span>
              <span v-if="log.ammonia" class="text-xs text-muted">NH₃: {{ log.ammonia }}ppm</span>
              <span v-if="log.ventilation" class="text-xs" :class="log.ventilation === 'good' ? 'text-green' : log.ventilation === 'fair' ? 'text-amber' : 'text-red'">
                Vent: {{ log.ventilation }}
              </span>
            </div>
          </div>
          <button @click="environmentStore.remove(log.id)" style="background:none;border:none;cursor:pointer;color:var(--text3);padding:0;margin-left:8px">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
          </button>
        </div>
        <div v-if="!batchEnvLogs.length" class="empty-state" style="padding:20px">
          <div class="empty-emoji" style="font-size:32px">🌡️</div>
          <div class="empty-desc">No environment logs yet</div>
        </div>
      </div>
    </div>

    <!-- ===== MODALS ===== -->

    <!-- Expense Modal -->
    <ModalSheet v-model="showExpenseModal" title="Add Expense">
      <div class="form-group">
        <label class="form-label">Category</label>
        <select v-model="expForm.category" class="form-select">
          <option value="feed">🌾 Feed</option>
          <option value="medicine">💊 Medicine</option>
          <option value="vaccine">💉 Vaccine</option>
          <option value="labor">👷 Labor</option>
          <option value="utilities">⚡ Utilities</option>
          <option value="equipment">🔧 Equipment</option>
          <option value="chicks">🐥 Chicks</option>
          <option value="other">📦 Other</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Amount ({{ sym }})</label>
          <input v-model.number="expForm.amount" type="number" class="form-input" placeholder="0.00" step="0.01" />
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input v-model="expForm.date" type="date" class="form-input" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <input v-model="expForm.description" class="form-input" placeholder="e.g. 50kg layer mash" />
      </div>
      <button class="btn btn-primary btn-full mt-2" @click="saveExpense" :disabled="!expForm.amount || !expForm.description">Save Expense</button>
    </ModalSheet>

    <!-- Revenue Modal -->
    <ModalSheet v-model="showRevenueModal" title="Record Sale / Revenue">
      <div class="form-group">
        <label class="form-label">Type</label>
        <select v-model="revForm.type" class="form-select">
          <option value="eggs">🥚 Eggs</option>
          <option value="meat">🥩 Meat</option>
          <option value="birds">🐔 Live Birds</option>
          <option value="manure">♻️ Manure</option>
          <option value="other">💵 Other</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Quantity</label>
          <input v-model.number="revForm.quantity" type="number" class="form-input" placeholder="0" />
        </div>
        <div class="form-group">
          <label class="form-label">Unit Price ({{ sym }})</label>
          <input v-model.number="revForm.unitPrice" type="number" class="form-input" placeholder="0.00" step="0.01" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input v-model="revForm.date" type="date" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">Total Amount ({{ sym }})</label>
          <input :value="(revForm.quantity * revForm.unitPrice).toFixed(2)" readonly class="form-input" style="background:var(--card2);color:var(--green2);font-weight:700" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <input v-model="revForm.notes" class="form-input" placeholder="e.g. Sold to market" />
      </div>
      <button class="btn btn-primary btn-full mt-2" @click="saveRevenue" :disabled="!revForm.quantity || !revForm.unitPrice">Save Revenue</button>
    </ModalSheet>

    <!-- Egg Collection Modal -->
    <ModalSheet v-model="showEggModal" title="Log Egg Collection">
      <div class="form-group">
        <label class="form-label">Date</label>
        <input v-model="eggForm.date" type="date" class="form-input" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Grade A 🥇</label>
          <input v-model.number="eggForm.gradeA" type="number" class="form-input" placeholder="0" min="0" @input="syncTotal" />
        </div>
        <div class="form-group">
          <label class="form-label">Grade B 🥈</label>
          <input v-model.number="eggForm.gradeB" type="number" class="form-input" placeholder="0" min="0" @input="syncTotal" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Broken ❌</label>
          <input v-model.number="eggForm.broken" type="number" class="form-input" placeholder="0" min="0" @input="syncTotal" />
        </div>
        <div class="form-group">
          <label class="form-label">Total Eggs</label>
          <input :value="eggForm.gradeA + eggForm.gradeB + eggForm.broken" readonly class="form-input" style="background:var(--card2);color:var(--amber);font-weight:700" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <input v-model="eggForm.notes" class="form-input" placeholder="Any observations…" />
      </div>
      <div class="alert alert-warn mb-2" v-if="(eggForm.gradeA + eggForm.gradeB + eggForm.broken) > 0">
        📊 Production rate: {{ ((eggForm.gradeA + eggForm.gradeB + eggForm.broken) / batch.currentCount * 100).toFixed(1) }}%
      </div>
      <button class="btn btn-primary btn-full mt-2" @click="saveEggs" :disabled="!eggForm.gradeA && !eggForm.gradeB">Save Collection</button>
    </ModalSheet>

    <!-- Weight Modal -->
    <ModalSheet v-model="showWeightModal" title="Record Weight Sample">
      <div class="form-group">
        <label class="form-label">Date</label>
        <input v-model="wtForm.date" type="date" class="form-input" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Avg Weight ({{ settings.weightUnit }})</label>
          <input v-model.number="wtForm.averageWeight" type="number" class="form-input" placeholder="2.1" step="0.01" />
        </div>
        <div class="form-group">
          <label class="form-label">Sample Size</label>
          <input v-model.number="wtForm.sampleSize" type="number" class="form-input" placeholder="20" min="1" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Min Weight</label>
          <input v-model.number="wtForm.minWeight" type="number" class="form-input" placeholder="1.8" step="0.01" />
        </div>
        <div class="form-group">
          <label class="form-label">Max Weight</label>
          <input v-model.number="wtForm.maxWeight" type="number" class="form-input" placeholder="2.4" step="0.01" />
        </div>
      </div>
      <div v-if="batch.targetWeight && wtForm.averageWeight" class="alert alert-warn mb-2">
        Progress to target: {{ ((wtForm.averageWeight / batch.targetWeight) * 100).toFixed(1) }}%
      </div>
      <button class="btn btn-primary btn-full mt-2" @click="saveWeight" :disabled="!wtForm.averageWeight">Save Weight Record</button>
    </ModalSheet>

    <!-- Mortality Modal -->
    <ModalSheet v-model="showMortalityModal" title="Log Mortality">
      <div class="alert alert-danger mb-3">
        <span>⚠️</span> Record bird losses promptly for accurate mortality tracking.
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Birds Lost</label>
          <input v-model.number="mortForm.count" type="number" class="form-input" placeholder="1" min="1" />
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input v-model="mortForm.date" type="date" class="form-input" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Cause</label>
        <select v-model="mortForm.cause" class="form-select">
          <option value="disease">🦠 Disease</option>
          <option value="predator">🦊 Predator</option>
          <option value="heat">🌡️ Heat Stress</option>
          <option value="cold">🥶 Cold Stress</option>
          <option value="stress">😰 Stress</option>
          <option value="injury">🩸 Injury</option>
          <option value="unknown">❓ Unknown</option>
          <option value="other">📌 Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea v-model="mortForm.notes" class="form-textarea" placeholder="Describe symptoms or circumstances…"></textarea>
      </div>
      <button class="btn btn-danger btn-full mt-2" @click="saveMortality" :disabled="!mortForm.count">Record Loss</button>
    </ModalSheet>

    <!-- Environment Modal -->
    <ModalSheet v-model="showEnvModal" title="Log Environment">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Temperature (°{{ settings.temperatureUnit }})</label>
          <input v-model.number="envForm.temperature" type="number" class="form-input" placeholder="28" step="0.1" />
        </div>
        <div class="form-group">
          <label class="form-label">Humidity (%)</label>
          <input v-model.number="envForm.humidity" type="number" class="form-input" placeholder="60" min="0" max="100" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Ammonia (ppm)</label>
          <input v-model.number="envForm.ammonia" type="number" class="form-input" placeholder="0" step="0.1" />
        </div>
        <div class="form-group">
          <label class="form-label">Light Hours</label>
          <input v-model.number="envForm.lightHours" type="number" class="form-input" placeholder="16" min="0" max="24" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input v-model="envForm.date" type="date" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">Time</label>
          <input v-model="envForm.time" type="time" class="form-input" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Ventilation Quality</label>
        <select v-model="envForm.ventilation" class="form-select">
          <option value="good">✅ Good</option>
          <option value="fair">⚠️ Fair</option>
          <option value="poor">❌ Poor</option>
        </select>
      </div>
      <div v-if="envForm.temperature" class="alert mt-2" :class="envForm.temperature > 35 || envForm.temperature < 18 ? 'alert-danger' : 'alert-success'">
        {{ envForm.temperature > 35 ? '🔥 Too hot! Risk of heat stress.' : envForm.temperature < 18 ? '🥶 Too cold! Risk of cold stress.' : '✅ Temperature in optimal range.' }}
      </div>
      <div v-if="envForm.ammonia && envForm.ammonia > 25" class="alert alert-danger mt-2">
        ⚠️ Ammonia levels above 25ppm — improve ventilation immediately!
      </div>
      <button class="btn btn-primary btn-full mt-3" @click="saveEnv" :disabled="!envForm.temperature">Save Reading</button>
    </ModalSheet>
  </div>
  <div class="page flex-center" v-else>
    <div class="empty-state">
      <div class="empty-emoji">🐔</div>
      <div class="empty-title">Batch not found</div>
      <button class="btn btn-primary mt-3" @click="$router.push('/batches')">Back to Batches</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ModalSheet from '@/components/ModalSheet.vue'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useRevenueStore } from '@/stores/revenue'
import { useMortalityStore } from '@/stores/mortality'
import { useEggStore } from '@/stores/eggs'
import { useWeightStore } from '@/stores/weights'
import { useEnvironmentStore } from '@/stores/environment'
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, formatDate, weeksOld, today, nowTime, pctNum } from '@/utils/formatters'

const route = useRoute()
const router = useRouter()
const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const weightStore = useWeightStore()
const environmentStore = useEnvironmentStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const id = computed(() => route.params.id as string)
const batch = computed(() => batchStore.getById(id.value))

const tabs = computed(() => {
  const base = [
    { id: 'overview', label: 'Overview' },
    { id: 'expenses', label: 'Costs' },
    { id: 'revenue', label: 'Revenue' },
    { id: 'production', label: batch.value?.mode === 'egg' ? '🥚 Eggs' : '⚖️ Weights' },
    { id: 'health', label: '💀 Loss' },
    { id: 'env', label: '🌡️ Env' },
  ]
  return base
})
const activeTab = ref('overview')

// Computed metrics
const batchExpenses = computed(() => expenseStore.expenses.filter(e => e.batchId === id.value))
const batchRevenues = computed(() => revenueStore.revenues.filter(r => r.batchId === id.value))
const batchMortality = computed(() => mortalityStore.records.filter(r => r.batchId === id.value))
const batchEggs = computed(() => eggStore.collections.filter(c => c.batchId === id.value).sort((a, b) => b.date.localeCompare(a.date)))
const batchWeights = computed(() => weightStore.records.filter(r => r.batchId === id.value).sort((a, b) => b.date.localeCompare(a.date)))
const batchEnvLogs = computed(() => environmentStore.logs.filter(l => l.batchId === id.value).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time)))
const latestEnv = computed(() => batchEnvLogs.value[0] || null)

const totalExp = computed(() => batchExpenses.value.reduce((s, e) => s + e.amount, 0))
const totalRev = computed(() => batchRevenues.value.reduce((s, r) => s + r.amount, 0))
const netPnl = computed(() => totalRev.value - totalExp.value)
const totalDead = computed(() => batchMortality.value.reduce((s, r) => s + r.count, 0))
const mortalityPct = computed(() => pctNum(totalDead.value, batch.value?.initialCount || 1).toFixed(1))
const totalEggs = computed(() => batchEggs.value.reduce((s, c) => s + c.totalEggs, 0))

const daysSinceStart = computed(() => batch.value ? Math.floor((Date.now() - new Date(batch.value.startDate).getTime()) / 86400000) : 0)

const prodRate = computed(() => {
  if (!batch.value) return '0'
  const expected = (batch.value.currentCount || 1) * daysSinceStart.value
  return Math.min(100, pctNum(totalEggs.value, expected)).toFixed(0)
})

const costPerEgg = computed(() => {
  if (!totalEggs.value) return '—'
  return formatCurrency(totalExp.value / totalEggs.value, sym.value)
})
const revPerEgg = computed(() => {
  if (!totalEggs.value) return '—'
  return formatCurrency(totalRev.value / totalEggs.value, sym.value)
})

const latestAvgWeight = computed(() => {
  const latest = batchWeights.value[0]
  return latest ? `${latest.averageWeight} ${settings.weightUnit}` : '—'
})

const fcr = computed(() => {
  const feedKg = batchExpenses.value.filter(e => e.category === 'feed').reduce((s, e) => s + e.amount, 0)
  const totalWeightKg = (batch.value?.currentCount || 0) * (batchWeights.value[0]?.averageWeight || 0)
  if (!totalWeightKg) return '—'
  return (feedKg / totalWeightKg).toFixed(2)
})

const expenseCategories = computed(() => {
  const cats: Record<string, { label: string; icon: string; color: string; total: number; pct: number; key: string }> = {}
  batchExpenses.value.forEach(e => {
    if (!cats[e.category]) cats[e.category] = { label: e.category, icon: getCatIcon(e.category), color: getCatColor(e.category), total: 0, pct: 0, key: e.category }
    cats[e.category].total += e.amount
  })
  const total = totalExp.value
  Object.values(cats).forEach(c => { c.pct = total ? (c.total / total) * 100 : 0 })
  return Object.values(cats).sort((a, b) => b.total - a.total)
})

function getCatIcon(cat: string): string {
  const m: Record<string, string> = { feed: '🌾', medicine: '💊', vaccine: '💉', labor: '👷', utilities: '⚡', equipment: '🔧', chicks: '🐥', other: '📦' }
  return m[cat] || '📦'
}
function getCatColor(cat: string): string {
  const m: Record<string, string> = { feed: '#F59E0B', medicine: '#8B5CF6', vaccine: '#3B82F6', labor: '#10B981', utilities: '#EF4444', equipment: '#6B7280', chicks: '#FCD34D', other: '#9CA3AF' }
  return m[cat] || '#9CA3AF'
}
function getTempColor(t: number): string {
  if (t > 35) return '#EF4444'
  if (t < 18) return '#3B82F6'
  return '#10B981'
}

const quickActions = computed(() => {
  if (!batch.value) return []
  const base = [
    { icon: '💰', label: 'Add Cost', bg: 'rgba(239,68,68,0.1)', action: () => showExpenseModal.value = true },
    { icon: '💵', label: 'Add Sale', bg: 'rgba(16,185,129,0.1)', action: () => showRevenueModal.value = true },
    { icon: '💀', label: 'Log Loss', bg: 'rgba(100,100,100,0.15)', action: () => showMortalityModal.value = true },
    { icon: '🌡️', label: 'Log Temp', bg: 'rgba(59,130,246,0.1)', action: () => showEnvModal.value = true },
  ]
  if (batch.value.mode === 'egg') base.splice(2, 0, { icon: '🥚', label: 'Collect Eggs', bg: 'rgba(234,179,8,0.1)', action: () => showEggModal.value = true })
  else base.splice(2, 0, { icon: '⚖️', label: 'Record Weight', bg: 'rgba(239,68,68,0.1)', action: () => showWeightModal.value = true })
  return base
})

// Modal states
const showExpenseModal = ref(false)
const showRevenueModal = ref(false)
const showEggModal = ref(false)
const showWeightModal = ref(false)
const showMortalityModal = ref(false)
const showEnvModal = ref(false)

// Forms
const expForm = ref({ category: 'feed' as any, amount: 0, date: today(), description: '' })
const revForm = ref({ type: 'eggs' as any, quantity: 0, unitPrice: 0, date: today(), notes: '' })
const eggForm = ref({ date: today(), gradeA: 0, gradeB: 0, broken: 0, notes: '' })
const wtForm = ref({ date: today(), sampleSize: 20, averageWeight: 0, minWeight: 0, maxWeight: 0, notes: '' })
const mortForm = ref({ count: 1, date: today(), cause: 'unknown' as any, notes: '' })
const envForm = ref({ date: today(), time: nowTime(), temperature: 0, humidity: 0, ammonia: 0, lightHours: 0, ventilation: 'good' as any, notes: '' })

function syncTotal() {}

function saveExpense() {
  if (!expForm.value.amount || !expForm.value.description) return
  expenseStore.add({ batchId: id.value, ...expForm.value })
  expForm.value = { category: 'feed', amount: 0, date: today(), description: '' }
  showExpenseModal.value = false
}

function saveRevenue() {
  if (!revForm.value.quantity || !revForm.value.unitPrice) return
  revenueStore.add({ batchId: id.value, ...revForm.value, amount: revForm.value.quantity * revForm.value.unitPrice })
  revForm.value = { type: 'eggs', quantity: 0, unitPrice: 0, date: today(), notes: '' }
  showRevenueModal.value = false
}

function saveEggs() {
  const total = eggForm.value.gradeA + eggForm.value.gradeB + eggForm.value.broken
  if (!total) return
  eggStore.add({ batchId: id.value, ...eggForm.value, totalEggs: total })
  eggForm.value = { date: today(), gradeA: 0, gradeB: 0, broken: 0, notes: '' }
  showEggModal.value = false
}

function saveWeight() {
  if (!wtForm.value.averageWeight) return
  weightStore.add({ batchId: id.value, ...wtForm.value })
  wtForm.value = { date: today(), sampleSize: 20, averageWeight: 0, minWeight: 0, maxWeight: 0, notes: '' }
  showWeightModal.value = false
}

function saveMortality() {
  if (!mortForm.value.count) return
  mortalityStore.add({ batchId: id.value, ...mortForm.value })
  const b = batch.value
  if (b) batchStore.update(id.value, { currentCount: Math.max(0, b.currentCount - mortForm.value.count) })
  mortForm.value = { count: 1, date: today(), cause: 'unknown', notes: '' }
  showMortalityModal.value = false
}

function saveEnv() {
  if (!envForm.value.temperature) return
  environmentStore.add({ batchId: id.value, ...envForm.value })
  envForm.value = { date: today(), time: nowTime(), temperature: 0, humidity: 0, ammonia: 0, lightHours: 0, ventilation: 'good', notes: '' }
  showEnvModal.value = false
}
</script>

<style scoped>
.batch-hero { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: var(--radius); margin-top: 4px; }
.hero-egg { background: rgba(234,179,8,0.08); border: 1px solid rgba(234,179,8,0.15); }
.hero-meat { background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.15); }
.hero-icon { font-size: 36px; }
.hero-name { font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }

.quick-actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.qa-btn { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 14px 8px; border-radius: 14px; border: 1px solid var(--border); cursor: pointer; transition: all 0.15s; -webkit-tap-highlight-color: transparent; }
.qa-btn:active { transform: scale(0.95); }
.qa-icon { font-size: 22px; }
.qa-label { font-size: 11px; font-weight: 600; color: var(--text2); }
</style>
