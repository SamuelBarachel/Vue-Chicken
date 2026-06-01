import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Batch } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, getDocs,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'

export const useBatchStore = defineStore('batches', () => {
  const batches = ref<Batch[]>([])

  async function init(uid: string | null) {
    if (!uid) { batches.value = []; return }
    try {
      const q = query(collection(db, 'batches'), where('userId', '==', uid), orderBy('createdAt', 'desc'))
      const snap = await getDocs(q)
      batches.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as Batch))
    } catch (e) {
      console.error('batches init', e)
    }
  }

  async function add(data: Omit<Batch, 'id'> & { userId: string }): Promise<Batch> {
    const ref2 = await addDoc(collection(db, 'batches'), { ...data, createdAt: serverTimestamp() })
    const created = { id: ref2.id, ...data } as Batch
    batches.value.unshift(created)
    return created
  }

  async function update(id: string, patch: Partial<Batch>) {
    await updateDoc(doc(db, 'batches', id), patch)
    const idx = batches.value.findIndex(b => b.id === id)
    if (idx !== -1) batches.value[idx] = { ...batches.value[idx], ...patch }
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, 'batches', id))
    batches.value = batches.value.filter(b => b.id !== id)
  }

  function getById(id: string) {
    return batches.value.find(b => b.id === id)
  }

  const active = computed(() => batches.value.filter(b => b.status === 'active'))
  const eggBatches = computed(() => batches.value.filter(b => b.mode === 'egg'))
  const meatBatches = computed(() => batches.value.filter(b => b.mode === 'meat'))

  return { batches, init, add, update, remove, getById, active, eggBatches, meatBatches }
})
