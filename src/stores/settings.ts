import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { AppSettings } from '@/types'
import { db } from '@/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const DEFAULT: AppSettings = {
  currency: 'ZiG',
  currencySymbol: 'ZiG',
  weightUnit: 'kg',
  temperatureUnit: 'C',
  darkMode: true,
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = reactive<AppSettings>({ ...DEFAULT })

  async function init(uid: string | null) {
    if (!uid) { Object.assign(settings, DEFAULT); return }
    try {
      const snap = await getDoc(doc(db, 'settings', uid))
      if (snap.exists()) {
        Object.assign(settings, { ...DEFAULT, ...snap.data() })
      } else {
        Object.assign(settings, DEFAULT)
      }
    } catch {
      Object.assign(settings, DEFAULT)
    }
  }

  async function update(uid: string, patch: Partial<AppSettings>) {
    Object.assign(settings, patch)
    try {
      await setDoc(doc(db, 'settings', uid), { ...settings }, { merge: true })
    } catch (e) {
      console.error('settings update', e)
    }
  }

  return { settings, init, update }
})
