import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HealthRecord } from '@/types'
import { api } from '@/api'

export const useHealthStore = defineStore('health', () => {
  const records = ref<HealthRecord[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { records.value = []; return }
    try {
      records.value = await api.get('/health')
    } catch (e) {
      console.error('health init', e)
    }
  }

  async function add(data: Omit<HealthRecord, 'id'>) {
    const created = await api.post('/health', data)
    records.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/health/${id}`)
    records.value = records.value.filter(r => r.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  return { records, init, add, remove, forBatch }
})
