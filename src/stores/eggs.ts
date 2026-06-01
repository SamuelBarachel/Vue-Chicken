import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EggCollection } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useEggStore = defineStore('eggs', () => {
  const collections = ref<EggCollection[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { collections.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'eggs'), snap => {
      collections.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as EggCollection))
        .sort((a, b) => (b as any)._ts - (a as any)._ts)
    })
  }

  async function add(data: Omit<EggCollection, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'eggs'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'eggs', id))
  }

  async function update(id: string, patch: Partial<EggCollection>) {
    if (!uid) return
    await setDoc(doc(db, 'users', uid, 'eggs', id), patch, { merge: true })
  }

  function forBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date)))
  }

  function totalEggsForBatch(batchId: string) {
    return computed(() => collections.value.filter(c => c.batchId === batchId).reduce((s, c) => s + c.totalEggs, 0))
  }

  const totalAll = computed(() => collections.value.reduce((s, c) => s + c.totalEggs, 0))

  return { collections, init, add, remove, update, forBatch, totalEggsForBatch, totalAll }
})
