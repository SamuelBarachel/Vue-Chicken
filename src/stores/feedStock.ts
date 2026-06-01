import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FeedStock } from '@/types'
import { api } from '@/api'

export const useFeedStockStore = defineStore('feedStock', () => {
  const records = ref<FeedStock[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { records.value = []; return }
    try {
      records.value = await api.get('/feedstock')
    } catch (e) {
      console.error('feedStock init', e)
    }
  }

  async function add(data: Omit<FeedStock, 'id'>) {
    const created = await api.post('/feedstock', data)
    records.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/feedstock/${id}`)
    records.value = records.value.filter(r => r.id !== id)
  }

  function latestForBatch(batchId: string) {
    return computed(() =>
      records.value
        .filter(r => r.batchId === batchId)
        .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null
    )
  }

  function forBatch(batchId: string) {
    return computed(() =>
      records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))
    )
  }

  const totalRecords = computed(() => records.value.length)

  return { records, totalRecords, init, add, remove, latestForBatch, forBatch }
})
