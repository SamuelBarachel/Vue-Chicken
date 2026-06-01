import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ActivityEntry, ActivityCategory } from '@/types'
import { api } from '@/api'

export const useActivityLogStore = defineStore('activityLog', () => {
  const entries = ref<ActivityEntry[]>([])

  async function init(_uid: string | null) {
    if (!_uid) { entries.value = []; return }
    try {
      entries.value = await api.get('/activity')
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
    const created = await api.post('/activity', entry)
    entries.value.unshift(created)
  }

  return { entries, init, log }
})
