import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from 'firebase/auth'
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut as fbSignOut,
} from 'firebase/auth'
import { auth } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const uid = ref<string | null>(null)
  const ready = ref(false)
  const redirectError = ref('')

  function setUser(u: User | null) {
    user.value = u
    uid.value = u?.uid ?? null
    ready.value = true
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    await signInWithRedirect(auth, provider)
  }

  async function checkRedirectResult() {
    try {
      await getRedirectResult(auth)
    } catch (e: any) {
      const c = e?.code || ''
      if (c === 'auth/unauthorized-domain') {
        redirectError.value = 'UNAUTHORIZED_DOMAIN'
      } else if (c && c !== 'auth/null-user') {
        redirectError.value = e.message || 'Sign-in failed.'
      }
    }
  }

  async function signOut() {
    await fbSignOut(auth)
  }

  return { user, uid, ready, redirectError, setUser, signInWithGoogle, checkRedirectResult, signOut }
})
