import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ActivityEntry, ActivityCategory } from '@/types'
import { collection, onSnapshot, addDoc, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/firebase'

export const useActivityLogStore = defineStore('activityLog', () => {
  const entries = ref<ActivityEntry[]>([])
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { entries.value = []; return }
    const q = query(
      collection(db, 'users', uid, 'activity'),
      orderBy('timestamp', 'desc'),
      limit(300)
    )
    unsubscribe = onSnapshot(q, snap => {
      entries.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as ActivityEntry))
    })
  }

  async function log(
    category: ActivityCategory,
    description: string,
    user: { uid: string; displayName: string | null; email: string | null; photoURL: string | null },
    meta?: { batchId?: string; batchName?: string }
  ) {
    if (!uid) return
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
    await addDoc(collection(db, 'users', uid, 'activity'), entry)
  }

  return { entries, init, log }
})
