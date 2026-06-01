import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Mortality } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useMortalityStore = defineStore('mortality', () => {
  const records = ref<Mortality[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { records.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'mortality'), snap => {
      records.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as Mortality))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<Mortality, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'mortality'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'mortality', id))
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId))
  }

  function totalForBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).reduce((s, r) => s + r.count, 0))
  }

  const totalAll = computed(() => records.value.reduce((s, r) => s + r.count, 0))

  return { records, init, add, remove, forBatch, totalForBatch, totalAll }
})
