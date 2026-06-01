import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { EggCollection } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useEggStore = defineStore('eggs', () => {
  const collections = ref<EggCollection[]>([])

  async function init(uid: string | null) {
    if (!uid) { collections.value = []; return }
    try {
      const q = query(collection(db, 'eggs'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      collections.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as EggCollection))
    } catch (e) {
      console.error('eggs init', e)
    }
  }

  async function add(data: Omit<EggCollection, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'eggs'), { ...data, createdAt: serverTimestamp() })
    collections.value.unshift({ id: ref2.id, ...data } as EggCollection)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'eggs', id))
    collections.value = collections.value.filter(c => c.id !== id)
  }

  async function update(id: string, patch: Partial<EggCollection>) {
    await updateDoc(doc(db, 'eggs', id), patch)
    const idx = collections.value.findIndex(c => c.id === id)
    if (idx !== -1) collections.value[idx] = { ...collections.value[idx], ...patch }
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
