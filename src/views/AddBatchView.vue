<template>
  <div class="page">
    <div class="page-header">
      <div class="flex-between">
        <button class="btn btn-ghost btn-icon" @click="$router.back()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div style="text-align:center">
          <div class="page-title" style="font-size:20px">{{ isEdit ? 'Edit Batch' : 'New Batch' }}</div>
        </div>
        <div style="width:44px"></div>
      </div>
    </div>

    <div class="section">
      <!-- Mode Selector -->
      <div class="mode-grid mb-4">
        <button class="mode-card" :class="{ 'mode-egg-active': form.mode === 'egg' }" @click="form.mode = 'egg'">
          <div class="mode-glow egg-glow" v-if="form.mode === 'egg'"></div>
          <div class="mode-check" v-if="form.mode === 'egg'">✓</div>
          <div class="mode-big-icon">🥚</div>
          <div class="mode-card-title">Egg Mode</div>
          <div class="mode-card-desc">Layer hens, daily egg production tracking</div>
        </button>
        <button class="mode-card" :class="{ 'mode-meat-active': form.mode === 'meat' }" @click="form.mode = 'meat'">
          <div class="mode-glow meat-glow" v-if="form.mode === 'meat'"></div>
          <div class="mode-check meat-check" v-if="form.mode === 'meat'">✓</div>
          <div class="mode-big-icon">🍗</div>
          <div class="mode-card-title">Meat Mode</div>
          <div class="mode-card-desc">Broilers, weight gain & harvest tracking</div>
        </button>
      </div>

      <!-- Basic Info -->
      <div class="form-section">
        <div class="form-section-title">Basic Info</div>
        <div class="card card-sm">
          <div class="form-group">
            <label class="form-label">Batch Name *</label>
            <input v-model="form.name" class="form-input" :placeholder="form.mode === 'egg' ? 'e.g. Layers A — Jan 2025' : 'e.g. Broilers B — Jan 2025'" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Breed</label>
              <input v-model="form.breed" class="form-input" :placeholder="form.mode === 'egg' ? 'e.g. Isa Brown' : 'e.g. Ross 308'" />
            </div>
            <div class="form-group">
              <label class="form-label">Start Date *</label>
              <input v-model="form.startDate" type="date" class="form-input" />
            </div>
          </div>
        </div>
      </div>

      <!-- Flock Details -->
      <div class="form-section">
        <div class="form-section-title">Flock Details</div>
        <div class="card card-sm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Bird Count *</label>
              <input v-model.number="form.initialCount" type="number" class="form-input" placeholder="500" min="1" />
            </div>
            <div class="form-group">
              <label class="form-label">Cost / Bird ({{ sym }})</label>
              <input v-model.number="form.purchaseCostPerBird" type="number" class="form-input" placeholder="0.00" step="0.01" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select v-model="form.status" class="form-select">
              <option value="active">Active — Currently running</option>
              <option value="completed">Completed</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Mode-specific -->
      <div class="form-section" v-if="form.mode === 'meat'">
        <div class="form-section-title">Broiler Targets</div>
        <div class="card card-sm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Target Weight ({{ settings.weightUnit }})</label>
              <input v-model.number="form.targetWeight" type="number" class="form-input" placeholder="2.5" step="0.1" />
            </div>
            <div class="form-group">
              <label class="form-label">Target Age (wks)</label>
              <input v-model.number="form.targetAgeWeeks" type="number" class="form-input" placeholder="6" min="1" />
            </div>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="form-section">
        <div class="form-section-title">Notes</div>
        <div class="card card-sm">
          <div class="form-group" style="margin-bottom:0">
            <textarea v-model="form.notes" class="form-textarea" placeholder="Housing setup, feed brand, supplier notes…"></textarea>
          </div>
        </div>
      </div>

      <!-- Cost summary -->
      <div class="cost-preview" v-if="form.initialCount > 0 && form.purchaseCostPerBird > 0">
        <div class="cost-preview-row">
          <span class="text-sm text-muted">🐥 Initial chick cost</span>
          <span class="text-sm font-bold text-amber">{{ formatCurrency(form.initialCount * form.purchaseCostPerBird, sym) }}</span>
        </div>
        <div class="cost-preview-row">
          <span class="text-sm text-muted">Birds</span>
          <span class="text-sm font-bold">{{ form.initialCount.toLocaleString() }}</span>
        </div>
        <div class="cost-preview-row">
          <span class="text-sm text-muted">Cost per bird</span>
          <span class="text-sm font-bold">{{ formatCurrency(form.purchaseCostPerBird, sym) }}</span>
        </div>
      </div>

      <button class="btn btn-primary btn-full mt-3" @click="save" :disabled="!isValid" style="height:52px; font-size:16px; border-radius:16px">
        {{ isEdit ? '💾 Save Changes' : `🐔 Create ${form.mode === 'egg' ? 'Egg' : 'Meat'} Batch` }}
      </button>

      <button v-if="isEdit" class="btn btn-danger btn-full mt-2" @click="deleteBatch">🗑️ Delete Batch</button>

      <div v-if="!isValid && form.name" class="alert alert-warn mt-3">
        <span>ℹ️</span> Fill in batch name, start date, and bird count to continue.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useSettingsStore } from '@/stores/settings'
import { useAuthStore } from '@/stores/auth'
import { formatCurrency, today } from '@/utils/formatters'

const router = useRouter()
const route = useRoute()
const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const authStore = useAuthStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const isEdit = computed(() => route.params.id !== 'new' && !!route.params.id)
const existing = computed(() => isEdit.value ? batchStore.getById(route.params.id as string) : null)
const modeParam = computed(() => (route.query.mode as string) || 'egg')

const form = ref({
  name: existing.value?.name || '',
  mode: (existing.value?.mode || modeParam.value) as 'egg' | 'meat',
  breed: existing.value?.breed || '',
  startDate: existing.value?.startDate || today(),
  initialCount: existing.value?.initialCount || 0,
  purchaseCostPerBird: existing.value?.purchaseCostPerBird || 0,
  targetWeight: existing.value?.targetWeight || 0,
  targetAgeWeeks: existing.value?.targetAgeWeeks || 6,
  status: existing.value?.status || 'active' as any,
  notes: existing.value?.notes || '',
})

const isValid = computed(() => form.value.name.trim() && form.value.startDate && form.value.initialCount > 0)

async function save() {
  if (!isValid.value) return
  const uid = authStore.uid!
  const data = {
    ...form.value,
    userId: uid,
    currentCount: isEdit.value ? (existing.value?.currentCount || form.value.initialCount) : form.value.initialCount,
  }
  if (isEdit.value) {
    await batchStore.update(route.params.id as string, data)
    router.push(`/batches/${route.params.id}`)
  } else {
    const batch = await batchStore.add(data)
    if (form.value.purchaseCostPerBird && form.value.initialCount) {
      await expenseStore.add({
        userId: uid,
        batchId: batch.id,
        category: 'chicks',
        amount: form.value.purchaseCostPerBird * form.value.initialCount,
        date: form.value.startDate,
        description: `${form.value.initialCount} chicks @ ${formatCurrency(form.value.purchaseCostPerBird, sym.value)} each`,
      })
    }
    router.push(`/batches/${batch.id}`)
  }
}

function deleteBatch() {
  if (confirm('Delete this batch? Related logs will remain in the system.')) {
    batchStore.remove(route.params.id as string)
    router.push('/batches')
  }
}
</script>

<style scoped>
.mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.mode-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 20px 12px;
  background: var(--card);
  border: 2px solid var(--border2);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;
}
.mode-card:active { transform: scale(0.96); }
.mode-egg-active { border-color: var(--egg); }
.mode-meat-active { border-color: var(--meat); }

.mode-glow {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
}
.egg-glow { background: radial-gradient(circle at 50% 0%, var(--egg) 0%, transparent 70%); }
.meat-glow { background: radial-gradient(circle at 50% 0%, var(--meat) 0%, transparent 70%); }

.mode-check {
  position: absolute;
  top: 10px; right: 10px;
  width: 22px; height: 22px;
  background: var(--egg);
  color: #000;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.meat-check { background: var(--meat); color: #fff; }

.mode-big-icon { font-size: 36px; line-height: 1; }
.mode-card-title { font-size: 15px; font-weight: 800; letter-spacing: -0.2px; }
.mode-egg-active .mode-card-title { color: var(--egg2); }
.mode-meat-active .mode-card-title { color: var(--meat2); }
.mode-card-desc { font-size: 11px; color: var(--text3); line-height: 1.4; }

.form-section { margin-bottom: 16px; }
.form-section-title {
  font-size: 11px; font-weight: 700; color: var(--text3);
  text-transform: uppercase; letter-spacing: 0.8px;
  margin-bottom: 8px; padding-left: 4px;
}

.cost-preview {
  background: var(--amber-dim);
  border: 1px solid var(--amber-glow);
  border-radius: 14px;
  padding: 14px 16px;
  margin-top: 12px;
}
.cost-preview-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}
.cost-preview-row + .cost-preview-row { border-top: 1px solid rgba(245,166,35,0.1); }
</style>
