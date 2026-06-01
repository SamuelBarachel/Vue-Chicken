<template>
  <div id="app-root">
    <!-- Auth loading -->
    <div v-if="!authStore.ready" class="auth-loading">
      <div class="auth-loading-icon">🐔</div>
    </div>

    <!-- Login screen -->
    <div v-else-if="!authStore.uid" class="login-screen">
      <div class="login-card">
        <div class="login-icon">🐔</div>
        <div class="login-title">Vue Chicken</div>
        <div class="login-subtitle">Poultry farm manager</div>
        <div class="login-desc">Sign in to sync your farm data across all your devices.</div>
        <button class="login-google-btn" @click="signIn" :disabled="signingIn">
          <svg v-if="!signingIn" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span v-if="signingIn" class="login-spinner"></span>
          {{ signingIn ? 'Signing in…' : 'Continue with Google' }}
        </button>
        <div v-if="loginError" class="login-error">{{ loginError }}</div>
      </div>
    </div>

    <!-- App -->
    <template v-else>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      <BottomNav />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useAuthStore } from './stores/auth'
import { useBatchStore } from './stores/batches'
import { useEggStore } from './stores/eggs'
import { useExpenseStore } from './stores/expenses'
import { useRevenueStore } from './stores/revenue'
import { useMortalityStore } from './stores/mortality'
import { useWeightStore } from './stores/weights'
import { useEnvironmentStore } from './stores/environment'
import { useHealthStore } from './stores/health'
import { useSettingsStore } from './stores/settings'
import BottomNav from './components/BottomNav.vue'

const authStore = useAuthStore()
const batchStore = useBatchStore()
const eggStore = useEggStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const weightStore = useWeightStore()
const environmentStore = useEnvironmentStore()
const healthStore = useHealthStore()
const settingsStore = useSettingsStore()

const signingIn = ref(false)
const loginError = ref('')

function initStores(uid: string | null) {
  batchStore.init(uid)
  eggStore.init(uid)
  expenseStore.init(uid)
  revenueStore.init(uid)
  mortalityStore.init(uid)
  weightStore.init(uid)
  environmentStore.init(uid)
  healthStore.init(uid)
  settingsStore.init(uid)
}

onMounted(() => {
  onAuthStateChanged(auth, user => {
    authStore.setUser(user)
    initStores(user?.uid ?? null)
  })
})

async function signIn() {
  signingIn.value = true
  loginError.value = ''
  try {
    await authStore.signInWithGoogle()
  } catch (e: any) {
    loginError.value = e?.message?.includes('popup-closed') ? 'Sign-in cancelled.' : 'Sign-in failed. Please try again.'
  } finally {
    signingIn.value = false
  }
}
</script>

<style>
#app-root {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  background: var(--bg);
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
}

@media (min-width: 480px) {
  #app-root {
    box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 0 1px var(--border);
  }
  body { background: #030710; }
}

@media (min-width: 768px) {
  #app-root { max-width: 420px; }
}

/* Auth loading */
.auth-loading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-loading-icon {
  font-size: 48px;
  animation: pulse-icon 1.4s ease-in-out infinite;
}
@keyframes pulse-icon {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.88); }
}

/* Login screen */
.login-screen {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.login-card {
  width: 100%;
  text-align: center;
  padding: 36px 24px 32px;
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 24px;
}
.login-icon { font-size: 52px; margin-bottom: 14px; }
.login-title { font-size: 22px; font-weight: 700; letter-spacing: -0.4px; color: var(--text); }
.login-subtitle { font-size: 12px; font-weight: 600; color: var(--amber); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
.login-desc { font-size: 13px; color: var(--text2); line-height: 1.5; margin: 14px 0 24px; }

.login-google-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  background: #fff;
  color: #1f1f1f;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s;
  font-family: inherit;
}
.login-google-btn:hover { background: #f5f5f5; }
.login-google-btn:active { transform: scale(0.97); }
.login-google-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.login-spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(0,0,0,0.15);
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

.login-error {
  margin-top: 12px;
  font-size: 12px;
  color: var(--red2);
}

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
