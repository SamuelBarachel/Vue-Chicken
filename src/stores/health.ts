import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HealthRecord } from '@/types'
import { uid } from '@/utils/formatters'

function load(): HealthRecord[] {
  try { const r = localStorage.getItem('vc_health'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useHealthStore = defineStore('health', () => {
  const records = ref<HealthRecord[]>(load())
  function save() { localStorage.setItem('vc_health', JSON.stringify(records.value)) }

  function add(data: Omit<HealthRecord, 'id'>) {
    records.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { records.value = records.value.filter(r => r.id !== id); save() }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  return { records, add, remove, forBatch }
})
