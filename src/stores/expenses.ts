import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Expense } from '@/types'
import { api } from '@/api'

export const useExpenseStore = defineStore('expenses', () => {
  const expenses = ref<Expense[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { expenses.value = []; return }
    try {
      expenses.value = await api.get('/expenses')
    } catch (e) {
      console.error('expenses init', e)
    }
  }

  async function add(data: Omit<Expense, 'id'>) {
    const created = await api.post('/expenses', data)
    expenses.value.unshift(created)
  }

  async function remove(id: string) {
    await api.delete(`/expenses/${id}`)
    expenses.value = expenses.value.filter(e => e.id !== id)
  }

  async function update(id: string, patch: Partial<Expense>) {
    const updated = await api.patch(`/expenses/${id}`, patch)
    const idx = expenses.value.findIndex(e => e.id === id)
    if (idx !== -1) expenses.value[idx] = { ...expenses.value[idx], ...updated }
  }

  function forBatch(batchId: string) {
    return computed(() => expenses.value.filter(e => e.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => expenses.value.filter(e => e.batchId === batchId).reduce((s, e) => s + e.amount, 0))
  }

  const totalAll = computed(() => expenses.value.reduce((s, e) => s + e.amount, 0))

  return { expenses, init, add, remove, update, forBatch, totalForBatch, totalAll }
})
