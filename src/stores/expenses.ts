import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Expense } from '@/types'
import { uid } from '@/utils/formatters'

function load(): Expense[] {
  try { const r = localStorage.getItem('vc_expenses'); return r ? JSON.parse(r) : [] } catch { return [] }
}

export const useExpenseStore = defineStore('expenses', () => {
  const expenses = ref<Expense[]>(load())
  function save() { localStorage.setItem('vc_expenses', JSON.stringify(expenses.value)) }

  function add(data: Omit<Expense, 'id'>) {
    expenses.value.unshift({ ...data, id: uid() }); save()
  }
  function remove(id: string) { expenses.value = expenses.value.filter(e => e.id !== id); save() }
  function update(id: string, patch: Partial<Expense>) {
    const i = expenses.value.findIndex(e => e.id === id)
    if (i !== -1) { expenses.value[i] = { ...expenses.value[i], ...patch }; save() }
  }

  function forBatch(batchId: string) {
    return computed(() => expenses.value.filter(e => e.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => expenses.value.filter(e => e.batchId === batchId).reduce((s, e) => s + e.amount, 0))
  }

  const totalAll = computed(() => expenses.value.reduce((s, e) => s + e.amount, 0))

  return { expenses, add, remove, update, forBatch, totalForBatch, totalAll }
})
