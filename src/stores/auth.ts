import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup, signOut as fbSignOut } from 'firebase/auth'
import { auth } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const uid = ref<string | null>(null)
  const ready = ref(false)

  function setUser(u: User | null) {
    user.value = u
    uid.value = u?.uid ?? null
    ready.value = true
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  async function signOut() {
    await fbSignOut(auth)
  }

  return { user, uid, ready, setUser, signInWithGoogle, signOut }
})
