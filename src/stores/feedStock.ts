import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FeedStock } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useFeedStockStore = defineStore('feedStock', () => {
  const records = ref<FeedStock[]>([])

  async function init(uid: string | null) {
    if (!uid) { records.value = []; return }
    try {
      const q = query(collection(db, 'feedStock'), where('userId', '==', uid), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      records.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as FeedStock))
    } catch (e) {
      console.error('feedStock init', e)
    }
  }

  async function add(data: Omit<FeedStock, 'id'> & { userId: string }) {
    const ref2 = await addDoc(collection(db, 'feedStock'), { ...data, createdAt: serverTimestamp() })
    records.value.unshift({ id: ref2.id, ...data } as FeedStock)
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'feedStock', id))
    records.value = records.value.filter(r => r.id !== id)
  }

  function latestForBatch(batchId: string) {
    return computed(() =>
      records.value.filter(r => r.batchId === batchId).sort((a, b) => b.date.localeCompare(a.date))[0] ?? null
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
