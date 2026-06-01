import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { AppSettings } from '@/types'
import { api } from '@/api'

const DEFAULT: AppSettings = {
  currency: 'ZiG',
  currencySymbol: 'ZiG',
  weightUnit: 'kg',
  temperatureUnit: 'C',
  darkMode: true,
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = reactive<AppSettings>({ ...DEFAULT })

  async function init(_uid: string | null) {
    if (!_uid) { Object.assign(settings, DEFAULT); return }
    try {
      const data = await api.get('/settings')
      Object.assign(settings, { ...DEFAULT, ...data })
    } catch {
      Object.assign(settings, DEFAULT)
    }
  }

  async function update(patch: Partial<AppSettings>) {
    Object.assign(settings, patch)
    try {
      await api.post('/settings', { ...settings })
    } catch (e) {
      console.error('settings update', e)
    }
  }

  return { settings, init, update }
})
