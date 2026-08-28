import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

export interface AuthUser {
  id: string
  username: string
  email?: string
  profileImage?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const uid = ref<string | null>(null)
  const ready = ref(false)
  const redirectError = ref('')

  function loadUser(): Promise<void> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (fbUser: User | null) => {
        if (fbUser) {
          user.value = {
            id: fbUser.uid,
            username: fbUser.displayName || fbUser.email || fbUser.uid,
            email: fbUser.email || undefined,
            profileImage: fbUser.photoURL || undefined,
          }
          uid.value = fbUser.uid
        } else {
          user.value = null
          uid.value = null
        }
        ready.value = true
        resolve()
      })
    })
  }

  async function signIn() {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    }
  }

  async function signOut() {
    await fbSignOut(auth)
    user.value = null
    uid.value = null
  }

  return { user, uid, ready, redirectError, loadUser, signIn, signOut }
})
