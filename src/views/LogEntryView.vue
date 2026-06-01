<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Quick Log</div>
      <div class="page-subtitle">Fast data entry for your flocks</div>
    </div>

    <!-- Batch selector -->
    <div class="section">
      <div class="form-group">
        <label class="form-label">Select Batch</label>
        <select v-model="selectedBatchId" class="form-select">
          <option value="">— Choose a batch —</option>
          <option v-for="b in activeBatches" :key="b.id" :value="b.id">{{ b.name }} ({{ b.mode }})</option>
        </select>
      </div>

      <div v-if="!selectedBatchId" class="card" style="text-align:center;padding:32px 20px">
        <div style="font-size:40px;margin-bottom:12px">📋</div>
        <div class="font-bold mb-2">Select a batch to log data</div>
        <div class="text-sm text-muted">All your active batches will appear above</div>
      </div>

      <template v-if="selectedBatchId && selectedBatch">
        <!-- Log type tabs -->
        <div class="tabs mb-4">
          <button v-for="t in logTypes" :key="t.id" class="tab" :class="{ active: logType === t.id }" @click="logType = t.id">
            {{ t.icon }} {{ t.label }}
          </button>
        </div>

        <!-- Expense Log -->
        <div v-if="logType === 'expense'" class="card">
          <div class="form-group">
            <label class="form-label">Category</label>
            <select v-model="expForm.category" class="form-select">
              <option value="feed">🌾 Feed</option>
              <option value="medicine">💊 Medicine</option>
              <option value="vaccine">💉 Vaccine</option>
              <option value="labor">👷 Labor</option>
              <option value="utilities">⚡ Utilities</option>
              <option value="equipment">🔧 Equipment</option>
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
          <button class="btn btn-primary btn-full" @click="saveExpense" :disabled="!expForm.amount || !expForm.description">
            💰 Save Expense
          </button>
        </div>

        <!-- Egg Log -->
        <div v-if="logType === 'egg' && selectedBatch.mode === 'egg'" class="card">
          <div class="form-group">
            <label class="form-label">Date</label>
            <input v-model="eggForm.date" type="date" class="form-input" />
          </div>
          <div class="big-egg-input mb-3">
            <div class="form-label text-center" style="margin-bottom:12px">Grade A Eggs 🥇</div>
            <div class="stepper">
              <button class="step-btn" @click="eggForm.gradeA = Math.max(0, eggForm.gradeA - 1)">−</button>
              <input v-model.number="eggForm.gradeA" type="number" class="form-input step-input" />
              <button class="step-btn" @click="eggForm.gradeA++">+</button>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Grade B 🥈</label>
              <input v-model.number="eggForm.gradeB" type="number" class="form-input" placeholder="0" />
            </div>
            <div class="form-group">
              <label class="form-label">Broken ❌</label>
              <input v-model.number="eggForm.broken" type="number" class="form-input" placeholder="0" />
            </div>
          </div>
          <div class="total-display mb-3">
            <div class="text-xs text-muted">Total Collection</div>
            <div class="big-num text-amber">{{ eggForm.gradeA + eggForm.gradeB + eggForm.broken }}</div>
            <div class="text-xs text-muted">Production rate: {{ prodRate }}%</div>
          </div>
          <button class="btn btn-primary btn-full" @click="saveEggs" :disabled="!eggForm.gradeA && !eggForm.gradeB">
            🥚 Save Collection
          </button>
        </div>

        <!-- Egg mode — show weight not available -->
        <div v-if="logType === 'egg' && selectedBatch.mode === 'meat'" class="card">
          <div class="empty-state"><div class="empty-emoji">🍗</div><div class="empty-title">Meat Mode</div><div class="empty-desc">This batch is in meat mode. Use "Weight" tab instead.</div></div>
        </div>

        <!-- Weight Log (meat mode) -->
        <div v-if="logType === 'weight'" class="card">
          <div v-if="selectedBatch.mode !== 'meat'" class="empty-state"><div class="empty-emoji">🥚</div><div class="empty-title">Egg Mode</div><div class="empty-desc">Weight tracking is for meat batches only.</div></div>
          <template v-else>
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
                <input v-model.number="wtForm.sampleSize" type="number" class="form-input" placeholder="20" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Min</label>
                <input v-model.number="wtForm.minWeight" type="number" class="form-input" placeholder="1.8" step="0.01" />
              </div>
              <div class="form-group">
                <label class="form-label">Max</label>
                <input v-model.number="wtForm.maxWeight" type="number" class="form-input" placeholder="2.4" step="0.01" />
              </div>
            </div>
            <button class="btn btn-primary btn-full" @click="saveWeight" :disabled="!wtForm.averageWeight">⚖️ Save Weight</button>
          </template>
        </div>

        <!-- Mortality Log -->
        <div v-if="logType === 'mortality'" class="card">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Birds Lost</label>
              <div class="stepper">
                <button class="step-btn" @click="mortForm.count = Math.max(1, mortForm.count - 1)">−</button>
                <input v-model.number="mortForm.count" type="number" class="form-input step-input" />
                <button class="step-btn" @click="mortForm.count++">+</button>
              </div>
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
            <label class="form-label">Notes / Symptoms</label>
            <textarea v-model="mortForm.notes" class="form-textarea" placeholder="Describe what you observed…"></textarea>
          </div>
          <button class="btn btn-danger btn-full" @click="saveMortality" :disabled="!mortForm.count">💀 Record Loss</button>
        </div>

        <!-- Environment Log -->
        <div v-if="logType === 'environment'" class="card">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Temperature (°{{ settings.temperatureUnit }})</label>
              <input v-model.number="envForm.temperature" type="number" class="form-input" placeholder="28" step="0.1" />
            </div>
            <div class="form-group">
              <label class="form-label">Humidity (%)</label>
              <input v-model.number="envForm.humidity" type="number" class="form-input" placeholder="60" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Ammonia (ppm)</label>
              <input v-model.number="envForm.ammonia" type="number" class="form-input" placeholder="0" step="0.1" />
            </div>
            <div class="form-group">
              <label class="form-label">Light Hours</label>
              <input v-model.number="envForm.lightHours" type="number" class="form-input" placeholder="16" />
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
            <label class="form-label">Ventilation</label>
            <select v-model="envForm.ventilation" class="form-select">
              <option value="good">✅ Good</option>
              <option value="fair">⚠️ Fair</option>
              <option value="poor">❌ Poor</option>
            </select>
          </div>
          <div v-if="envForm.temperature" class="alert mt-2" :class="envForm.temperature > 35 || envForm.temperature < 18 ? 'alert-danger' : 'alert-success'">
            {{ envForm.temperature > 35 ? '🔥 Too hot!' : envForm.temperature < 18 ? '🥶 Too cold!' : '✅ Temperature OK' }}
          </div>
          <button class="btn btn-primary btn-full mt-3" @click="saveEnv" :disabled="!envForm.temperature">🌡️ Save Reading</button>
        </div>

        <!-- Revenue Log -->
        <div v-if="logType === 'revenue'" class="card">
          <div class="form-group">
            <label class="form-label">Sale Type</label>
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
              <label class="form-label">Total ({{ sym }})</label>
              <input :value="(revForm.quantity * revForm.unitPrice).toFixed(2)" readonly class="form-input" style="background:var(--card2);color:var(--green2);font-weight:700" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <input v-model="revForm.notes" class="form-input" placeholder="Customer / notes" />
          </div>
          <button class="btn btn-primary btn-full" @click="saveRevenue" :disabled="!revForm.quantity || !revForm.unitPrice">💵 Save Sale</button>
        </div>

        <!-- Success toast -->
        <Transition name="fade">
          <div v-if="showSuccess" class="success-toast">✅ Saved!</div>
        </Transition>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useRevenueStore } from '@/stores/revenue'
import { useMortalityStore } from '@/stores/mortality'
import { useEggStore } from '@/stores/eggs'
import { useWeightStore } from '@/stores/weights'
import { useEnvironmentStore } from '@/stores/environment'
import { useSettingsStore } from '@/stores/settings'
import { today, nowTime } from '@/utils/formatters'

const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const eggStore = useEggStore()
const weightStore = useWeightStore()
const environmentStore = useEnvironmentStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const selectedBatchId = ref('')
const selectedBatch = computed(() => batchStore.getById(selectedBatchId.value))
const activeBatches = computed(() => batchStore.active)

const logType = ref('expense')
const logTypes = computed(() => [
  { id: 'expense', icon: '💰', label: 'Cost' },
  ...(selectedBatch.value?.mode === 'egg' ? [{ id: 'egg', icon: '🥚', label: 'Eggs' }] : [{ id: 'weight', icon: '⚖️', label: 'Weight' }]),
  { id: 'revenue', icon: '💵', label: 'Sale' },
  { id: 'mortality', icon: '💀', label: 'Loss' },
  { id: 'environment', icon: '🌡️', label: 'Env' },
])

watch(selectedBatch, (b) => {
  if (b?.mode === 'egg' && logType.value === 'weight') logType.value = 'egg'
  if (b?.mode === 'meat' && logType.value === 'egg') logType.value = 'weight'
})

const showSuccess = ref(false)
function flash() {
  showSuccess.value = true
  setTimeout(() => showSuccess.value = false, 2000)
}

const expForm = ref({ category: 'feed' as any, amount: 0, date: today(), description: '' })
const eggForm = ref({ date: today(), gradeA: 0, gradeB: 0, broken: 0, notes: '' })
const wtForm = ref({ date: today(), sampleSize: 20, averageWeight: 0, minWeight: 0, maxWeight: 0, notes: '' })
const mortForm = ref({ count: 1, date: today(), cause: 'unknown' as any, notes: '' })
const envForm = ref({ date: today(), time: nowTime(), temperature: 0, humidity: 0, ammonia: 0, lightHours: 0, ventilation: 'good' as any })
const revForm = ref({ type: 'eggs' as any, quantity: 0, unitPrice: 0, date: today(), notes: '' })

const prodRate = computed(() => {
  const total = eggForm.value.gradeA + eggForm.value.gradeB + eggForm.value.broken
  const birds = selectedBatch.value?.currentCount || 1
  return ((total / birds) * 100).toFixed(1)
})

function saveExpense() {
  if (!expForm.value.amount || !expForm.value.description) return
  expenseStore.add({ batchId: selectedBatchId.value, ...expForm.value })
  expForm.value = { category: 'feed', amount: 0, date: today(), description: '' }
  flash()
}

function saveEggs() {
  const total = eggForm.value.gradeA + eggForm.value.gradeB + eggForm.value.broken
  if (!total) return
  eggStore.add({ batchId: selectedBatchId.value, ...eggForm.value, totalEggs: total })
  eggForm.value = { date: today(), gradeA: 0, gradeB: 0, broken: 0, notes: '' }
  flash()
}

function saveWeight() {
  if (!wtForm.value.averageWeight) return
  weightStore.add({ batchId: selectedBatchId.value, ...wtForm.value })
  wtForm.value = { date: today(), sampleSize: 20, averageWeight: 0, minWeight: 0, maxWeight: 0, notes: '' }
  flash()
}

function saveMortality() {
  if (!mortForm.value.count) return
  mortalityStore.add({ batchId: selectedBatchId.value, ...mortForm.value })
  const b = selectedBatch.value
  if (b) batchStore.update(selectedBatchId.value, { currentCount: Math.max(0, b.currentCount - mortForm.value.count) })
  mortForm.value = { count: 1, date: today(), cause: 'unknown', notes: '' }
  flash()
}

function saveEnv() {
  if (!envForm.value.temperature) return
  environmentStore.add({ batchId: selectedBatchId.value, ...envForm.value, notes: '' })
  envForm.value = { date: today(), time: nowTime(), temperature: 0, humidity: 0, ammonia: 0, lightHours: 0, ventilation: 'good' }
  flash()
}

function saveRevenue() {
  if (!revForm.value.quantity || !revForm.value.unitPrice) return
  revenueStore.add({ batchId: selectedBatchId.value, ...revForm.value, amount: revForm.value.quantity * revForm.value.unitPrice })
  revForm.value = { type: 'eggs', quantity: 0, unitPrice: 0, date: today(), notes: '' }
  flash()
}
</script>

<style scoped>
.stepper { display: flex; align-items: center; gap: 8px; }
.step-btn {
  width: 44px; height: 44px; background: var(--card2); border: 1px solid var(--border2);
  border-radius: 10px; font-size: 20px; font-weight: 600; color: var(--text); cursor: pointer;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.step-input { text-align: center; font-size: 20px; font-weight: 700; }
.total-display { text-align: center; padding: 16px; background: var(--card2); border-radius: 12px; }
.success-toast {
  position: fixed; bottom: calc(var(--nav-h) + 24px); left: 50%; transform: translateX(-50%);
  background: var(--green); color: #fff; padding: 10px 24px; border-radius: 24px;
  font-weight: 700; font-size: 14px; z-index: 200; box-shadow: 0 4px 20px rgba(16,185,129,0.4);
}
</style>
