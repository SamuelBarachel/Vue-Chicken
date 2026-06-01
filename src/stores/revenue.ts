import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Revenue } from '@/types'
import { uid } from '@/utils/formatters'

function load(): Revenue[] {
  try { const r = localStorage.getItem('vc_revenue'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useRevenueStore = defineStore('revenue', () => {
  const revenues = ref<Revenue[]>(load())
  function save() { localStorage.setItem('vc_revenue', JSON.stringify(revenues.value)) }

  function add(data: Omit<Revenue, 'id'>) {
    revenues.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { revenues.value = revenues.value.filter(r => r.id !== id); save() }
  function update(id: string, patch: Partial<Revenue>) {
    const i = revenues.value.findIndex(r => r.id === id)
    if (i !== -1) { revenues.value[i] = { ...revenues.value[i], ...patch }; save() }
  }

  function forBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.amount, 0))
  }

  const totalAll = computed(() => revenues.value.reduce((s, r) => s + r.amount, 0))

  return { revenues, add, remove, update, forBatch, totalForBatch, totalAll }
})
