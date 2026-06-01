import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EnvironmentLog } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useEnvironmentStore = defineStore('environment', () => {
  const logs = ref<EnvironmentLog[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { logs.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'environment'), snap => {
      logs.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as EnvironmentLog))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<EnvironmentLog, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'environment'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'environment', id))
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
