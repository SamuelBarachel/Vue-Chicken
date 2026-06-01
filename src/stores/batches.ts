import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Batch } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useBatchStore = defineStore('batches', () => {
  const batches = ref<Batch[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { batches.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'batches'), snap => {
      batches.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as Batch))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<Batch, 'id'>): Promise<Batch> {
    if (!uid) throw new Error('Not authenticated')
    const docRef = await addDoc(collection(db, 'users', uid, 'batches'), { ...data, _ts: Date.now() })
    return { ...data, id: docRef.id }
  }

  async function update(id: string, patch: Partial<Batch>) {
    if (!uid) return
    await setDoc(doc(db, 'users', uid, 'batches', id), patch, { merge: true })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'batches', id))
  }

  function getById(id: string) {
    return batches.value.find(b => b.id === id)
  }

  const active = computed(() => batches.value.filter(b => b.status === 'active'))
  const eggBatches = computed(() => batches.value.filter(b => b.mode === 'egg'))
  const meatBatches = computed(() => batches.value.filter(b => b.mode === 'meat'))

  return { batches, init, add, update, remove, getById, active, eggBatches, meatBatches }
})
