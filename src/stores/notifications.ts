import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { api } from '@/api'

export interface NotificationPrefs {
  eggReminderEnabled: boolean
  eggReminderHour: number
  healthAlertEnabled: boolean
  healthAlertDaysAhead: number
  mortalityAlertEnabled: boolean
  mortalityAlertThreshold: number
  feedLowAlertEnabled: boolean
  feedLowAlertDaysAhead: number
  feedRateAlertEnabled: boolean
}

const DEFAULTS: NotificationPrefs = {
  eggReminderEnabled: false,
  eggReminderHour: 18,
  healthAlertEnabled: false,
  healthAlertDaysAhead: 1,
  mortalityAlertEnabled: false,
  mortalityAlertThreshold: 3,
  feedLowAlertEnabled: false,
  feedLowAlertDaysAhead: 2,
  feedRateAlertEnabled: false,
}

export const useNotificationStore = defineStore('notifications', () => {
  const permission = ref<NotificationPermission>('default')
  const fcmToken = ref<string | null>(null)
  const prefs = reactive<NotificationPrefs>({ ...DEFAULTS })
  const loading = ref(false)
  const supported = ref(false)

  function checkSupport() {
    supported.value = 'Notification' in window && 'serviceWorker' in navigator
    if (supported.value) {
      permission.value = Notification.permission
    }
  }

  async function init(_uid: string | null) {
    checkSupport()
    if (!_uid) {
      Object.assign(prefs, DEFAULTS)
      fcmToken.value = null
      return
    }
    try {
      const data = await api.get('/notification-prefs')
      Object.assign(prefs, { ...DEFAULTS, ...data })
    } catch (e) {
      Object.assign(prefs, DEFAULTS)
    }
  }

  async function requestPermission(): Promise<boolean> {
    if (!supported.value) return false
    loading.value = true
    try {
      const result = await Notification.requestPermission()
      permission.value = result
      return result === 'granted'
    } finally {
      loading.value = false
    }
  }

  async function updatePrefs(patch: Partial<NotificationPrefs>) {
    Object.assign(prefs, patch)
    try {
      await api.post('/notification-prefs', { ...prefs })
    } catch (e) {
      console.error('updatePrefs', e)
    }
  }

  function showLocal(title: string, body: string, tag: string) {
    if (permission.value !== 'granted') return
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification(title, {
          body,
          icon: '/favicon.ico',
          badge: '/favicon.ico',
          tag,
          requireInteraction: false,
        })
      })
    } else {
      new Notification(title, { body, icon: '/favicon.ico', tag })
    }
  }

  return {
    permission,
    fcmToken,
    prefs,
    loading,
    supported,
    init,
    requestPermission,
    updatePrefs,
    showLocal,
  }
})
