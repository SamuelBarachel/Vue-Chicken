import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { WeightRecord } from '@/types'
import { api } from '@/api'

export const useWeightStore = defineStore('weights', () => {
  const records = ref<WeightRecord[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { records.value = []; return }
    try {
      records.value = await api.get('/weights')
    } catch (e) {
      console.error('weights init', e)
    }
  }

  async function add(data: Omit<WeightRecord, 'id'>) {
    const created = await api.post('/weights', data)
    records.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/weights/${id}`)
    records.value = records.value.filter(r => r.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))
      return sorted[0] || null
    })
  }

  return { records, init, add, remove, forBatch, latestForBatch }
})
