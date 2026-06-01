import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HealthRecord } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useHealthStore = defineStore('health', () => {
  const records = ref<HealthRecord[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { records.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'health'), snap => {
      records.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as HealthRecord))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<HealthRecord, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'health'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'health', id))
  }

  function forBatch(batchId: string) {
    return computed(() => records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  return { records, init, add, remove, forBatch }
})
