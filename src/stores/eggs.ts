import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EggCollection } from '@/types'
import { uid } from '@/utils/formatters'

function load(): EggCollection[] {
  try { const r = localStorage.getItem('vc_eggs'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useEggStore = defineStore('eggs', () => {
  const collections = ref<EggCollection[]>(load())
  function save() { localStorage.setItem('vc_eggs', JSON.stringify(collections.value)) }

  function add(data: Omit<EggCollection, 'id'>) {
    collections.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { collections.value = collections.value.filter(c => c.id !== id); save() }
  function update(id: string, patch: Partial<EggCollection>) {
    const i = collections.value.findIndex(c => c.id === id)
    if (i !== -1) { collections.value[i] = { ...collections.value[i], ...patch }; save() }
  }

  function forBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function totalEggsForBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).reduce((s, c) => s + c.totalEggs, 0))
  }

  const totalAll = computed(() => collections.value.reduce((s, c) => s + c.totalEggs, 0))

  return { collections, add, remove, update, forBatch, totalEggsForBatch, totalAll }
})
