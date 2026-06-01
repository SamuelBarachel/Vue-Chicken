import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Mortality } from '@/types'
import { api } from '@/api'

export const useMortalityStore = defineStore('mortality', () => {
  const records = ref<Mortality[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { records.value = []; return }
    try {
      records.value = await api.get('/mortality')
    } catch (e) {
      console.error('mortality init', e)
    }
  }

  async function add(data: Omit<Mortality, 'id'>) {
    const created = await api.post('/mortality', data)
    records.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/mortality/${id}`)
    records.value = records.value.filter(r => r.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.count, 0))
  }

  const totalAll = computed(() => records.value.reduce((s, r) => s + r.count, 0))

  return { records, init, add, remove, forBatch, totalForBatch, totalAll }
})
