import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Batch } from '@/types'
import { uid } from '@/utils/formatters'

function load(): Batch[] {
  try {
    const raw = localStorage.getItem('vc_batches')
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export const useBatchStore = defineStore('batches', () => {
  const batches = ref<Batch[]>(load())

  function save() { localStorage.setItem('vc_batches', JSON.stringify(batches.value)) }

  function add(data: Omit<Batch, 'id'>): Batch {
    const batch: Batch = { ...data, id: uid() }
    batches.value.unshift(batch)
    save()
    return batch
  }

  function update(id: string, patch: Partial<Batch>) {
    const idx = batches.value.findIndex(b => b.id === id)
    if (idx !== -1) { batches.value[idx] = { ...batches.value[idx], ...patch }; save() }
  }

  function remove(id: string) {
    batches.value = batches.value.filter(b => b.id !== id)
    save()
  }

  function getById(id: string) {
    return batches.value.find(b => b.id === id)
  }

  const active = computed(() => batches.value.filter(b => b.status === 'active'))
  const eggBatches = computed(() => batches.value.filter(b => b.mode === 'egg'))
  const meatBatches = computed(() => batches.value.filter(b => b.mode === 'meat'))

  return { batches, add, update, remove, getById, active, eggBatches, meatBatches }
})
