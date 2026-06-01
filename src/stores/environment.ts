import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EnvironmentLog } from '@/types'
import { api } from '@/api'

export const useEnvironmentStore = defineStore('environment', () => {
  const logs = ref<EnvironmentLog[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { logs.value = []; return }
    try {
      logs.value = await api.get('/environment')
    } catch (e) {
      console.error('environment init', e)
    }
  }

  async function add(data: Omit<EnvironmentLog, 'id'>) {
    const created = await api.post('/environment', data)
    logs.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/environment/${id}`)
    logs.value = logs.value.filter(l => l.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => logs.value.filter(l => l.batchId === batchId).sort((a, b) => {
      const da = a.date + a.time; const db2 = b.date + b.time
      return db2.localeCompare(da)
    }))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = logs.value.filter(l => l.batchId === batchId).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time))
      return sorted[0] || null
    })
  }

  return { logs, init, add, remove, forBatch, latestForBatch }
})
