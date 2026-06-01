<template>
  <div class="page" v-if="batch">
    <!-- Header -->
    <div class="page-header" style="padding-bottom:0">
      <div class="flex-between mb-2">
        <button class="btn btn-ghost btn-icon" @click="$router.back()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div class="flex gap-2">
          <button class="btn btn-ghost btn-sm" @click="$router.push(`/batches/${batch.id}/edit`)">Edit</button>
        </div>
      </div>

      <!-- Batch banner -->
      <div class="batch-banner" :class="batch.mode === 'egg' ? 'banner-egg' : 'banner-meat'">
        <div class="banner-glow" :class="batch.mode === 'egg' ? 'glow-egg' : 'glow-meat'"></div>
        <div class="banner-body">
          <div class="banner-icon">{{ batch.mode === 'egg' ? '🥚' : '🍗' }}</div>
          <div class="flex-1">
            <div class="banner-name">{{ batch.name }}</div>
            <div class="banner-breed">{{ batch.breed || 'Unknown breed' }}</div>
            <div class="banner-badges">
              <span class="badge" :class="batch.mode === 'egg' ? 'badge-egg' : 'badge-meat'">{{ batch.mode }}</span>
              <span class="badge" :class="'badge-' + batch.status">{{ batch.status }}</span>
              <span class="text-xxs text-dim" style="font-weight:700">Week {{ weeksOld(batch.startDate) }}</span>
            </div>
          </div>
          <div class="banner-pnl" :class="netPnl >= 0 ? 'text-green' : 'text-red'">
            {{ netPnl >= 0 ? '+' : '' }}{{ formatCurrency(netPnl, sym) }}
            <div class="text-xxs text-dim" style="text-align:right;margin-top:3px;color:var(--text3)">P&L</div>
          </div>
        </div>
        <!-- KPI strip -->
        <div class="banner-kpis">
          <div class="bkpi">
            <div class="bkpi-val">{{ batch.currentCount.toLocaleString() }}</div>
            <div class="bkpi-lbl">Birds</div>
          </div>
          <div class="bkpi-div"></div>
          <div class="bkpi">
            <div class="bkpi-val" :class="Number(mortalityPct) > 5 ? 'text-red' : 'text-green'">{{ mortalityPct }}%</div>
            <div class="bkpi-lbl">Mortality</div>
          </div>
          <div class="bkpi-div"></div>
          <div class="bkpi" v-if="batch.mode === 'egg'">
            <div class="bkpi-val text-egg">{{ totalEggs.toLocaleString() }}</div>
            <div class="bkpi-lbl">Eggs</div>
          </div>
          <div class="bkpi" v-else>
            <div class="bkpi-val text-meat">{{ latestAvgWeight }}</div>
            <div class="bkpi-lbl">Avg Wt</div>
          </div>
          <div class="bkpi-div"></div>
          <div class="bkpi">
            <div class="bkpi-val text-red">{{ formatCurrency(totalExp, sym) }}</div>
            <div class="bkpi-lbl">Cost</div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="detail-tabs scroll-x" style="padding: 12px 16px 0; gap:4px; display:flex">
        <button
          v-for="t in tabs"
          :key="t.id"
          class="detail-tab"
          :class="{ 'tab-active': activeTab === t.id }"
          @click="activeTab = t.id"
        >{{ t.label }}</button>
      </div>
    </div>

    <!-- ───── OVERVIEW ───── -->
    <div v-if="activeTab === 'overview'" class="section mt-2">
      <!-- Quick actions -->
      <div class="qa-grid mb-4">
        <button v-for="qa in quickActions" :key="qa.label" class="qa-btn" :style="{ '--qa-color': qa.color }" @click="qa.action()">
          <div class="qa-ico">{{ qa.icon }}</div>
          <div class="qa-lbl">{{ qa.label }}</div>
        </button>
      </div>

      <!-- Financials -->
      <div class="section-title mb-2">Financials</div>
      <div class="fin-row mb-3">
        <div class="fin-card fin-rev">
          <div class="fin-label">Revenue</div>
          <div class="fin-amount text-green">{{ formatCurrency(totalRev, sym) }}</div>
          <div class="fin-sub">{{ batchRevenues.length }} transactions</div>
        </div>
        <div class="fin-card fin-exp">
          <div class="fin-label">Expenses</div>
          <div class="fin-amount text-red">{{ formatCurrency(totalExp, sym) }}</div>
          <div class="fin-sub">{{ batchExpenses.length }} entries</div>
        </div>
      </div>

      <!-- Expense breakdown -->
      <div class="card mb-3" v-if="expenseCategories.length">
        <div class="section-title mb-3">Cost Breakdown</div>
        <div v-for="cat in expenseCategories" :key="cat.key" class="cat-row">
          <div class="cat-icon" :style="{ background: cat.color + '20' }">{{ cat.icon }}</div>
          <div class="flex-1">
            <div class="flex-between mb-1">
              <div class="text-sm font-bold" style="text-transform:capitalize">{{ cat.label }}</div>
              <div class="text-sm font-bold">{{ formatCurrency(cat.total, sym) }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: cat.pct + '%', background: cat.color }"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Mode specific insight -->
      <div class="insight-card mb-3" v-if="batch.mode === 'egg'">
        <div class="insight-row">
          <div class="insight-item"><div class="ins-val text-egg">{{ prodRate }}%</div><div class="ins-lbl">Prod Rate</div></div>
          <div class="insight-item"><div class="ins-val">{{ costPerEgg }}</div><div class="ins-lbl">Cost/Egg</div></div>
          <div class="insight-item"><div class="ins-val text-green">{{ revPerEgg }}</div><div class="ins-lbl">Rev/Egg</div></div>
          <div class="insight-item"><div class="ins-val">{{ daysSinceStart }}d</div><div class="ins-lbl">Days Old</div></div>
        </div>
      </div>
      <div class="insight-card mb-3" v-if="batch.mode === 'meat'">
        <div class="insight-row">
          <div class="insight-item"><div class="ins-val text-meat">{{ latestAvgWeight }}</div><div class="ins-lbl">Avg Wt</div></div>
          <div class="insight-item"><div class="ins-val">{{ fcr }}</div><div class="ins-lbl">FCR</div></div>
          <div class="insight-item"><div class="ins-val">{{ formatCurrency(totalExp / (batch.initialCount || 1), sym) }}</div><div class="ins-lbl">Cost/Bird</div></div>
          <div class="insight-item"><div class="ins-val">{{ daysSinceStart }}d</div><div class="ins-lbl">Days Old</div></div>
        </div>
      </div>

      <!-- Batch info -->
      <div class="card">
        <div class="list-item">
          <div class="icon-circle" style="background:var(--blue-dim);font-size:17px">📅</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Started</div>
            <div class="text-xs text-muted">{{ formatDate(batch.startDate) }}</div>
          </div>
          <div class="text-sm font-bold text-amber">Day {{ daysSinceStart }}</div>
        </div>
        <div class="list-item" v-if="batch.notes">
          <div class="icon-circle" style="background:var(--amber-dim);font-size:17px">📝</div>
          <div class="flex-1"><div class="text-sm font-bold">Notes</div><div class="text-xs text-muted">{{ batch.notes }}</div></div>
        </div>
      </div>
    </div>

    <!-- ───── EXPENSES ───── -->
    <div v-if="activeTab === 'expenses'" class="section mt-2">
      <div class="tab-action-row mb-3">
        <div>
          <div class="text-sm font-bold">Total Costs</div>
          <div class="stat-value-sm text-red">{{ formatCurrency(totalExp, sym) }}</div>
        </div>
        <button class="btn btn-primary btn-sm" @click="showExpenseModal = true">+ Add Cost</button>
      </div>
      <div class="card" style="padding:4px 14px">
        <div v-for="exp in batchExpenses" :key="exp.id" class="list-item">
          <div class="icon-circle" :style="{ background: getCatColor(exp.category) + '20', fontSize: '17px' }">{{ getCatIcon(exp.category) }}</div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-bold" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ exp.description }}</div>
            <div class="text-xs text-muted" style="text-transform:capitalize">{{ exp.category }} · {{ formatDate(exp.date) }}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div class="text-sm font-bold text-red">{{ formatCurrency(exp.amount, sym) }}</div>
            <button @click.stop="expenseStore.remove(exp.id)" class="del-btn">✕</button>
          </div>
        </div>
        <div v-if="!batchExpenses.length" class="empty-state" style="padding:28px 0"><div class="empty-icon" style="font-size:36px">💸</div><div class="empty-desc">No expenses yet — tap "+ Add Cost" to start</div></div>
      </div>
    </div>

    <!-- ───── REVENUE ───── -->
    <div v-if="activeTab === 'revenue'" class="section mt-2">
      <div class="tab-action-row mb-3">
        <div>
          <div class="text-sm font-bold">Total Revenue</div>
          <div class="stat-value-sm text-green">{{ formatCurrency(totalRev, sym) }}</div>
        </div>
        <button class="btn btn-primary btn-sm" @click="showRevenueModal = true">+ Add Sale</button>
      </div>
      <div class="card" style="padding:4px 14px">
        <div v-for="rev in batchRevenues" :key="rev.id" class="list-item">
          <div class="icon-circle" :style="{ background: rev.type === 'eggs' ? 'var(--egg-dim)' : 'var(--meat-dim)', fontSize: '17px' }">
            {{ rev.type === 'eggs' ? '🥚' : rev.type === 'meat' ? '🥩' : rev.type === 'birds' ? '🐔' : '💵' }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-bold">{{ rev.notes || rev.type }}</div>
            <div class="text-xs text-muted">{{ rev.quantity }} × {{ formatCurrency(rev.unitPrice, sym) }} · {{ formatDate(rev.date) }}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div class="text-sm font-bold text-green">+{{ formatCurrency(rev.amount, sym) }}</div>
            <button @click.stop="revenueStore.remove(rev.id)" class="del-btn">✕</button>
          </div>
        </div>
        <div v-if="!batchRevenues.length" class="empty-state" style="padding:28px 0"><div class="empty-icon" style="font-size:36px">💵</div><div class="empty-desc">No sales recorded yet</div></div>
      </div>
    </div>

    <!-- ───── PRODUCTION ───── -->
    <div v-if="activeTab === 'production'" class="section mt-2">
      <!-- EGG mode -->
      <template v-if="batch.mode === 'egg'">
        <div class="tab-action-row mb-3">
          <div>
            <div class="text-sm font-bold">Total Eggs</div>
            <div class="stat-value-sm text-egg">{{ totalEggs.toLocaleString() }}</div>
          </div>
          <button class="btn btn-primary btn-sm" @click="showEggModal = true">+ Collect</button>
        </div>
        <div class="card" style="padding:4px 14px">
          <div v-for="col in batchEggs" :key="col.id" class="list-item">
            <div class="icon-circle" style="background:var(--egg-dim);font-size:17px">🥚</div>
            <div class="flex-1">
              <div class="flex-between">
                <div class="text-sm font-bold">{{ col.totalEggs }} eggs</div>
                <div class="text-xs text-dim">{{ formatDate(col.date) }}</div>
              </div>
              <div class="flex gap-2 mt-1">
                <span class="egg-grade grade-a">A: {{ col.gradeA }}</span>
                <span class="egg-grade grade-b">B: {{ col.gradeB }}</span>
                <span class="egg-grade grade-broken">✕: {{ col.broken }}</span>
              </div>
              <div class="progress-bar mt-1">
                <div class="progress-fill" :style="{ width: Math.min(100,(col.totalEggs/batch.currentCount)*100)+'%', background: 'var(--egg)' }"/>
              </div>
            </div>
            <button @click.stop="eggStore.remove(col.id)" class="del-btn" style="margin-left:8px">✕</button>
          </div>
          <div v-if="!batchEggs.length" class="empty-state" style="padding:28px 0"><div class="empty-icon" style="font-size:36px">🥚</div><div class="empty-desc">Log your first egg collection</div></div>
        </div>
      </template>

      <!-- MEAT mode -->
      <template v-else>
        <div class="tab-action-row mb-3">
          <div>
            <div class="text-sm font-bold">Weight Records</div>
            <div class="stat-value-sm text-meat">{{ batchWeights.length }} records</div>
          </div>
          <button class="btn btn-primary btn-sm" @click="showWeightModal = true">+ Record</button>
        </div>
        <div class="card" style="padding:4px 14px">
          <div v-for="wt in batchWeights" :key="wt.id" class="list-item">
            <div class="icon-circle" style="background:var(--meat-dim);font-size:17px">⚖️</div>
            <div class="flex-1">
              <div class="flex-between">
                <div class="text-sm font-bold">{{ wt.averageWeight }} {{ settings.weightUnit }} avg</div>
                <div class="text-xs text-dim">{{ formatDate(wt.date) }}</div>
              </div>
              <div class="flex gap-2 mt-1">
                <span class="text-xs text-muted">↓{{ wt.minWeight }}</span>
                <span class="text-xs text-muted">↑{{ wt.maxWeight }}</span>
                <span class="text-xs text-muted">n={{ wt.sampleSize }}</span>
              </div>
              <div v-if="batch.targetWeight" class="progress-bar mt-1">
                <div class="progress-fill" :style="{ width: Math.min(100,(wt.averageWeight/batch.targetWeight)*100)+'%', background:'var(--meat)' }"/>
              </div>
            </div>
            <button @click.stop="weightStore.remove(wt.id)" class="del-btn" style="margin-left:8px">✕</button>
          </div>
          <div v-if="!batchWeights.length" class="empty-state" style="padding:28px 0"><div class="empty-icon" style="font-size:36px">⚖️</div><div class="empty-desc">Log your first weight sample</div></div>
        </div>
      </template>
    </div>

    <!-- ───── MORTALITY ───── -->
    <div v-if="activeTab === 'health'" class="section mt-2">
      <div class="tab-action-row mb-3">
        <div>
          <div class="text-sm font-bold">Total Lost</div>
          <div class="stat-value-sm" :class="Number(mortalityPct) > 5 ? 'text-red' : 'text-green'">{{ totalDead }} birds</div>
        </div>
        <button class="btn btn-primary btn-sm" @click="showMortalityModal = true">+ Log Loss</button>
      </div>
      <div v-if="totalDead > 0" class="mortality-bar mb-3">
        <div class="mort-header">
          <span class="text-xs text-muted">Mortality rate</span>
          <span class="text-xs font-bold" :class="Number(mortalityPct) > 5 ? 'text-red' : 'text-green'">{{ mortalityPct }}%</span>
        </div>
        <div class="progress-bar mt-1" style="height:8px">
          <div class="progress-fill" :style="{ width: Math.min(100, Number(mortalityPct) * 4)+'%', background: Number(mortalityPct) > 5 ? 'var(--red)' : 'var(--green)' }"/>
        </div>
        <div class="text-xxs text-dim mt-1">Target: below 5% · Currently: {{ mortalityPct }}%</div>
      </div>
      <div class="card" style="padding:4px 14px">
        <div v-for="rec in batchMortality" :key="rec.id" class="list-item">
          <div class="icon-circle" style="background:var(--red-dim);font-size:17px">💀</div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="text-sm font-bold">{{ rec.count }} {{ rec.count === 1 ? 'bird' : 'birds' }} · {{ rec.cause }}</div>
              <div class="text-xs text-dim">{{ formatDate(rec.date) }}</div>
            </div>
            <div v-if="rec.notes" class="text-xs text-muted mt-1">{{ rec.notes }}</div>
          </div>
          <button @click.stop="mortalityStore.remove(rec.id)" class="del-btn" style="margin-left:8px">✕</button>
        </div>
        <div v-if="!batchMortality.length" class="empty-state" style="padding:28px 0">
          <div class="empty-icon" style="font-size:36px">✅</div>
          <div class="empty-desc">No mortality events — keep it up!</div>
        </div>
      </div>
    </div>

    <!-- ───── ENVIRONMENT ───── -->
    <div v-if="activeTab === 'env'" class="section mt-2">
      <div class="tab-action-row mb-3">
        <div v-if="latestEnv">
          <div class="text-sm font-bold">Latest Reading</div>
          <div class="stat-value-sm" :class="getTempClass(latestEnv.temperature)">{{ latestEnv.temperature }}°{{ settings.temperatureUnit }}</div>
        </div>
        <div v-else class="text-sm text-muted">No readings yet</div>
        <button class="btn btn-primary btn-sm" @click="showEnvModal = true">+ Log</button>
      </div>
      <div v-if="latestEnv" class="env-cards mb-3">
        <div class="env-card" v-if="latestEnv.humidity"><div class="env-ico">💧</div><div class="env-val">{{ latestEnv.humidity }}%</div><div class="env-lbl">Humidity</div></div>
        <div class="env-card" v-if="latestEnv.ammonia"><div class="env-ico">🫧</div><div class="env-val" :class="latestEnv.ammonia > 25 ? 'text-red' : 'text-green'">{{ latestEnv.ammonia }}</div><div class="env-lbl">NH₃ ppm</div></div>
        <div class="env-card" v-if="latestEnv.lightHours"><div class="env-ico">💡</div><div class="env-val">{{ latestEnv.lightHours }}h</div><div class="env-lbl">Light</div></div>
        <div class="env-card" v-if="latestEnv.ventilation"><div class="env-ico">💨</div><div class="env-val" :class="latestEnv.ventilation === 'good' ? 'text-green' : latestEnv.ventilation === 'fair' ? 'text-amber' : 'text-red'" style="font-size:13px;text-transform:capitalize">{{ latestEnv.ventilation }}</div><div class="env-lbl">Ventilation</div></div>
      </div>
      <div v-if="latestEnv && (latestEnv.temperature > 35 || latestEnv.temperature < 18)" class="alert alert-danger mb-3">
        ⚠️ Temp {{ latestEnv.temperature > 35 ? 'too high' : 'too low' }} — risk of {{ latestEnv.temperature > 35 ? 'heat' : 'cold' }} stress!
      </div>
      <div class="card" style="padding:4px 14px">
        <div v-for="log in batchEnvLogs" :key="log.id" class="list-item">
          <div class="icon-circle" :style="{ background: getTempBg(log.temperature), fontSize: '17px' }">🌡️</div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="text-sm font-bold" :class="getTempClass(log.temperature)">{{ log.temperature }}°{{ settings.temperatureUnit }}</div>
              <div class="text-xs text-dim">{{ formatDate(log.date) }} {{ log.time }}</div>
            </div>
            <div class="flex gap-2 mt-1">
              <span v-if="log.humidity" class="text-xs text-muted">💧{{ log.humidity }}%</span>
              <span v-if="log.ammonia" class="text-xs" :class="log.ammonia > 25 ? 'text-red' : 'text-muted'">NH₃ {{ log.ammonia }}ppm</span>
              <span v-if="log.ventilation" class="text-xs" :class="log.ventilation === 'good' ? 'text-green' : log.ventilation === 'fair' ? 'text-amber' : 'text-red'">{{ log.ventilation }}</span>
            </div>
          </div>
          <button @click.stop="environmentStore.remove(log.id)" class="del-btn" style="margin-left:8px">✕</button>
        </div>
        <div v-if="!batchEnvLogs.length" class="empty-state" style="padding:28px 0"><div class="empty-icon" style="font-size:36px">🌡️</div><div class="empty-desc">No environment readings yet</div></div>
      </div>
    </div>

    <!-- ───── FEED ───── -->
    <div v-if="activeTab === 'feed'" class="section mt-2">
      <div class="tab-action-row mb-3">
        <div v-if="latestFeed">
          <div class="text-sm font-bold">Last Restocked</div>
          <div class="stat-value-sm text-amber">{{ formatDate(latestFeed.date) }}</div>
        </div>
        <div v-else class="text-sm text-muted">No feed logged yet</div>
        <button class="btn btn-primary btn-sm" @click="$router.push('/log')">🌾 Log Feed</button>
      </div>

      <!-- Summary card -->
      <div v-if="latestFeed" class="feed-summary mb-3"
        :class="feedRateStatus === 'ok' ? 'fsc-ok' : feedRateStatus === 'under' ? 'fsc-under' : 'fsc-over'">
        <div class="fsc-row">
          <div class="fsc-item">
            <div class="fsc-val">{{ latestFeed.quantityKg }}kg</div>
            <div class="fsc-lbl">Stocked</div>
          </div>
          <div class="fsc-div"></div>
          <div class="fsc-item">
            <div class="fsc-val"
              :class="feedRateStatus === 'ok' ? 'text-green' : feedRateStatus === 'under' ? 'text-red' : 'text-amber'">
              {{ currentFeedRate }}g
            </div>
            <div class="fsc-lbl">g/bird/day</div>
          </div>
          <div class="fsc-div"></div>
          <div class="fsc-item">
            <div class="fsc-val" :class="feedDaysRemaining <= 1 ? 'text-red' : feedDaysRemaining <= 3 ? 'text-amber' : 'text-green'">
              {{ feedDaysRemaining }}d
            </div>
            <div class="fsc-lbl">Remaining</div>
          </div>
        </div>
        <div class="fsc-status">
          {{ feedRateStatus === 'ok' ? '✅ Feed rate is good' : feedRateStatus === 'under' ? '⬇️ Possible underfeeding' : '⬆️ Possible overfeeding' }}
          · Rec: {{ FEED_REC[batch.mode] || 110 }}g/bird/day
        </div>
      </div>

      <!-- History list -->
      <div class="card" style="padding:4px 14px">
        <div v-for="rec in batchFeedRecords" :key="rec.id" class="list-item">
          <div class="icon-circle" style="background:rgba(245,166,35,0.15);font-size:17px">🌾</div>
          <div class="flex-1">
            <div class="flex-between">
              <div class="text-sm font-bold">{{ rec.quantityKg }}kg{{ rec.feedType ? ' · ' + rec.feedType : '' }}</div>
              <div class="text-xs text-dim">{{ formatDate(rec.date) }}</div>
            </div>
            <div class="flex gap-2 mt-1" style="align-items:center">
              <span class="text-xs text-muted">{{ rec.durationDays }}d planned</span>
              <span class="feed-rate-badge" :class="feedRateBadgeClass(rec)">{{ getFeedRate(rec) }}g/b/d</span>
            </div>
          </div>
          <button @click.stop="feedStockStore.remove(rec.id)" class="del-btn" style="margin-left:8px">✕</button>
        </div>
        <div v-if="!batchFeedRecords.length" class="empty-state" style="padding:28px 0">
          <div class="empty-icon" style="font-size:36px">🌾</div>
          <div class="empty-desc">No feed logged — tap "Log Feed" to start</div>
        </div>
      </div>
    </div>

    <!-- ===== MODALS ===== -->
    <ModalSheet v-model="showExpenseModal" title="Add Expense">
      <div class="form-group"><label class="form-label">Category</label>
        <select v-model="expForm.category" class="form-select">
          <option value="feed">🌾 Feed</option><option value="medicine">💊 Medicine</option>
          <option value="vaccine">💉 Vaccine / Dewormer</option><option value="labor">👷 Labor</option>
          <option value="utilities">⚡ Utilities</option><option value="equipment">🔧 Equipment</option>
          <option value="chicks">🐥 Chicks</option><option value="other">📦 Other</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Amount ({{ sym }})</label><input v-model.number="expForm.amount" type="number" class="form-input" placeholder="0.00" step="0.01" /></div>
        <div class="form-group"><label class="form-label">Date</label><input v-model="expForm.date" type="date" class="form-input" /></div>
      </div>
      <div class="form-group"><label class="form-label">Description</label><input v-model="expForm.description" class="form-input" placeholder="e.g. 50kg Starter Mash" /></div>
      <button class="btn btn-primary btn-full mt-2" style="height:50px" @click="saveExpense" :disabled="!expForm.amount || !expForm.description">💰 Save Expense</button>
    </ModalSheet>

    <ModalSheet v-model="showRevenueModal" title="Record Sale">
      <div class="form-group"><label class="form-label">Type</label>
        <select v-model="revForm.type" class="form-select">
          <option value="eggs">🥚 Eggs</option><option value="meat">🥩 Meat / Dressed</option>
          <option value="birds">🐔 Live Birds</option><option value="manure">♻️ Manure</option><option value="other">💵 Other</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Quantity</label><input v-model.number="revForm.quantity" type="number" class="form-input" placeholder="0" /></div>
        <div class="form-group"><label class="form-label">Unit Price ({{ sym }})</label><input v-model.number="revForm.unitPrice" type="number" class="form-input" placeholder="0.00" step="0.01" /></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Date</label><input v-model="revForm.date" type="date" class="form-input" /></div>
        <div class="form-group"><label class="form-label">Total ({{ sym }})</label><input :value="(revForm.quantity * revForm.unitPrice).toFixed(2)" readonly class="form-input" style="color:var(--green2);font-weight:800" /></div>
      </div>
      <div class="form-group"><label class="form-label">Notes</label><input v-model="revForm.notes" class="form-input" placeholder="Buyer, market, notes…" /></div>
      <button class="btn btn-success btn-full mt-2" style="height:50px" @click="saveRevenue" :disabled="!revForm.quantity || !revForm.unitPrice">💵 Record Sale</button>
    </ModalSheet>

    <ModalSheet v-model="showEggModal" title="Egg Collection">
      <div class="form-group"><label class="form-label">Date</label><input v-model="eggForm.date" type="date" class="form-input" /></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Grade A 🥇</label><input v-model.number="eggForm.gradeA" type="number" class="form-input" placeholder="0" min="0" /></div>
        <div class="form-group"><label class="form-label">Grade B 🥈</label><input v-model.number="eggForm.gradeB" type="number" class="form-input" placeholder="0" min="0" /></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Broken ❌</label><input v-model.number="eggForm.broken" type="number" class="form-input" placeholder="0" min="0" /></div>
        <div class="form-group"><label class="form-label">Total</label><input :value="eggForm.gradeA + eggForm.gradeB + eggForm.broken" readonly class="form-input" style="color:var(--egg2);font-weight:800;font-size:18px" /></div>
      </div>
      <div class="prod-rate-chip" v-if="eggForm.gradeA + eggForm.gradeB + eggForm.broken > 0">
        📊 Production rate: <strong>{{ ((eggForm.gradeA + eggForm.gradeB + eggForm.broken) / batch.currentCount * 100).toFixed(1) }}%</strong>
      </div>
      <div class="form-group mt-2"><label class="form-label">Notes</label><input v-model="eggForm.notes" class="form-input" placeholder="Any observations…" /></div>
      <button class="btn btn-primary btn-full mt-2" style="height:50px" @click="saveEggs" :disabled="!eggForm.gradeA && !eggForm.gradeB">🥚 Save Collection</button>
    </ModalSheet>

    <ModalSheet v-model="showWeightModal" title="Weight Sample">
      <div class="form-group"><label class="form-label">Date</label><input v-model="wtForm.date" type="date" class="form-input" /></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Avg Weight ({{ settings.weightUnit }})</label><input v-model.number="wtForm.averageWeight" type="number" class="form-input" placeholder="2.1" step="0.01" /></div>
        <div class="form-group"><label class="form-label">Sample Size (birds)</label><input v-model.number="wtForm.sampleSize" type="number" class="form-input" placeholder="20" /></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Min ({{ settings.weightUnit }})</label><input v-model.number="wtForm.minWeight" type="number" class="form-input" placeholder="1.8" step="0.01" /></div>
        <div class="form-group"><label class="form-label">Max ({{ settings.weightUnit }})</label><input v-model.number="wtForm.maxWeight" type="number" class="form-input" placeholder="2.4" step="0.01" /></div>
      </div>
      <div v-if="batch.targetWeight && wtForm.averageWeight" class="prod-rate-chip">
        🎯 Progress to target: <strong>{{ Math.min(100,(wtForm.averageWeight/batch.targetWeight)*100).toFixed(1) }}%</strong>
      </div>
      <button class="btn btn-primary btn-full mt-3" style="height:50px" @click="saveWeight" :disabled="!wtForm.averageWeight">⚖️ Save Weight Record</button>
    </ModalSheet>

    <ModalSheet v-model="showMortalityModal" title="Log Bird Loss">
      <div class="alert alert-danger mb-3"><span>⚠️</span> Record promptly for accurate mortality tracking.</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Birds Lost</label><input v-model.number="mortForm.count" type="number" class="form-input" style="font-size:22px;font-weight:800;color:var(--red2)" placeholder="1" min="1" /></div>
        <div class="form-group"><label class="form-label">Date</label><input v-model="mortForm.date" type="date" class="form-input" /></div>
      </div>
      <div class="form-group"><label class="form-label">Cause</label>
        <select v-model="mortForm.cause" class="form-select">
          <option value="disease">🦠 Disease</option><option value="predator">🦊 Predator</option>
          <option value="heat">🌡️ Heat Stress</option><option value="cold">🥶 Cold Stress</option>
          <option value="stress">😰 Stress</option><option value="injury">🩸 Injury</option>
          <option value="unknown">❓ Unknown</option><option value="other">📌 Other</option>
        </select>
      </div>
      <div class="form-group"><label class="form-label">Notes / Symptoms</label><textarea v-model="mortForm.notes" class="form-textarea" placeholder="Describe symptoms or circumstances observed…"></textarea></div>
      <button class="btn btn-danger btn-full mt-2" style="height:50px;font-size:15px" @click="saveMortality" :disabled="!mortForm.count">💀 Record Loss</button>
    </ModalSheet>

    <ModalSheet v-model="showEnvModal" title="Environment Log">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Temperature (°{{ settings.temperatureUnit }})</label><input v-model.number="envForm.temperature" type="number" class="form-input" style="font-size:20px;font-weight:800" placeholder="28" step="0.1" /></div>
        <div class="form-group"><label class="form-label">Humidity (%)</label><input v-model.number="envForm.humidity" type="number" class="form-input" placeholder="60" min="0" max="100" /></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Ammonia (ppm)</label><input v-model.number="envForm.ammonia" type="number" class="form-input" placeholder="0" step="0.5" /></div>
        <div class="form-group"><label class="form-label">Light Hours</label><input v-model.number="envForm.lightHours" type="number" class="form-input" placeholder="16" min="0" max="24" /></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Date</label><input v-model="envForm.date" type="date" class="form-input" /></div>
        <div class="form-group"><label class="form-label">Time</label><input v-model="envForm.time" type="time" class="form-input" /></div>
      </div>
      <div class="form-group"><label class="form-label">Ventilation</label>
        <select v-model="envForm.ventilation" class="form-select">
          <option value="good">✅ Good</option><option value="fair">⚠️ Fair</option><option value="poor">❌ Poor — needs attention</option>
        </select>
      </div>
      <div v-if="envForm.temperature" class="prod-rate-chip" :class="envForm.temperature > 35 || envForm.temperature < 18 ? 'chip-danger' : 'chip-ok'">
        {{ envForm.temperature > 35 ? '🔥 Too hot — heat stress risk!' : envForm.temperature < 18 ? '🥶 Too cold — cold stress risk!' : '✅ Temperature in optimal range (18–32°C)' }}
      </div>
      <div v-if="envForm.ammonia > 25" class="alert alert-danger mt-2">⚠️ NH₃ > 25ppm — improve ventilation immediately!</div>
      <button class="btn btn-primary btn-full mt-3" style="height:50px" @click="saveEnv" :disabled="!envForm.temperature">🌡️ Save Reading</button>
    </ModalSheet>
  </div>

  <!-- Not found -->
  <div class="page flex-center" v-else>
    <div class="empty-state"><div class="empty-icon">🐔</div><div class="empty-title">Batch not found</div><button class="btn btn-primary mt-3" @click="$router.push('/batches')">Back to Batches</button></div>
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
import { useFeedStockStore } from '@/stores/feedStock'
import { useActivityLogStore } from '@/stores/activityLog'
import { useAuthStore } from '@/stores/auth'
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
const feedStockStore = useFeedStockStore()
const activityLogStore = useActivityLogStore()
const authStore = useAuthStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const id = computed(() => route.params.id as string)
const batch = computed(() => batchStore.getById(id.value))

const tabs = computed(() => [
  { id: 'overview', label: 'Overview' },
  { id: 'expenses', label: '💸 Costs' },
  { id: 'revenue', label: '💵 Sales' },
  { id: 'production', label: batch.value?.mode === 'egg' ? '🥚 Eggs' : '⚖️ Weights' },
  { id: 'feed', label: '🌾 Feed' },
  { id: 'health', label: '💀 Loss' },
  { id: 'env', label: '🌡️ Env' },
])
const activeTab = ref('overview')

const batchExpenses = computed(() => expenseStore.expenses.filter(e => e.batchId === id.value))
const batchRevenues = computed(() => revenueStore.revenues.filter(r => r.batchId === id.value))
const batchMortality = computed(() => mortalityStore.records.filter(r => r.batchId === id.value))
const batchEggs = computed(() => eggStore.collections.filter(c => c.batchId === id.value).sort((a,b) => b.date.localeCompare(a.date)))
const batchWeights = computed(() => weightStore.records.filter(r => r.batchId === id.value).sort((a,b) => b.date.localeCompare(a.date)))
const batchEnvLogs = computed(() => environmentStore.logs.filter(l => l.batchId === id.value).sort((a,b) => (b.date+b.time).localeCompare(a.date+a.time)))
const latestEnv = computed(() => batchEnvLogs.value[0] || null)
const batchFeedRecords = computed(() => feedStockStore.records.filter(r => r.batchId === id.value).sort((a,b) => b.date.localeCompare(a.date)))
const latestFeed = computed(() => batchFeedRecords.value[0] || null)
const FEED_REC: Record<string, number> = { egg: 120, meat: 100 }
const currentFeedRate = computed(() => {
  if (!latestFeed.value || !batch.value?.currentCount) return 0
  return Math.round((latestFeed.value.quantityKg * 1000) / latestFeed.value.durationDays / batch.value.currentCount)
})
const feedRateStatus = computed(() => {
  if (!latestFeed.value) return 'none'
  const rec = FEED_REC[batch.value?.mode || 'egg']
  const ratio = currentFeedRate.value / rec
  if (ratio < 0.80) return 'under'
  if (ratio > 1.25) return 'over'
  return 'ok'
})
const feedDaysRemaining = computed(() => {
  if (!latestFeed.value) return 0
  const feedDate = new Date(latestFeed.value.date)
  const daysSince = Math.floor((Date.now() - feedDate.getTime()) / 86400000)
  return Math.max(0, latestFeed.value.durationDays - daysSince)
})
function getFeedRate(rec: { quantityKg: number; durationDays: number }) {
  if (!batch.value?.currentCount) return 0
  return Math.round((rec.quantityKg * 1000) / rec.durationDays / batch.value.currentCount)
}
function feedRateBadgeClass(rec: { quantityKg: number; durationDays: number }) {
  const recommended = FEED_REC[batch.value?.mode || 'egg']
  const ratio = getFeedRate(rec) / recommended
  if (ratio < 0.80) return 'rate-under'
  if (ratio > 1.25) return 'rate-over'
  return 'rate-ok'
}

function logActivity(category: Parameters<typeof activityLogStore.log>[0], description: string) {
  const u = authStore.user
  if (!u) return
  activityLogStore.log(category, description, { uid: u.id, displayName: u.username, email: u.email || null, photoURL: u.profileImage || null }, { batchId: id.value, batchName: batch.value?.name })
}

const totalExp = computed(() => batchExpenses.value.reduce((s,e) => s+e.amount, 0))
const totalRev = computed(() => batchRevenues.value.reduce((s,r) => s+r.amount, 0))
const netPnl = computed(() => totalRev.value - totalExp.value)
const totalDead = computed(() => batchMortality.value.reduce((s,r) => s+r.count, 0))
const mortalityPct = computed(() => pctNum(totalDead.value, batch.value?.initialCount || 1).toFixed(1))
const totalEggs = computed(() => batchEggs.value.reduce((s,c) => s+c.totalEggs, 0))
const daysSinceStart = computed(() => batch.value ? Math.floor((Date.now()-new Date(batch.value.startDate).getTime())/86400000) : 0)

const prodRate = computed(() => {
  if (!batch.value) return '0'
  const exp = (batch.value.currentCount||1)*daysSinceStart.value
  return Math.min(100, pctNum(totalEggs.value, exp)).toFixed(0)
})
const costPerEgg = computed(() => totalEggs.value ? formatCurrency(totalExp.value/totalEggs.value, sym.value) : '—')
const revPerEgg = computed(() => totalEggs.value ? formatCurrency(totalRev.value/totalEggs.value, sym.value) : '—')
const latestAvgWeight = computed(() => {
  const r = batchWeights.value[0]
  return r ? `${r.averageWeight}${settings.weightUnit}` : '—'
})
const fcr = computed(() => {
  const feedAmt = batchExpenses.value.filter(e => e.category==='feed').reduce((s,e) => s+e.amount, 0)
  const wt = (batch.value?.currentCount||0)*(batchWeights.value[0]?.averageWeight||0)
  return wt ? (feedAmt/wt).toFixed(2) : '—'
})

const expenseCategories = computed(() => {
  const cats: Record<string, any> = {}
  batchExpenses.value.forEach(e => {
    if (!cats[e.category]) cats[e.category] = { key:e.category, label:e.category, icon:getCatIcon(e.category), color:getCatColor(e.category), total:0, pct:0 }
    cats[e.category].total += e.amount
  })
  const total = totalExp.value
  Object.values(cats).forEach(c => { c.pct = total ? (c.total/total)*100 : 0 })
  return Object.values(cats).sort((a,b) => b.total-a.total)
})

function getCatIcon(c: string) {
  return { feed:'🌾', medicine:'💊', vaccine:'💉', labor:'👷', utilities:'⚡', equipment:'🔧', chicks:'🐥', other:'📦' }[c] || '📦'
}
function getCatColor(c: string) {
  return { feed:'#F5A623', medicine:'#9B6BFF', vaccine:'#3B7EFF', labor:'#00C896', utilities:'#FF4060', equipment:'#6B7280', chicks:'#FCD34D', other:'#9CA3AF' }[c] || '#9CA3AF'
}
function getTempClass(t: number) { return t > 35 ? 'text-red' : t < 18 ? 'text-blue' : 'text-green' }
function getTempBg(t: number) { return t > 35 ? 'rgba(255,64,96,0.12)' : t < 18 ? 'rgba(59,126,255,0.12)' : 'rgba(0,200,150,0.12)' }

const quickActions = computed(() => {
  if (!batch.value) return []
  const base = [
    { icon:'💰', label:'Add Cost', color:'#FF4060', action:() => showExpenseModal.value = true },
    { icon:'💵', label:'Add Sale', color:'#00C896', action:() => showRevenueModal.value = true },
    { icon:'💀', label:'Log Loss', color:'#9B6BFF', action:() => showMortalityModal.value = true },
    { icon:'🌡️', label:'Log Temp', color:'#3B7EFF', action:() => showEnvModal.value = true },
  ]
  if (batch.value.mode === 'egg') base.splice(2,0,{ icon:'🥚', label:'Collect Eggs', color:'#EAB308', action:() => showEggModal.value = true })
  else base.splice(2,0,{ icon:'⚖️', label:'Weigh Birds', color:'#E53935', action:() => showWeightModal.value = true })
  return base
})

// Modals
const showExpenseModal = ref(false)
const showRevenueModal = ref(false)
const showEggModal = ref(false)
const showWeightModal = ref(false)
const showMortalityModal = ref(false)
const showEnvModal = ref(false)

const expForm = ref({ category:'feed' as any, amount:0, date:today(), description:'' })
const revForm = ref({ type:'eggs' as any, quantity:0, unitPrice:0, date:today(), notes:'' })
const eggForm = ref({ date:today(), gradeA:0, gradeB:0, broken:0, notes:'' })
const wtForm = ref({ date:today(), sampleSize:20, averageWeight:0, minWeight:0, maxWeight:0, notes:'' })
const mortForm = ref({ count:1, date:today(), cause:'unknown' as any, notes:'' })
const envForm = ref({ date:today(), time:nowTime(), temperature:0, humidity:0, ammonia:0, lightHours:0, ventilation:'good' as any })

function saveExpense() {
  if (!expForm.value.amount || !expForm.value.description) return
  expenseStore.add({ batchId:id.value, ...expForm.value })
  logActivity('expense', `💸 ${expForm.value.description} — ${formatCurrency(expForm.value.amount, sym.value)} [${expForm.value.category}]`)
  expForm.value = { category:'feed', amount:0, date:today(), description:'' }
  showExpenseModal.value = false
}
function saveRevenue() {
  if (!revForm.value.quantity || !revForm.value.unitPrice) return
  revenueStore.add({ batchId:id.value, ...revForm.value, amount:revForm.value.quantity*revForm.value.unitPrice })
  logActivity('revenue', `💵 Sale: ${revForm.value.quantity} × ${formatCurrency(revForm.value.unitPrice, sym.value)} = ${formatCurrency(revForm.value.quantity*revForm.value.unitPrice, sym.value)} [${revForm.value.type}]`)
  revForm.value = { type:'eggs', quantity:0, unitPrice:0, date:today(), notes:'' }
  showRevenueModal.value = false
}
function saveEggs() {
  const total = eggForm.value.gradeA+eggForm.value.gradeB+eggForm.value.broken
  if (!total) return
  eggStore.add({ batchId:id.value, ...eggForm.value, totalEggs:total })
  logActivity('eggs', `🥚 Collected ${total} eggs (A:${eggForm.value.gradeA} B:${eggForm.value.gradeB} ✕:${eggForm.value.broken})`)
  eggForm.value = { date:today(), gradeA:0, gradeB:0, broken:0, notes:'' }
  showEggModal.value = false
}
function saveWeight() {
  if (!wtForm.value.averageWeight) return
  weightStore.add({ batchId:id.value, ...wtForm.value })
  logActivity('weight', `⚖️ Weight sample: ${wtForm.value.averageWeight}${settings.weightUnit} avg (n=${wtForm.value.sampleSize})`)
  wtForm.value = { date:today(), sampleSize:20, averageWeight:0, minWeight:0, maxWeight:0, notes:'' }
  showWeightModal.value = false
}
function saveMortality() {
  if (!mortForm.value.count) return
  mortalityStore.add({ batchId:id.value, ...mortForm.value })
  const b = batch.value
  if (b) batchStore.update(id.value, { currentCount:Math.max(0,b.currentCount-mortForm.value.count) })
  logActivity('mortality', `💀 ${mortForm.value.count} bird${mortForm.value.count > 1 ? 's' : ''} lost — cause: ${mortForm.value.cause}`)
  mortForm.value = { count:1, date:today(), cause:'unknown', notes:'' }
  showMortalityModal.value = false
}
function saveEnv() {
  if (!envForm.value.temperature) return
  environmentStore.add({ batchId:id.value, ...envForm.value, notes:'' })
  logActivity('env', `🌡️ Temp ${envForm.value.temperature}°${settings.temperatureUnit}, humidity ${envForm.value.humidity}%, ventilation: ${envForm.value.ventilation}`)
  envForm.value = { date:today(), time:nowTime(), temperature:0, humidity:0, ammonia:0, lightHours:0, ventilation:'good' }
  showEnvModal.value = false
}
</script>

<style scoped>
.min-w-0 { min-width:0; }
.flex-shrink-0 { flex-shrink:0; }

/* Banner */
.batch-banner { border-radius: 20px; overflow: hidden; border: 1px solid var(--border2); position: relative; }
.banner-egg { background: linear-gradient(145deg, #0E1C10 0%, #12220E 60%, #0A1808 100%); border-color: rgba(234,179,8,0.15); }
.banner-meat { background: linear-gradient(145deg, #1C0E0E 0%, #220E0E 60%, #180808 100%); border-color: rgba(229,57,53,0.15); }
.banner-glow { position:absolute;top:-30px;right:-30px;width:140px;height:140px;border-radius:50%;pointer-events:none; }
.glow-egg { background: radial-gradient(circle, rgba(234,179,8,0.2) 0%, transparent 70%); }
.glow-meat { background: radial-gradient(circle, rgba(229,57,53,0.2) 0%, transparent 70%); }
.banner-body { display:flex;align-items:flex-start;gap:12px;padding:16px 16px 12px; }
.banner-icon { font-size:34px;line-height:1;flex-shrink:0; }
.banner-name { font-size:18px;font-weight:900;letter-spacing:-0.4px; }
.banner-breed { font-size:12px;color:var(--text3);margin-top:2px; }
.banner-badges { display:flex;align-items:center;gap:6px;margin-top:7px; }
.banner-pnl { font-size:20px;font-weight:900;letter-spacing:-0.5px;flex-shrink:0; }
.banner-kpis { display:flex;align-items:center;padding:10px 16px;border-top:1px solid rgba(255,255,255,0.05);background:rgba(0,0,0,0.2); }
.bkpi { flex:1;text-align:center; }
.bkpi-val { font-size:15px;font-weight:800;letter-spacing:-0.3px; }
.bkpi-lbl { font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:3px; }
.bkpi-div { width:1px;height:28px;background:rgba(255,255,255,0.07); }

/* Feed tab */
.feed-summary { border-radius:16px;padding:0;overflow:hidden;border:1px solid var(--border2); }
.fsc-ok { border-color:rgba(0,200,150,.25);background:rgba(0,200,150,.06); }
.fsc-under { border-color:rgba(255,64,96,.25);background:rgba(255,64,96,.06); }
.fsc-over { border-color:rgba(255,165,0,.25);background:rgba(255,165,0,.06); }
.fsc-row { display:flex;align-items:center;padding:14px 16px; }
.fsc-item { flex:1;text-align:center; }
.fsc-val { font-size:20px;font-weight:900;letter-spacing:-.5px; }
.fsc-lbl { font-size:10px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-top:2px; }
.fsc-div { width:1px;height:32px;background:var(--border); }
.fsc-status { font-size:12px;font-weight:700;padding:8px 16px;border-top:1px solid var(--border);color:var(--text2); }
.feed-rate-badge { font-size:10px;font-weight:800;padding:2px 8px;border-radius:6px; }
.rate-ok { background:rgba(0,200,150,.15);color:var(--green2); }
.rate-under { background:rgba(255,64,96,.15);color:var(--red2); }
.rate-over { background:rgba(255,165,0,.15);color:#ff9800; }

/* Detail tabs */
.detail-tab {
  padding:8px 14px; border-radius:10px; font-size:12px; font-weight:700;
  color:var(--text3); cursor:pointer; border:none; background:transparent;
  white-space:nowrap; transition:all .18s; flex-shrink:0;
}
.detail-tab.tab-active { background:var(--card2); color:var(--text); box-shadow:0 2px 8px rgba(0,0,0,.3); }

/* Quick actions */
.qa-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
.qa-btn {
  display:flex;flex-direction:column;align-items:center;gap:7px;
  padding:14px 6px; border-radius:16px; cursor:pointer;
  background:rgba(255,255,255,0.03); border:1.5px solid var(--border2);
  transition:all .18s; -webkit-tap-highlight-color:transparent;
}
.qa-btn:active { transform:scale(0.94); border-color:var(--qa-color); background:color-mix(in srgb, var(--qa-color) 10%, transparent); }
.qa-ico { font-size:22px; }
.qa-lbl { font-size:10px;font-weight:700;color:var(--text2);text-align:center;line-height:1.2; }

/* Tab action row */
.tab-action-row { display:flex;align-items:center;justify-content:space-between; }

/* Financials */
.fin-row { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
.fin-card { background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:14px; }
.fin-rev { border-color:rgba(0,200,150,.15); }
.fin-exp { border-color:rgba(255,64,96,.15); }
.fin-label { font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px; }
.fin-amount { font-size:18px;font-weight:900;letter-spacing:-.5px; }
.fin-sub { font-size:11px;color:var(--text3);margin-top:3px; }

/* Cost breakdown */
.cat-row { display:flex;align-items:center;gap:11px;padding:10px 0;border-bottom:1px solid var(--border); }
.cat-row:last-child { border-bottom:none; }
.cat-icon { width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0; }

/* Insight card */
.insight-card { background:var(--card);border:1px solid var(--border2);border-radius:16px;padding:14px; }
.insight-row { display:grid;grid-template-columns:repeat(4,1fr);gap:0; }
.insight-item { text-align:center;padding:4px; }
.ins-val { font-size:15px;font-weight:800;letter-spacing:-.3px; }
.ins-lbl { font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:3px; }

/* Delete button */
.del-btn { background:none;border:none;cursor:pointer;color:var(--text3);font-size:12px;padding:4px;border-radius:6px;display:block;margin-top:2px;transition:color .15s; }
.del-btn:hover { color:var(--red2); }

/* Egg grades */
.egg-grade { padding:2px 7px;border-radius:5px;font-size:11px;font-weight:700; }
.grade-a { background:rgba(0,200,150,.12);color:var(--green2); }
.grade-b { background:rgba(234,179,8,.12);color:var(--egg2); }
.grade-broken { background:rgba(255,64,96,.12);color:var(--red2); }

/* Mortality bar */
.mortality-bar { background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:14px; }
.mort-header { display:flex;justify-content:space-between; }

/* Env cards */
.env-cards { display:grid;grid-template-columns:repeat(4,1fr);gap:8px; }
.env-card { background:var(--card);border:1px solid var(--border2);border-radius:12px;padding:10px 6px;text-align:center; }
.env-ico { font-size:18px;margin-bottom:4px; }
.env-val { font-size:14px;font-weight:800;letter-spacing:-.3px; }
.env-lbl { font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-top:3px; }

/* Prod rate chip */
.prod-rate-chip { background:var(--amber-dim);border:1px solid var(--amber-glow);border-radius:12px;padding:10px 14px;font-size:13px;color:var(--amber2);margin-top:10px; }
.chip-danger { background:var(--red-dim);border-color:rgba(255,64,96,.2);color:var(--red2); }
.chip-ok { background:var(--green-dim);border-color:rgba(0,200,150,.2);color:var(--green2); }

.text-blue { color:#7AB3FF; }
</style>
