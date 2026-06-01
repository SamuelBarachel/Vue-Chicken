import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Expense } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useExpenseStore = defineStore('expenses', () => {
  const expenses = ref<Expense[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { expenses.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'expenses'), snap => {
      expenses.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as Expense))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<Expense, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'expenses'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'expenses', id))
  }

  async function update(id: string, patch: Partial<Expense>) {
    if (!uid) return
    await setDoc(doc(db, 'users', uid, 'expenses', id), patch, { merge: true })
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
