import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Revenue } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useRevenueStore = defineStore('revenue', () => {
  const revenues = ref<Revenue[]>([])

  async function init(uid: string | null) {
    if (!uid) { revenues.value = []; return }
    try {
      const q = query(collection(db, 'revenue'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      revenues.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as Revenue))
    } catch (e) {
      console.error('revenue init', e)
    }
  }

  async function add(data: Omit<Revenue, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'revenue'), { ...data, createdAt: serverTimestamp() })
    revenues.value.unshift({ id: ref2.id, ...data } as Revenue)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'revenue', id))
    revenues.value = revenues.value.filter(r => r.id !== id)
  }

  async function update(id: string, patch: Partial<Revenue>) {
    await updateDoc(doc(db, 'revenue', id), patch)
    const idx = revenues.value.findIndex(r => r.id === id)
    if (idx !== -1) revenues.value[idx] = { ...revenues.value[idx], ...patch }
  }

  function forBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => revenues.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.amount, 0))
  }

  const totalAll = computed(() => revenues.value.reduce((s, r) => s + r.amount, 0))

  return { revenues, init, add, remove, update, forBatch, totalForBatch, totalAll }
})
