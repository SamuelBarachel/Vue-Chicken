import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FeedStock } from '@/types'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useFeedStockStore = defineStore('feedStock', () => {
  const records = ref<FeedStock[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { records.value = []; return }
    unsubscribe = onSnapshot(collection(db, 'users', uid, 'feedStock'), snap => {
      records.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as FeedStock))
        .sort((a, b) => b.date.localeCompare(a.date))
    })
  }

  async function add(data: Omit<FeedStock, 'id'>) {
    if (!uid) return
    await addDoc(collection(db, 'users', uid, 'feedStock'), { ...data, _ts: Date.now() })
  }

  async function remove(id: string) {
    if (!uid) return
    await deleteDoc(doc(db, 'users', uid, 'feedStock', id))
  }

  function latestForBatch(batchId: string) {
    return computed(() =>
      records.value
        .filter(r => r.batchId === batchId)
        .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null
    )
  }

  function forBatch(batchId: string) {
    return computed(() =>
      records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))
    )
  }

  const totalRecords = computed(() => records.value.length)

  return { records, totalRecords, init, add, remove, latestForBatch, forBatch }
})
