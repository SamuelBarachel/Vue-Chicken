import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { WeightRecord } from '@/types'
import { uid } from '@/utils/formatters'

function load(): WeightRecord[] {
  try { const r = localStorage.getItem('vc_weights'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useWeightStore = defineStore('weights', () => {
  const records = ref<WeightRecord[]>(load())
  function save() { localStorage.setItem('vc_weights', JSON.stringify(records.value)) }

  function add(data: Omit<WeightRecord, 'id'>) {
    records.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { records.value = records.value.filter(r => r.id !== id); save() }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))
      return sorted[0] || null
    })
  }

  return { records, add, remove, forBatch, latestForBatch }
})
