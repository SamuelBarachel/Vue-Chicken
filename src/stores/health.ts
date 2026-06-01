import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HealthRecord } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useHealthStore = defineStore('health', () => {
  const records = ref<HealthRecord[]>([])

  async function init(uid: string | null) {
    if (!uid) { records.value = []; return }
    try {
      const q = query(collection(db, 'health'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      records.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as HealthRecord))
    } catch (e) {
      console.error('health init', e)
    }
  }

  async function add(data: Omit<HealthRecord, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'health'), { ...data, createdAt: serverTimestamp() })
    records.value.unshift({ id: ref2.id, ...data } as HealthRecord)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'health', id))
    records.value = records.value.filter(r => r.id !== id)
  }

  async function update(id: string, patch: Partial<HealthRecord>) {
    await updateDoc(doc(db, 'health', id), patch)
    const idx = records.value.findIndex(r => r.id === id)
    if (idx !== -1) records.value[idx] = { ...records.value[idx], ...patch }
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  return { records, init, add, remove, update, forBatch }
})
