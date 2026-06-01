<template>
  <div id="app-root">
    <!-- Auth loading -->
    <div v-if="!authStore.ready" class="auth-loading">
      <div class="auth-loading-icon">🐔</div>
      <div class="auth-loading-text">{{ loadingText }}</div>
    </div>

    <!-- Login screen -->
    <div v-else-if="!authStore.uid" class="login-screen">
      <div class="login-card">
        <div class="gem-bar"></div>

        <div class="login-logo-area">
          <div class="login-icon">🐔</div>
          <div class="login-title">Vue Chicken</div>
          <div class="login-subtitle">Poultry farm manager</div>
        </div>

        <!-- Domain error -->
        <div v-if="authStore.redirectError === 'UNAUTHORIZED_DOMAIN'" class="domain-error">
          <div class="domain-error-title">⚙️ One-time setup required</div>
          <div class="domain-error-body">
            Add this domain to your Firebase Console under<br>
            <strong>Authentication → Settings → Authorized domains:</strong>
          </div>
          <div class="domain-chip" @click="copyDomain">
            <span class="domain-text">{{ currentDomain }}</span>
            <span class="copy-hint">{{ copied ? '✓ Copied' : 'Tap to copy' }}</span>
          </div>
          <div class="domain-steps">
            <a href="https://console.firebase.google.com/project/vue-chicken/authentication/settings" target="_blank" class="firebase-link">Open Firebase Console →</a>
          </div>
        </div>

        <!-- Generic error -->
        <div v-else-if="authStore.redirectError" class="auth-error">
          {{ authStore.redirectError }}
        </div>

        <p class="login-desc">Sign in to access your farm — or create a new one.</p>

        <button class="google-btn" @click="signIn" :disabled="busy">
          <svg v-if="!busy" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span v-if="busy" class="google-spinner"></span>
          {{ busy ? 'Redirecting to Google…' : 'Continue with Google' }}
        </button>

        <p class="auth-footnote">Google handles your account securely. No password needed.</p>
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
import { ref, onMounted, computed } from 'vue'
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

const busy = ref(false)
const copied = ref(false)
const currentDomain = computed(() => window.location.hostname)

const loadingMsgs = ['Loading farm…', 'Checking account…', 'Syncing data…']
const loadingText = ref(loadingMsgs[0])
let msgIdx = 0

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

onMounted(async () => {
  const ticker = setInterval(() => {
    msgIdx = (msgIdx + 1) % loadingMsgs.length
    loadingText.value = loadingMsgs[msgIdx]
  }, 900)

  // Handle any pending Google redirect result first
  await authStore.checkRedirectResult()

  onAuthStateChanged(auth, user => {
    clearInterval(ticker)
    authStore.setUser(user)
    initStores(user?.uid ?? null)
  })
})

async function signIn() {
  busy.value = true
  try {
    await authStore.signInWithGoogle()
    // Page will redirect — button stays disabled
  } catch {
    busy.value = false
  }
}

async function copyDomain() {
  try {
    await navigator.clipboard.writeText(currentDomain.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  } catch {
    prompt('Copy this domain:', currentDomain.value)
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
  #app-root { box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 0 1px var(--border); }
  body { background: #030710; }
}
@media (min-width: 768px) {
  #app-root { max-width: 420px; }
}

/* Loading */
.auth-loading {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px;
}
.auth-loading-icon {
  font-size: 56px;
  animation: pulse-gem 1.6s ease-in-out infinite;
  filter: drop-shadow(0 0 24px rgba(66,133,244,0.5));
}
.auth-loading-text {
  font-size: 13px; font-weight: 600;
  color: rgba(255,255,255,0.3);
  animation: fade-cycle 0.9s ease-in-out;
}
@keyframes pulse-gem {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.65; transform: scale(0.84); }
}
@keyframes fade-cycle {
  0% { opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0.6; }
}

/* Screen */
.login-screen {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 28px 20px;
  background:
    radial-gradient(ellipse 130% 70% at 50% -10%, rgba(66,133,244,0.14) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 90% 110%, rgba(124,58,237,0.10) 0%, transparent 55%);
}

/* Card */
.login-card {
  width: 100%;
  background: rgba(13,17,30,0.97);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(66,133,244,0.12);
  padding: 0 26px 32px;
  text-align: center;
}

/* Gemini stripe */
.gem-bar {
  height: 4px; margin: 0 -26px 32px;
  background: linear-gradient(90deg, #4285F4 0%, #7C3AED 28%, #06B6D4 56%, #00C896 78%, #F5A623 100%);
}

/* Logo */
.login-logo-area { margin-bottom: 20px; }
.login-icon {
  font-size: 56px; display: block; margin-bottom: 14px;
  filter: drop-shadow(0 0 20px rgba(66,133,244,0.5)) drop-shadow(0 0 8px rgba(124,58,237,0.3));
}
.login-title {
  font-size: 26px; font-weight: 800; letter-spacing: -0.6px;
  background: linear-gradient(135deg, #ffffff 0%, #a8d4ff 55%, #c4b5fd 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.login-subtitle {
  font-size: 11px; font-weight: 700; letter-spacing: 1.3px; text-transform: uppercase; margin-top: 5px;
  background: linear-gradient(90deg, #F5A623, #00C896);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.login-desc { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.55; margin: 0 0 20px; }

/* Domain error box */
.domain-error {
  background: rgba(245,166,35,0.08);
  border: 1px solid rgba(245,166,35,0.25);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 18px;
  text-align: left;
}
.domain-error-title { font-size: 13px; font-weight: 800; color: #F5A623; margin-bottom: 8px; }
.domain-error-body { font-size: 12px; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 10px; }
.domain-error-body strong { color: rgba(255,255,255,0.8); }

.domain-chip {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  background: rgba(0,0,0,0.4); border: 1px solid rgba(245,166,35,0.3);
  border-radius: 10px; padding: 10px 12px; cursor: pointer;
  transition: border-color .15s;
}
.domain-chip:hover { border-color: rgba(245,166,35,0.6); }
.domain-text { font-size: 11px; font-weight: 700; color: #F5A623; word-break: break-all; font-family: monospace; }
.copy-hint { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); white-space: nowrap; flex-shrink: 0; }

.domain-steps { margin-top: 10px; text-align: center; }
.firebase-link {
  font-size: 12px; font-weight: 700; color: #4285F4;
  text-decoration: none;
}
.firebase-link:hover { text-decoration: underline; }

/* Generic error */
.auth-error {
  margin-bottom: 16px; padding: 11px 14px;
  background: rgba(255,64,96,0.1); border: 1px solid rgba(255,64,96,0.2);
  border-radius: 12px; font-size: 13px; font-weight: 600; color: #FF6B6B;
}

/* Google button */
.google-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 11px;
  padding: 15px 20px; background: #fff; color: #1a1a1a;
  border: none; border-radius: 16px; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all .2s; font-family: inherit;
  box-shadow: 0 4px 20px rgba(0,0,0,0.35); letter-spacing: -0.1px;
}
.google-btn:hover { background: #f2f6ff; box-shadow: 0 6px 28px rgba(66,133,244,0.3); transform: translateY(-1px); }
.google-btn:active { transform: scale(0.97) translateY(0); }
.google-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.google-spinner {
  width: 18px; height: 18px;
  border: 2.5px solid rgba(30,30,30,0.15); border-top-color: #4285F4;
  border-radius: 50%; animation: spin .7s linear infinite; flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

.auth-footnote { font-size: 11px; color: rgba(255,255,255,0.22); margin: 16px 0 0; line-height: 1.6; }

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
