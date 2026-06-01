import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Mortality } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useMortalityStore = defineStore('mortality', () => {
  const records = ref<Mortality[]>([])

  async function init(uid: string | null) {
    if (!uid) { records.value = []; return }
    try {
      const q = query(collection(db, 'mortality'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      records.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as Mortality))
    } catch (e) {
      console.error('mortality init', e)
    }
  }

  async function add(data: Omit<Mortality, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'mortality'), { ...data, createdAt: serverTimestamp() })
    records.value.unshift({ id: ref2.id, ...data } as Mortality)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'mortality', id))
    records.value = records.value.filter(r => r.id !== id)
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
