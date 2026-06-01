import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EnvironmentLog } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useEnvironmentStore = defineStore('environment', () => {
  const logs = ref<EnvironmentLog[]>([])

  async function init(uid: string | null) {
    if (!uid) { logs.value = []; return }
    try {
      const q = query(collection(db, 'environment'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      logs.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as EnvironmentLog))
    } catch (e) {
      console.error('environment init', e)
    }
  }

  async function add(data: Omit<EnvironmentLog, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'environment'), { ...data, createdAt: serverTimestamp() })
    logs.value.unshift({ id: ref2.id, ...data } as EnvironmentLog)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'environment', id))
    logs.value = logs.value.filter(l => l.id !== id)
  }

  function forBatch(batchId: string) {
    return computed(() => logs.value.filter(l => l.batchId === batchId).sort((a, b) => {
      const da = a.date + a.time; const db2 = b.date + b.time
      return db2.localeCompare(da)
    }))
  }

  function latestForBatch(batchId: string) {
    return computed(() => {
      const sorted = logs.value.filter(l => l.batchId === batchId).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time))
      return sorted[0] || null
    })
  }

  return { logs, init, add, remove, forBatch, latestForBatch }
})
