<template>
  <div class="page">
    <div class="page-header">
      <div class="flex-between">
        <div>
          <div class="page-title">{{ isEdit ? 'Edit Batch' : 'New Batch' }}</div>
          <div class="page-subtitle">{{ isEdit ? 'Update batch info' : 'Add a new flock' }}</div>
        </div>
        <button class="btn btn-ghost btn-icon" @click="$router.back()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="section">
      <!-- Mode Selector -->
      <div class="mode-toggle mb-3">
        <button
          class="mode-btn"
          :class="{ active: form.mode === 'egg', 'egg-active': form.mode === 'egg' }"
          @click="form.mode = 'egg'"
        >
          <span class="mode-emoji">🥚</span>
          <span class="mode-label">Egg Mode</span>
          <span class="mode-desc">Layers & production</span>
        </button>
        <button
          class="mode-btn"
          :class="{ active: form.mode === 'meat', 'meat-active': form.mode === 'meat' }"
          @click="form.mode = 'meat'"
        >
          <span class="mode-emoji">🍗</span>
          <span class="mode-label">Meat Mode</span>
          <span class="mode-desc">Broilers & harvest</span>
        </button>
      </div>

      <!-- Form -->
      <div class="card">
        <div class="form-group">
          <label class="form-label">Batch Name *</label>
          <input v-model="form.name" class="form-input" placeholder="e.g. Batch A - Jan 2025" />
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
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Initial Bird Count *</label>
            <input v-model.number="form.initialCount" type="number" class="form-input" placeholder="500" min="1" />
          </div>
          <div class="form-group">
            <label class="form-label">Cost Per Bird ({{ sym }})</label>
            <input v-model.number="form.purchaseCostPerBird" type="number" class="form-input" placeholder="0.00" step="0.01" />
          </div>
        </div>

        <!-- Egg-specific -->
        <template v-if="form.mode === 'egg'">
          <div class="divider"></div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select v-model="form.status" class="form-select">
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </template>

        <!-- Meat-specific -->
        <template v-if="form.mode === 'meat'">
          <div class="divider"></div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Target Weight ({{ settings.weightUnit }})</label>
              <input v-model.number="form.targetWeight" type="number" class="form-input" placeholder="2.5" step="0.1" />
            </div>
            <div class="form-group">
              <label class="form-label">Target Age (weeks)</label>
              <input v-model.number="form.targetAgeWeeks" type="number" class="form-input" placeholder="6" min="1" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select v-model="form.status" class="form-select">
              <option value="active">Active</option>
              <option value="completed">Harvested</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </template>

        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea v-model="form.notes" class="form-textarea" placeholder="Any additional notes…"></textarea>
        </div>
      </div>

      <!-- Purchase cost summary -->
      <div class="alert alert-warn mt-3" v-if="form.initialCount && form.purchaseCostPerBird">
        <span>🐥</span>
        <span>Total chick cost: <strong>{{ formatCurrency(form.initialCount * form.purchaseCostPerBird, sym) }}</strong></span>
      </div>

      <!-- Save -->
      <button class="btn btn-primary btn-full mt-3" @click="save" :disabled="!isValid">
        {{ isEdit ? 'Save Changes' : '🐔 Create Batch' }}
      </button>
      <button v-if="isEdit" class="btn btn-danger btn-full mt-2" @click="deleteBatch">Delete Batch</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBatchStore } from '@/stores/batches'
import { useExpenseStore } from '@/stores/expenses'
import { useSettingsStore } from '@/stores/settings'
import { formatCurrency, today } from '@/utils/formatters'
import type { Batch } from '@/types'

const router = useRouter()
const route = useRoute()
const batchStore = useBatchStore()
const expenseStore = useExpenseStore()
const { settings } = useSettingsStore()
const sym = computed(() => settings.currencySymbol)

const isEdit = computed(() => route.params.id !== 'new' && !!route.params.id)
const existingBatch = computed(() => isEdit.value ? batchStore.getById(route.params.id as string) : null)

const form = ref({
  name: existingBatch.value?.name || '',
  mode: existingBatch.value?.mode || 'egg' as 'egg' | 'meat',
  breed: existingBatch.value?.breed || '',
  startDate: existingBatch.value?.startDate || today(),
  initialCount: existingBatch.value?.initialCount || 0,
  purchaseCostPerBird: existingBatch.value?.purchaseCostPerBird || 0,
  targetWeight: existingBatch.value?.targetWeight || 0,
  targetAgeWeeks: existingBatch.value?.targetAgeWeeks || 6,
  status: existingBatch.value?.status || 'active' as any,
  notes: existingBatch.value?.notes || '',
})

const isValid = computed(() => form.value.name && form.value.startDate && form.value.initialCount > 0)

function save() {
  if (!isValid.value) return
  const data = {
    ...form.value,
    currentCount: isEdit.value ? (existingBatch.value?.currentCount || form.value.initialCount) : form.value.initialCount,
  }
  if (isEdit.value) {
    batchStore.update(route.params.id as string, data)
    router.push(`/batches/${route.params.id}`)
  } else {
    const batch = batchStore.add(data)
    // Auto-add chick purchase as expense
    if (form.value.purchaseCostPerBird && form.value.initialCount) {
      expenseStore.add({
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
  if (confirm('Delete this batch? All related data will remain.')) {
    batchStore.remove(route.params.id as string)
    router.push('/batches')
  }
}
</script>

<style scoped>
.mode-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mode-btn {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px; padding: 16px 8px;
  background: var(--card); border: 2px solid var(--border);
  border-radius: var(--radius); cursor: pointer; transition: all 0.15s;
  -webkit-tap-highlight-color: transparent;
}
.mode-emoji { font-size: 28px; }
.mode-label { font-size: 14px; font-weight: 700; color: var(--text2); }
.mode-desc { font-size: 11px; color: var(--text3); }
.mode-btn.egg-active { border-color: #EAB308; background: rgba(234,179,8,0.08); }
.mode-btn.egg-active .mode-label { color: #EAB308; }
.mode-btn.meat-active { border-color: #EF4444; background: rgba(239,68,68,0.08); }
.mode-btn.meat-active .mode-label { color: #EF4444; }
</style>
