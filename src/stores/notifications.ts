import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export interface NotificationPrefs {
  eggReminderEnabled: boolean
  eggReminderHour: number
  healthAlertEnabled: boolean
  healthAlertDaysAhead: number
  mortalityAlertEnabled: boolean
  mortalityAlertThreshold: number
}

const DEFAULTS: NotificationPrefs = {
  eggReminderEnabled: false,
  eggReminderHour: 18,
  healthAlertEnabled: false,
  healthAlertDaysAhead: 1,
  mortalityAlertEnabled: false,
  mortalityAlertThreshold: 3,
}

export const useNotificationStore = defineStore('notifications', () => {
  const permission = ref<NotificationPermission>('default')
  const fcmToken = ref<string | null>(null)
  const prefs = reactive<NotificationPrefs>({ ...DEFAULTS })
  const loading = ref(false)
  const supported = ref(false)

  let uid: string | null = null
  let unsubscribe: (() => void) | null = null

  function checkSupport() {
    supported.value = 'Notification' in window && 'serviceWorker' in navigator
    if (supported.value) {
      permission.value = Notification.permission
    }
  }

  function init(userId: string | null) {
    if (unsubscribe) { unsubscribe(); unsubscribe = null }
    uid = userId
    checkSupport()
    if (!uid) {
      Object.assign(prefs, DEFAULTS)
      fcmToken.value = null
      return
    }
    unsubscribe = onSnapshot(doc(db, 'users', uid, 'meta', 'notificationPrefs'), snap => {
      if (snap.exists()) {
        Object.assign(prefs, { ...DEFAULTS, ...snap.data() as NotificationPrefs })
      } else {
        Object.assign(prefs, DEFAULTS)
      }
    })
  }

  async function requestPermission(): Promise<boolean> {
    if (!supported.value) return false
    loading.value = true
    try {
      const result = await Notification.requestPermission()
      permission.value = result
      if (result === 'granted') {
        await registerFCM()
        return true
      }
      return false
    } finally {
      loading.value = false
    }
  }

  async function registerFCM() {
    try {
      const { getMessaging, getToken } = await import('firebase/messaging')
      const messaging = getMessaging()
      const swReg = await navigator.serviceWorker.ready
      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined
      const token = await getToken(messaging, {
        serviceWorkerRegistration: swReg,
        ...(vapidKey ? { vapidKey } : {}),
      })
      fcmToken.value = token
      if (uid && token) {
        await setDoc(
          doc(db, 'users', uid, 'meta', 'fcmTokens'),
          { token, updatedAt: Date.now() },
          { merge: true }
        )
      }
    } catch (e) {
      console.warn('[FCM] Could not get token:', e)
    }
  }

  async function updatePrefs(patch: Partial<NotificationPrefs>) {
    Object.assign(prefs, patch)
    if (uid) {
      await setDoc(doc(db, 'users', uid, 'meta', 'notificationPrefs'), { ...prefs })
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
    registerFCM,
  }
})
