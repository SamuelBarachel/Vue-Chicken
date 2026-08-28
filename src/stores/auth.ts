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

  async function loadUser(): Promise<void> {
    try {
      const res = await fetch('/api/auth/user')
      const data = await res.json()
      if (data) {
        user.value = {
          id: data.id,
          username: data.username,
          email: data.email || undefined,
          profileImage: data.profileImage || undefined,
        }
        uid.value = data.id
      } else {
        user.value = null
        uid.value = null
      }
    } catch (e) {
      console.error('Failed to load user:', e)
      user.value = null
      uid.value = null
    } finally {
      ready.value = true
    }
  }

  function signIn() {
    // Redirect to backend OIDC login flow
    window.location.href = '/api/auth/login'
  }

  async function signOut() {
    try {
      await fetch('/api/auth/logout')
    } catch (e) {
      console.error('Logout error:', e)
    } finally {
      user.value = null
      uid.value = null
      window.location.href = '/'
    }
  }

  return { user, uid, ready, redirectError, loadUser, signIn, signOut }
})
