import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Expense } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useExpenseStore = defineStore('expenses', () => {
  const expenses = ref<Expense[]>([])

  async function init(uid: string | null) {
    if (!uid) { expenses.value = []; return }
    try {
      const q = query(collection(db, 'expenses'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      expenses.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as Expense))
    } catch (e) {
      console.error('expenses init', e)
    }
  }

  async function add(data: Omit<Expense, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'expenses'), { ...data, createdAt: serverTimestamp() })
    expenses.value.unshift({ id: ref2.id, ...data } as Expense)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'expenses', id))
    expenses.value = expenses.value.filter(e => e.id !== id)
  }

  async function update(id: string, patch: Partial<Expense>) {
    await updateDoc(doc(db, 'expenses', id), patch)
    const idx = expenses.value.findIndex(e => e.id === id)
    if (idx !== -1) expenses.value[idx] = { ...expenses.value[idx], ...patch }
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
