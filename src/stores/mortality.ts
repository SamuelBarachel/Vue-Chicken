import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Mortality } from '@/types'
import { uid } from '@/utils/formatters'

function load(): Mortality[] {
  try { const r = localStorage.getItem('vc_mortality'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useMortalityStore = defineStore('mortality', () => {
  const records = ref<Mortality[]>(load())
  function save() { localStorage.setItem('vc_mortality', JSON.stringify(records.value)) }

  function add(data: Omit<Mortality, 'id'>) {
    records.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { records.value = records.value.filter(r => r.id !== id); save() }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.count, 0))
  }

  const totalAll = computed(() => records.value.reduce((s, r) => s + r.count, 0))

  return { records, add, remove, forBatch, totalForBatch, totalAll }
})
