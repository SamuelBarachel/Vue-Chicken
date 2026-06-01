import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Revenue } from '@/types'
import { api } from '@/api'

export const useRevenueStore = defineStore('revenue', () => {
  const revenues = ref<Revenue[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { revenues.value = []; return }
    try {
      revenues.value = await api.get('/revenue')
    } catch (e) {
      console.error('revenue init', e)
    }
  }

  async function add(data: Omit<Revenue, 'id'>) {
    const created = await api.post('/revenue', data)
    revenues.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/revenue/${id}`)
    revenues.value = revenues.value.filter(r => r.id !== id)
  }

  async function update(id: string, patch: Partial<Revenue>) {
    const updated = await api.patch(`/revenue/${id}`, patch)
    const idx = revenues.value.findIndex(r => r.id === id)
    if (idx !== -1) revenues.value[idx] = { ...revenues.value[idx], ...updated }
  }

  function forBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.amount, 0))
  }

  const totalAll = computed(() => revenues.value.reduce((s, r) => s + r.amount, 0))

  return { revenues, init, add, remove, update, forBatch, totalForBatch, totalAll }
})
