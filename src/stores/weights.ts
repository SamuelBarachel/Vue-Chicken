import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { WeightRecord } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useWeightStore = defineStore('weights', () => {
  const records = ref<WeightRecord[]>([])

  async function init(uid: string | null) {
    if (!uid) { records.value = []; return }
    try {
      const q = query(collection(db, 'weights'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      records.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as WeightRecord))
    } catch (e) {
      console.error('weights init', e)
    }
  }

  async function add(data: Omit<WeightRecord, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'weights'), { ...data, createdAt: serverTimestamp() })
    records.value.unshift({ id: ref2.id, ...data } as WeightRecord)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'weights', id))
    records.value = records.value.filter(r => r.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))
      return sorted[0] || null
    })
  }

  return { records, init, add, remove, forBatch, latestForBatch }
})
