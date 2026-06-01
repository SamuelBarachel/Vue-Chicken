<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Quick Log</div>
      <div class="page-subtitle">Fast entry — select batch &amp; log type</div>
    </div>

    <div class="section">
      <!-- Batch selector -->
      <div class="batch-selector mb-4">
        <div v-if="!activeBatches.length" class="empty-state" style="padding:24px">
          <div class="empty-icon" style="font-size:36px">🐣</div>
          <div class="empty-desc">No active batches — create one first</div>
          <button class="btn btn-primary mt-3" style="margin:12px auto 0" @click="$router.push('/batches/new')">+ New Batch</button>
        </div>
        <template v-else>
          <div class="bs-label form-label">Select Batch</div>
          <div class="bs-list">
            <button
              v-for="b in activeBatches"
              :key="b.id"
              class="bs-item"
              :class="{ 'bs-egg': selectedBatchId === b.id && b.mode === 'egg', 'bs-meat': selectedBatchId === b.id && b.mode === 'meat', 'bs-selected': selectedBatchId === b.id }"
              @click="selectedBatchId = b.id"
            >
              <span class="bs-icon">{{ b.mode === 'egg' ? '🥚' : '🍗' }}</span>
              <div class="bs-info">
                <div class="bs-name">{{ b.name }}</div>
                <div class="bs-meta">{{ b.currentCount }} birds · Wk {{ weeksOld(b.startDate) }}</div>
              </div>
              <div v-if="selectedBatchId === b.id" class="bs-check">✓</div>
            </button>
          </div>
        </template>
      </div>

      <!-- Log type selector -->
      <template v-if="selectedBatch">
        <div class="log-types mb-4">
          <button
            v-for="t in logTypes"
            :key="t.id"
            class="lt-btn"
            :class="{ 'lt-active': logType === t.id }"
            @click="logType = t.id"
          >
            <span class="lt-icon">{{ t.icon }}</span>
            <span class="lt-label">{{ t.label }}</span>
          </button>
        </div>

        <!-- EXPENSE -->
        <div v-if="logType === 'expense'" class="log-form card">
          <div class="form-group"><label class="form-label">Category</label>
            <select v-model="expForm.category" class="form-select">
              <option value="feed">🌾 Feed</option><option value="medicine">💊 Medicine</option>
              <option value="vaccine">💉 Vaccine</option><option value="labor">👷 Labor</option>
              <option value="utilities">⚡ Utilities</option><option value="equipment">🔧 Equipment</option>
              <option value="other">📦 Other</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Amount ({{ sym }})</label><input v-model.number="expForm.amount" type="number" class="form-input" placeholder="0.00" step="0.01" /></div>
            <div class="form-group"><label class="form-label">Date</label><input v-model="expForm.date" type="date" class="form-input" /></div>
          </div>
          <div class="form-group" style="margin-bottom:0"><label class="form-label">Description</label><input v-model="expForm.description" class="form-input" placeholder="e.g. 50kg layer mash" /></div>
          <button class="btn btn-primary btn-full mt-3" style="height:50px" @click="saveExpense" :disabled="!expForm.amount || !expForm.description">💰 Save Expense</button>
        </div>

        <!-- EGG COLLECTION -->
        <div v-if="logType === 'egg'" class="log-form card">
          <div class="form-group"><label class="form-label">Date</label><input v-model="eggForm.date" type="date" class="form-input" /></div>
          <div class="egg-total-display">
            <div class="etd-label">Total Eggs Collected</div>
            <div class="etd-num" :class="(eggForm.gradeA+eggForm.gradeB+eggForm.broken) > 0 ? 'text-egg' : 'text-dim'">
              {{ eggForm.gradeA + eggForm.gradeB + eggForm.broken }}
            </div>
            <div class="etd-rate" v-if="eggForm.gradeA + eggForm.gradeB + eggForm.broken > 0">
              📊 {{ ((eggForm.gradeA+eggForm.gradeB+eggForm.broken)/selectedBatch.currentCount*100).toFixed(1) }}% production rate
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Grade A 🥇</label>
              <div class="stepper"><button class="sp-btn" @click="eggForm.gradeA=Math.max(0,eggForm.gradeA-1)">−</button><input v-model.number="eggForm.gradeA" type="number" class="form-input sp-in" /><button class="sp-btn" @click="eggForm.gradeA++">+</button></div>
            </div>
            <div class="form-group">
              <label class="form-label">Grade B 🥈</label>
              <div class="stepper"><button class="sp-btn" @click="eggForm.gradeB=Math.max(0,eggForm.gradeB-1)">−</button><input v-model.number="eggForm.gradeB" type="number" class="form-input sp-in" /><button class="sp-btn" @click="eggForm.gradeB++">+</button></div>
            </div>
          </div>
          <div class="form-group"><label class="form-label">Broken ❌</label><input v-model.number="eggForm.broken" type="number" class="form-input" placeholder="0" /></div>
          <button class="btn btn-primary btn-full" style="height:50px" @click="saveEggs" :disabled="!eggForm.gradeA && !eggForm.gradeB">🥚 Save Collection</button>
        </div>

        <!-- WEIGHT -->
        <div v-if="logType === 'weight'" class="log-form card">
          <div class="form-group"><label class="form-label">Date</label><input v-model="wtForm.date" type="date" class="form-input" /></div>
          <div class="form-group">
            <label class="form-label">Average Weight ({{ settings.weightUnit }})</label>
            <input v-model.number="wtForm.averageWeight" type="number" class="form-input" style="font-size:22px;font-weight:800;text-align:center" placeholder="2.1" step="0.01" />
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Min</label><input v-model.number="wtForm.minWeight" type="number" class="form-input" placeholder="1.8" step="0.01" /></div>
            <div class="form-group"><label class="form-label">Max</label><input v-model.number="wtForm.maxWeight" type="number" class="form-input" placeholder="2.4" step="0.01" /></div>
          </div>
          <div class="form-group"><label class="form-label">Sample Size (birds weighed)</label><input v-model.number="wtForm.sampleSize" type="number" class="form-input" placeholder="20" /></div>
          <div v-if="selectedBatch.targetWeight && wtForm.averageWeight" class="progress-banner">
            🎯 {{ ((wtForm.averageWeight/selectedBatch.targetWeight)*100).toFixed(1) }}% of target weight
          </div>
          <button class="btn btn-primary btn-full mt-2" style="height:50px" @click="saveWeight" :disabled="!wtForm.averageWeight">⚖️ Save Weight</button>
        </div>

        <!-- REVENUE -->
        <div v-if="logType === 'revenue'" class="log-form card">
          <div class="form-group"><label class="form-label">Type</label>
            <select v-model="revForm.type" class="form-select">
              <option value="eggs">🥚 Eggs</option><option value="meat">🥩 Meat / Dressed</option>
              <option value="birds">🐔 Live Birds</option><option value="manure">♻️ Manure</option><option value="other">💵 Other</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Qty</label><input v-model.number="revForm.quantity" type="number" class="form-input" placeholder="0" /></div>
            <div class="form-group"><label class="form-label">Unit Price ({{ sym }})</label><input v-model.number="revForm.unitPrice" type="number" class="form-input" placeholder="0.00" step="0.01" /></div>
          </div>
          <div class="revenue-total" v-if="revForm.quantity && revForm.unitPrice">
            <span class="text-xs text-muted">Total</span>
            <span class="text-green font-heavy" style="font-size:24px;letter-spacing:-1px">{{ formatCurrency(revForm.quantity * revForm.unitPrice, sym) }}</span>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Date</label><input v-model="revForm.date" type="date" class="form-input" /></div>
            <div class="form-group"><label class="form-label">Notes</label><input v-model="revForm.notes" class="form-input" placeholder="Buyer…" /></div>
          </div>
          <button class="btn btn-success btn-full" style="height:50px" @click="saveRevenue" :disabled="!revForm.quantity || !revForm.unitPrice">💵 Record Sale</button>
        </div>

        <!-- MORTALITY -->
        <div v-if="logType === 'mortality'" class="log-form card">
          <div class="alert alert-danger mb-3"><span>⚠️</span> Record all losses promptly for accurate data.</div>
          <div class="form-group">
            <label class="form-label">Birds Lost</label>
            <div class="stepper"><button class="sp-btn" @click="mortForm.count=Math.max(1,mortForm.count-1)">−</button><input v-model.number="mortForm.count" type="number" class="form-input sp-in" style="color:var(--red2);font-size:22px;font-weight:800" /><button class="sp-btn" @click="mortForm.count++">+</button></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Date</label><input v-model="mortForm.date" type="date" class="form-input" /></div>
            <div class="form-group"><label class="form-label">Cause</label>
              <select v-model="mortForm.cause" class="form-select">
                <option value="disease">🦠 Disease</option><option value="predator">🦊 Predator</option>
                <option value="heat">🌡️ Heat</option><option value="cold">🥶 Cold</option>
                <option value="stress">😰 Stress</option><option value="injury">🩸 Injury</option>
                <option value="unknown">❓ Unknown</option>
              </select>
            </div>
          </div>
          <div class="form-group"><label class="form-label">Notes / Symptoms</label><textarea v-model="mortForm.notes" class="form-textarea" placeholder="Describe what you observed…"></textarea></div>
          <button class="btn btn-danger btn-full" style="height:50px" @click="saveMortality" :disabled="!mortForm.count">💀 Record Loss</button>
        </div>

        <!-- FEED REPLENISHMENT -->
        <div v-if="logType === 'feed'" class="log-form card">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Date replenished</label>
              <input v-model="feedForm.date" type="date" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">Feed type (optional)</label>
              <input v-model="feedForm.feedType" class="form-input" placeholder="e.g. Layer mash" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Quantity (kg)</label>
              <input v-model.number="feedForm.quantityKg" type="number" class="form-input" style="font-size:22px;font-weight:800;text-align:center" placeholder="50" step="0.5" />
            </div>
            <div class="form-group">
              <label class="form-label">Should last (days)</label>
              <input v-model.number="feedForm.durationDays" type="number" class="form-input" style="font-size:22px;font-weight:800;text-align:center" placeholder="7" min="1" />
            </div>
          </div>
          <div v-if="feedRateInfo" class="feed-rate-banner"
            :class="feedRateInfo.ratio < 0.80 ? 'banner-danger' : feedRateInfo.ratio > 1.25 ? 'banner-warn' : 'banner-ok'">
            <div class="frb-row">
              <span>{{ feedRateInfo.ratio < 0.80 ? '⬇️ Underfeeding' : feedRateInfo.ratio > 1.25 ? '⬆️ Overfeeding' : '✅ Feed rate looks good' }}</span>
              <span class="frb-val">{{ feedRateInfo.actualG }}g/bird/day</span>
            </div>
            <div class="frb-sub">Recommended for {{ selectedBatch?.mode === 'egg' ? 'layers' : 'broilers' }}: ~{{ feedRateInfo.recommended }}g/bird/day</div>
          </div>
          <button class="btn btn-primary btn-full mt-3" style="height:50px" @click="saveFeed" :disabled="!feedForm.quantityKg || !feedForm.durationDays">🌾 Log Feed Stock</button>
        </div>

        <!-- ENVIRONMENT -->
        <div v-if="logType === 'env'" class="log-form card">
          <div class="form-row">
            <div class="form-group"><label class="form-label">Temp (°{{ settings.temperatureUnit }})</label><input v-model.number="envForm.temperature" type="number" class="form-input" style="font-size:20px;font-weight:800;text-align:center" placeholder="28" step="0.1" /></div>
            <div class="form-group"><label class="form-label">Humidity (%)</label><input v-model.number="envForm.humidity" type="number" class="form-input" placeholder="60" /></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Ammonia (ppm)</label><input v-model.number="envForm.ammonia" type="number" class="form-input" placeholder="0" step="0.5" /></div>
            <div class="form-group"><label class="form-label">Light Hours</label><input v-model.number="envForm.lightHours" type="number" class="form-input" placeholder="16" /></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Date</label><input v-model="envForm.date" type="date" class="form-input" /></div>
            <div class="form-group"><label class="form-label">Time</label><input v-model="envForm.time" type="time" class="form-input" /></div>
          </div>
          <div class="form-group"><label class="form-label">Ventilation</label>
            <select v-model="envForm.ventilation" class="form-select">
              <option value="good">✅ Good</option><option value="fair">⚠️ Fair</option><option value="poor">❌ Poor</option>
            </select>
          </div>
          <div v-if="envForm.temperature" class="progress-banner" :class="envForm.temperature>35||envForm.temperature<18 ? 'banner-danger' : 'banner-ok'">
            {{ envForm.temperature > 35 ? '🔥 Too hot — heat stress risk!' : envForm.temperature < 18 ? '🥶 Too cold!' : '✅ Temperature in optimal range' }}
          </div>
          <button class="btn btn-primary btn-full mt-3" style="height:50px" @click="saveEnv" :disabled="!envForm.temperature">🌡️ Save Reading</button>
        </div>

        <!-- Success toast -->
        <Transition name="toast">
          <div v-if="showSuccess" class="success-toast">✅ Saved successfully!</div>
        </Transition>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
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
import { formatCurrency, today, nowTime, weeksOld } from '@/utils/formatters'

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

const activeBatches = computed(() => batchStore.active)
const selectedBatchId = ref('')
const selectedBatch = computed(() => batchStore.getById(selectedBatchId.value))

const logType = ref('expense')
const logTypes = computed(() => {
  const base = [
    { id:'expense', icon:'💰', label:'Cost' },
    { id:'revenue', icon:'💵', label:'Sale' },
    { id:'feed', icon:'🌾', label:'Feed' },
    { id:'mortality', icon:'💀', label:'Loss' },
    { id:'env', icon:'🌡️', label:'Temp' },
  ]
  if (selectedBatch.value?.mode === 'egg') base.splice(1,0,{ id:'egg', icon:'🥚', label:'Eggs' })
  else base.splice(1,0,{ id:'weight', icon:'⚖️', label:'Weight' })
  return base
})

watch(selectedBatch, b => {
  if (b?.mode === 'egg' && logType.value === 'weight') logType.value = 'egg'
  if (b?.mode === 'meat' && logType.value === 'egg') logType.value = 'weight'
})

const showSuccess = ref(false)
function flash() { showSuccess.value = true; setTimeout(() => showSuccess.value = false, 2200) }

const expForm = ref({ category:'feed' as any, amount:0, date:today(), description:'' })
const eggForm = ref({ date:today(), gradeA:0, gradeB:0, broken:0 })
const feedForm = ref({ date:today(), quantityKg:0, durationDays:7, feedType:'' })
const wtForm = ref({ date:today(), sampleSize:20, averageWeight:0, minWeight:0, maxWeight:0 })
const mortForm = ref({ count:1, date:today(), cause:'unknown' as any, notes:'' })
const envForm = ref({ date:today(), time:nowTime(), temperature:0, humidity:0, ammonia:0, lightHours:0, ventilation:'good' as any })
const revForm = ref({ type:'eggs' as any, quantity:0, unitPrice:0, date:today(), notes:'' })

function logActivity(category: Parameters<typeof activityLogStore.log>[0], description: string) {
  const u = authStore.user
  if (!u) return
  activityLogStore.log(category, description, { uid: u.id, displayName: u.username, email: u.email || null, photoURL: u.profileImage || null }, { batchId: selectedBatchId.value, batchName: selectedBatch.value?.name })
}

function saveExpense() {
  if (!expForm.value.amount || !expForm.value.description) return
  expenseStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...expForm.value })
  logActivity('expense', `💸 ${expForm.value.description} — ${formatCurrency(expForm.value.amount, sym.value)} [${expForm.value.category}]`)
  expForm.value = { category:'feed', amount:0, date:today(), description:'' }; flash()
}
function saveEggs() {
  const total = eggForm.value.gradeA+eggForm.value.gradeB+eggForm.value.broken
  if (!total) return
  eggStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...eggForm.value, totalEggs:total, notes:'' })
  logActivity('eggs', `🥚 Collected ${total} eggs (A:${eggForm.value.gradeA} B:${eggForm.value.gradeB} ✕:${eggForm.value.broken})`)
  eggForm.value = { date:today(), gradeA:0, gradeB:0, broken:0 }; flash()
}
function saveWeight() {
  if (!wtForm.value.averageWeight) return
  weightStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...wtForm.value, notes:'' })
  logActivity('weight', `⚖️ Weight sample: ${wtForm.value.averageWeight}${settings.weightUnit} avg (n=${wtForm.value.sampleSize})`)
  wtForm.value = { date:today(), sampleSize:20, averageWeight:0, minWeight:0, maxWeight:0 }; flash()
}
function saveMortality() {
  if (!mortForm.value.count) return
  mortalityStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...mortForm.value })
  const b = selectedBatch.value
  if (b) batchStore.update(selectedBatchId.value, { currentCount:Math.max(0,b.currentCount-mortForm.value.count) })
  logActivity('mortality', `💀 ${mortForm.value.count} bird${mortForm.value.count > 1 ? 's' : ''} lost — cause: ${mortForm.value.cause}`)
  mortForm.value = { count:1, date:today(), cause:'unknown', notes:'' }; flash()
}
function saveEnv() {
  if (!envForm.value.temperature) return
  environmentStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...envForm.value, notes:'' })
  logActivity('env', `🌡️ Temp ${envForm.value.temperature}°${settings.temperatureUnit}, humidity ${envForm.value.humidity}%, ventilation: ${envForm.value.ventilation}`)
  envForm.value = { date:today(), time:nowTime(), temperature:0, humidity:0, ammonia:0, lightHours:0, ventilation:'good' }; flash()
}
function saveRevenue() {
  if (!revForm.value.quantity || !revForm.value.unitPrice) return
  revenueStore.add({ userId:authStore.uid!, batchId:selectedBatchId.value, ...revForm.value, amount:revForm.value.quantity*revForm.value.unitPrice })
  logActivity('revenue', `💵 Sale: ${revForm.value.quantity} × ${formatCurrency(revForm.value.unitPrice, sym.value)} = ${formatCurrency(revForm.value.quantity * revForm.value.unitPrice, sym.value)} [${revForm.value.type}]`)
  revForm.value = { type:'eggs', quantity:0, unitPrice:0, date:today(), notes:'' }; flash()
}

const RECOMMENDED_G: Record<string, number> = { egg: 120, meat: 100 }
const feedRateInfo = computed(() => {
  const b = selectedBatch.value
  if (!b || !feedForm.value.quantityKg || !feedForm.value.durationDays || !b.currentCount) return null
  const actualG = (feedForm.value.quantityKg * 1000) / feedForm.value.durationDays / b.currentCount
  const recommended = RECOMMENDED_G[b.mode] ?? 110
  const ratio = actualG / recommended
  return { actualG: Math.round(actualG), recommended, ratio }
})

function saveFeed() {
  const f = feedForm.value
  if (!f.quantityKg || !f.durationDays) return
  feedStockStore.add({
    userId: authStore.uid!,
    batchId: selectedBatchId.value,
    date: f.date,
    quantityKg: f.quantityKg,
    durationDays: f.durationDays,
    feedType: f.feedType || undefined,
  })
  const rateStr = feedRateInfo.value ? ` @ ${feedRateInfo.value.actualG}g/bird/day` : ''
  logActivity('feed', `🌾 ${f.quantityKg}kg feed stocked${f.feedType ? ` (${f.feedType})` : ''}, lasts ${f.durationDays} days${rateStr}`)
  feedForm.value = { date: today(), quantityKg: 0, durationDays: 7, feedType: '' }
  flash()
}
</script>

<style scoped>
/* Batch selector */
.bs-label { margin-bottom:8px; }
.bs-list { display:flex;flex-direction:column;gap:8px; }
.bs-item {
  display:flex;align-items:center;gap:11px;
  background:var(--card);border:1.5px solid var(--border2);border-radius:14px;padding:12px 14px;
  cursor:pointer;-webkit-tap-highlight-color:transparent;transition:all .18s;text-align:left;width:100%;
}
.bs-item:active { transform:scale(.97); }
.bs-egg  { border-color:var(--egg)!important;   background:linear-gradient(135deg,var(--card) 60%,rgba(212,164,39,.08) 100%)!important; }
.bs-meat { border-color:var(--amber)!important; background:linear-gradient(135deg,var(--card) 60%,rgba(196,98,45,.08) 100%)!important; }
.bs-icon { font-size:24px;flex-shrink:0; }
.bs-info { flex:1; }
.bs-name { font-size:14px;font-weight:800; }
.bs-meta { font-size:11px;color:var(--text3);margin-top:2px; }
.bs-check { width:24px;height:24px;background:var(--amber);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0; }

/* Log types */
.log-types { display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none; }
.log-types::-webkit-scrollbar { display:none; }
.lt-btn {
  display:flex;flex-direction:column;align-items:center;gap:5px;
  padding:11px 14px;border-radius:14px;border:1.5px solid var(--border2);
  background:var(--card);cursor:pointer;transition:all .18s;flex-shrink:0;
  -webkit-tap-highlight-color:transparent;
}
.lt-active { border-color:var(--amber);background:var(--amber-dim); }
.lt-icon { font-size:20px; }
.lt-label { font-size:11px;font-weight:700;color:var(--text2); }
.lt-active .lt-label { color:var(--amber2); }
.lt-btn:active { transform:scale(.94); }

/* Forms */
.log-form {}

/* Stepper */
.stepper { display:flex;align-items:center;gap:8px; }
.sp-btn { width:44px;height:44px;background:var(--card2);border:1px solid var(--border2);border-radius:11px;font-size:20px;font-weight:600;color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s;-webkit-tap-highlight-color:transparent; }
.sp-btn:active { transform:scale(.9); }
.sp-in { text-align:center;font-size:20px!important;font-weight:800!important; }

/* Egg total display */
.egg-total-display { text-align:center;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:16px;margin-bottom:14px; }
.etd-label { font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.7px;margin-bottom:4px; }
.etd-num { font-size:48px;font-weight:900;letter-spacing:-2px;line-height:1; }
.etd-rate { font-size:12px;color:var(--text2);margin-top:6px;font-weight:600; }

/* Revenue total */
.revenue-total { text-align:center;padding:14px;background:var(--green-dim);border:1px solid rgba(0,200,150,.2);border-radius:13px;margin:12px 0;display:flex;flex-direction:column;align-items:center;gap:4px; }

/* Progress banner */
.progress-banner { background:var(--amber-dim);border:1px solid var(--amber-glow);border-radius:12px;padding:10px 14px;font-size:13px;font-weight:600;color:var(--amber2);margin-top:10px; }
.banner-danger { background:var(--red-dim);border-color:rgba(255,64,96,.2);color:var(--red2); }
.banner-ok { background:var(--green-dim);border-color:rgba(0,200,150,.2);color:var(--green2); }

/* Feed rate banner */
.feed-rate-banner { border-radius:12px;padding:11px 14px;margin-top:10px; }
.frb-row { display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700; }
.frb-val { font-size:15px;font-weight:900;letter-spacing:-.5px; }
.frb-sub { font-size:11px;margin-top:4px;opacity:.75; }
.banner-warn { background:rgba(255,120,0,.10);border:1px solid rgba(255,120,0,.25);color:#ff9800; }

/* Toast */
.success-toast {
  position:fixed;bottom:calc(var(--nav-h)+24px);left:50%;transform:translateX(-50%);
  background:var(--brand2);color:#fff;padding:11px 28px;border-radius:100px;
  font-weight:700;font-size:14px;z-index:200;box-shadow:0 4px 24px var(--green-glow);
  white-space:nowrap;
}
.toast-enter-active { transition:all .3s cubic-bezier(.34,1.4,.64,1); }
.toast-leave-active { transition:all .2s ease-in; }
.toast-enter-from { opacity:0;transform:translateX(-50%) translateY(20px); }
.toast-leave-to { opacity:0;transform:translateX(-50%) translateY(20px); }
</style>
