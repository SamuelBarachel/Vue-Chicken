import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ActivityEntry, ActivityCategory } from '@/types'
import { db } from '@/firebase'
import {
  collection, query, where, orderBy, limit, getDocs,
  addDoc, serverTimestamp,
} from 'firebase/firestore'

export const useActivityLogStore = defineStore('activityLog', () => {
  const entries = ref<ActivityEntry[]>([])

  async function init(uid: string | null) {
    if (!uid) { entries.value = []; return }
    try {
      const q = query(
        collection(db, 'activityLog'),
        where('userId', '==', uid),
        orderBy('timestamp', 'desc'),
        limit(300)
      )
      const snap = await getDocs(q)
      entries.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as ActivityEntry))
    } catch (e) {
      console.error('activityLog init', e)
    }
  }

  async function log(
    category: ActivityCategory,
    description: string,
    user: { uid: string; displayName: string | null; email: string | null; photoURL?: string | null },
    meta?: { batchId?: string; batchName?: string }
  ) {
    const now = new Date()
    const entry: Omit<ActivityEntry, 'id'> = {
      category,
      description,
      timestamp: now.getTime(),
      date: now.toISOString().slice(0, 10),
      userId: user.uid,
      userName: user.displayName || user.email || 'Unknown',
      userEmail: user.email || '',
      userPhoto: user.photoURL || undefined,
      ...meta,
    }
    const ref2 = await addDoc(collection(db, 'activityLog'), { ...entry, createdAt: serverTimestamp() })
    entries.value.unshift({ id: ref2.id, ...entry })
  }

  return { entries, init, log }
})
