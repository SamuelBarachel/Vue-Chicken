import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { AppSettings } from '@/types'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const DEFAULT: AppSettings = {
  currency: 'ZiG',
  currencySymbol: 'ZiG',
  weightUnit: 'kg',
  temperatureUnit: 'C',
  darkMode: true,
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = reactive<AppSettings>({ ...DEFAULT })
  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    if (!uid) { Object.assign(settings, DEFAULT); return }
    unsubscribe = onSnapshot(doc(db, 'users', uid, 'meta', 'settings'), snap => {
      if (snap.exists()) {
        Object.assign(settings, { ...DEFAULT, ...snap.data() as AppSettings })
      } else {
        Object.assign(settings, DEFAULT)
        setDoc(doc(db, 'users', uid!, 'meta', 'settings'), DEFAULT)
      }
    })
  }

  async function update(patch: Partial<AppSettings>) {
    Object.assign(settings, patch)
    if (uid) {
      await setDoc(doc(db, 'users', uid, 'meta', 'settings'), { ...settings })
    }
  }

  return { settings, init, update }
})
