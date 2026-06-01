import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  async function loadUser() {
    try {
      const res = await fetch('/api/auth/user')
      const data = await res.json()
      if (data && data.id) {
        user.value = data
        uid.value = data.id
      } else {
        user.value = null
        uid.value = null
      }
    } catch {
      user.value = null
      uid.value = null
    } finally {
      ready.value = true
    }
  }

  function signIn() {
    window.location.href = '/api/auth/login'
  }

  function signOut() {
    window.location.href = '/api/auth/logout'
  }

  return { user, uid, ready, redirectError, loadUser, signIn, signOut }
})
