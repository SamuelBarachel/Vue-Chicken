import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Revenue } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useRevenueStore = defineStore('revenue', () => {
  const revenues = ref<Revenue[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { revenues.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'revenue'), snap => {
      revenues.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as Revenue))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<Revenue, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'revenue'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'revenue', id))
  }

  async function update(id: string, patch: Partial<Revenue>) {
    if (!uid) return
    await setDoc(doc(db, 'users', uid, 'revenue', id), patch, { merge: true })
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
