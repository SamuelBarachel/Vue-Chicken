import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Batch } from '@/types'
import { api } from '@/api'

export const useBatchStore = defineStore('batches', () => {
  const batches = ref<Batch[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { batches.value = []; return }
    try {
      batches.value = await api.get('/batches')
    } catch (e) {
      console.error('batches init', e)
    }
  }

  async function add(data: Omit<Batch, 'id'>): Promise<Batch> {
    const created = await api.post('/batches', data)
    batches.value.unshift(created)
    return created
  }

  async function update(id: string, patch: Partial<Batch>) {
    const updated = await api.patch(`/batches/${id}`, patch)
    const idx = batches.value.findIndex(b => b.id === id)
    if (idx !== -1) batches.value[idx] = { ...batches.value[idx], ...updated }
  }

  async function remove(id: string) {
    await api.delete(`/batches/${id}`)
    batches.value = batches.value.filter(b => b.id !== id)
  }

  function getById(id: string) {
    return batches.value.find(b => b.id === id)
  }

  const active = computed(() => batches.value.filter(b => b.status === 'active'))
  const eggBatches = computed(() => batches.value.filter(b => b.mode === 'egg'))
  const meatBatches = computed(() => batches.value.filter(b => b.mode === 'meat'))

  return { batches, init, add, update, remove, getById, active, eggBatches, meatBatches }
})
