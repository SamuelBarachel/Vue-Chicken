import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EnvironmentLog } from '@/types'
import { uid } from '@/utils/formatters'

function load(): EnvironmentLog[] {
  try { const r = localStorage.getItem('vc_environment'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useEnvironmentStore = defineStore('environment', () => {
  const logs = ref<EnvironmentLog[]>(load())
  function save() { localStorage.setItem('vc_environment', JSON.stringify(logs.value)) }

  function add(data: Omit<EnvironmentLog, 'id'>) {
    logs.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { logs.value = logs.value.filter(l => l.id !== id); save() }

  function forBatch(batchId: string) {
    return computed(() => logs.value.filter(l => l.batchId === batchId).sort((a, b) => {
      const da = a.date + a.time; const db = b.date + b.time
      return db.localeCompare(da)
    }))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = logs.value.filter(l => l.batchId === batchId).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time))
      return sorted[0] || null
    })
  }

  return { logs, add, remove, forBatch, latestForBatch }
})
