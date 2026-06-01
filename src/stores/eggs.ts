import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EggCollection } from '@/types'
import { api } from '@/api'

export const useEggStore = defineStore('eggs', () => {
  const collections = ref<EggCollection[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { collections.value = []; return }
    try {
      collections.value = await api.get('/eggs')
    } catch (e) {
      console.error('eggs init', e)
    }
  }

  async function add(data: Omit<EggCollection, 'id'>) {
    const created = await api.post('/eggs', data)
    collections.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/eggs/${id}`)
    collections.value = collections.value.filter(c => c.id !== id)
  }

  async function update(id: string, patch: Partial<EggCollection>) {
    const updated = await api.patch(`/eggs/${id}`, patch)
    const idx = collections.value.findIndex(c => c.id === id)
    if (idx !== -1) collections.value[idx] = { ...collections.value[idx], ...updated }
  }

  function forBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function totalEggsForBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).reduce((s, c) => s + c.totalEggs, 0))
  }

  const totalAll = computed(() => collections.value.reduce((s, c) => s + c.totalEggs, 0))

  return { collections, init, add, remove, update, forBatch, totalEggsForBatch, totalAll }
})
