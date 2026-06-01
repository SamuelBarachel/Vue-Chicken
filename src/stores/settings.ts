import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AppSettings } from '@/types'

const DEFAULT: AppSettings = {
  currency: 'USD',
  currencySymbol: '$',
  weightUnit: 'kg',
  temperatureUnit: 'C',
  darkMode: true,
}

function load(): AppSettings {
  try {
    const raw = localStorage.getItem('vc_settings')
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT }
  } catch { return { ...DEFAULT } }
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<AppSettings>(load())

  function save() {
    localStorage.setItem('vc_settings', JSON.stringify(settings.value))
  }

  function update(patch: Partial<AppSettings>) {
    settings.value = { ...settings.value, ...patch }
    save()
  }

  return { settings, update }
})
