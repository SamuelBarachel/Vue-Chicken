<template>
  <div id="app-root">
    <!-- Auth loading -->
    <div v-if="!authStore.ready" class="auth-loading">
      <div class="auth-loading-icon">🐔</div>
    </div>

    <!-- Login screen -->
    <div v-else-if="!authStore.uid" class="login-screen">
      <div v-if="authMode === 'reset'" class="login-card">
        <!-- Reset password -->
        <button class="reset-back" @click="authMode = 'signin'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <div class="reset-icon">🔑</div>
        <div class="reset-title">Reset Password</div>
        <div class="reset-desc">Enter your email and we'll send you a reset link right away.</div>
        <input v-model="email" class="auth-input" type="email" placeholder="Email address" autocomplete="email" @keydown.enter="sendReset" />
        <button class="auth-btn-gold" @click="sendReset" :disabled="busy || !email">
          <span v-if="busy" class="auth-spinner gold-spin"></span>
          {{ busy ? 'Sending…' : 'Send Reset Link' }}
        </button>
        <div v-if="errorMsg" class="auth-msg auth-error">{{ errorMsg }}</div>
        <div v-if="successMsg" class="auth-msg auth-success">{{ successMsg }}</div>
      </div>

      <div v-else class="login-card">
        <!-- Gemini gradient bar -->
        <div class="gem-bar"></div>

        <div class="login-logo-area">
          <div class="login-icon">🐔</div>
          <div class="login-title">Vue Chicken</div>
          <div class="login-subtitle">Poultry farm manager</div>
        </div>

        <!-- Google first (primary) -->
        <button class="google-btn" @click="signInGoogle" :disabled="busy">
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span v-if="busy && googleBusy" class="auth-spinner dark-spin"></span>
          <span v-else>Continue with Google</span>
        </button>

        <div class="auth-divider"><span>or sign in with email</span></div>

        <!-- Email/password -->
        <div class="email-form">
          <input v-model="email" class="auth-input" type="email" placeholder="Email address" autocomplete="email" />
          <div class="password-wrap">
            <input v-model="password" class="auth-input" :type="showPw ? 'text' : 'password'" placeholder="Password" autocomplete="current-password" @keydown.enter="signInEmail" />
            <button class="pw-toggle" @click="showPw = !showPw" type="button" tabindex="-1">{{ showPw ? '🙈' : '👁️' }}</button>
          </div>
          <button class="auth-btn-gold" @click="signInEmail" :disabled="busy || !email || !password">
            <span v-if="busy && !googleBusy" class="auth-spinner gold-spin"></span>
            {{ (busy && !googleBusy) ? 'Signing in…' : 'Sign In' }}
          </button>
          <button class="forgot-link" @click="authMode = 'reset'" type="button">Forgot password?</button>
        </div>

        <div v-if="errorMsg" class="auth-msg auth-error">{{ errorMsg }}</div>
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

const authMode = ref<'signin' | 'reset'>('signin')
const email = ref('')
const password = ref('')
const showPw = ref(false)
const busy = ref(false)
const googleBusy = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

function parseError(e: any): string {
  const c = e?.code || ''
  if (c === 'auth/user-not-found' || c === 'auth/wrong-password' || c === 'auth/invalid-credential') return 'Incorrect email or password.'
  if (c === 'auth/invalid-email') return 'Please enter a valid email address.'
  if (c === 'auth/too-many-requests') return 'Too many attempts. Please wait and try again.'
  if (c === 'auth/popup-closed-by-user') return ''
  if (c === 'auth/network-request-failed') return 'Network error. Check your connection.'
  return e?.message || 'Something went wrong. Please try again.'
}

async function signInGoogle() {
  busy.value = true; googleBusy.value = true; errorMsg.value = ''
  try { await authStore.signInWithGoogle() }
  catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false; googleBusy.value = false }
}

async function signInEmail() {
  if (!email.value || !password.value) return
  busy.value = true; errorMsg.value = ''
  try { await authStore.signInWithEmail(email.value, password.value) }
  catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false }
}

async function sendReset() {
  if (!email.value) return
  busy.value = true; errorMsg.value = ''; successMsg.value = ''
  try {
    await authStore.resetPassword(email.value)
    successMsg.value = '✅ Reset link sent! Check your inbox.'
  } catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false }
}

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

/* ── Loading ── */
.auth-loading { flex: 1; display: flex; align-items: center; justify-content: center; }
.auth-loading-icon {
  font-size: 52px;
  animation: pulse-gem 1.6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(66,133,244,0.5));
}
@keyframes pulse-gem {
  0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 20px rgba(66,133,244,0.4)); }
  50% { opacity: 0.7; transform: scale(0.86); filter: drop-shadow(0 0 8px rgba(124,58,237,0.3)); }
}

/* ── Login screen ── */
.login-screen {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: radial-gradient(ellipse 120% 80% at 50% 0%, rgba(66,133,244,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 80% 60% at 80% 100%, rgba(124,58,237,0.10) 0%, transparent 60%);
}

.login-card {
  width: 100%;
  background: rgba(13,17,30,0.95);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(66,133,244,0.15);
  padding: 0 22px 28px;
}

/* Gemini gradient bar */
.gem-bar {
  height: 4px;
  background: linear-gradient(90deg,
    #4285F4 0%,
    #7C3AED 30%,
    #06B6D4 60%,
    #00C896 80%,
    #F5A623 100%
  );
  margin: 0 -22px 28px;
}

/* Logo area */
.login-logo-area { text-align: center; margin-bottom: 24px; }
.login-icon {
  font-size: 52px;
  display: block;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 18px rgba(66,133,244,0.45)) drop-shadow(0 0 6px rgba(124,58,237,0.3));
}
.login-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #fff 0%, #a8d4ff 50%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.login-subtitle {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  background: linear-gradient(90deg, #F5A623, #00C896);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Google button */
.google-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 18px;
  background: #fff;
  color: #1f1f1f;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all .18s;
  font-family: inherit;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
}
.google-btn:hover { background: #f0f4ff; box-shadow: 0 4px 20px rgba(66,133,244,0.25); }
.google-btn:active { transform: scale(0.97); }
.google-btn:disabled { opacity: 0.55; cursor: not-allowed; }

/* Divider */
.auth-divider { display: flex; align-items: center; gap: 10px; margin: 16px 0; }
.auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
.auth-divider span { font-size: 11px; color: rgba(255,255,255,0.3); font-weight: 600; white-space: nowrap; }

/* Email form */
.email-form { display: flex; flex-direction: column; gap: 10px; }

.auth-input {
  width: 100%;
  padding: 13px 14px;
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 13px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: border-color .18s, background .18s;
}
.auth-input:focus {
  border-color: #4285F4;
  background: rgba(66,133,244,0.06);
}
.auth-input::placeholder { color: rgba(255,255,255,0.28); }

.password-wrap { position: relative; }
.password-wrap .auth-input { padding-right: 46px; }
.pw-toggle {
  position: absolute; right: 13px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; font-size: 15px; padding: 4px; line-height: 1;
}

/* Gold sign-in button */
.auth-btn-gold {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: linear-gradient(135deg, #F5A623 0%, #E8960A 100%);
  color: #000;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: all .18s;
  font-family: inherit;
  box-shadow: 0 4px 20px rgba(245,166,35,0.35);
  letter-spacing: 0.2px;
}
.auth-btn-gold:hover { box-shadow: 0 6px 28px rgba(245,166,35,0.5); transform: translateY(-1px); }
.auth-btn-gold:active { transform: scale(0.97) translateY(0); }
.auth-btn-gold:disabled { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none; }

.auth-spinner {
  width: 15px; height: 15px;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
.gold-spin { border: 2px solid rgba(0,0,0,0.15); border-top-color: #000; }
.dark-spin { border: 2px solid rgba(30,30,30,0.2); border-top-color: #333; }
@keyframes spin { to { transform: rotate(360deg); } }

.forgot-link {
  background: none; border: none; cursor: pointer;
  font-size: 12px; font-weight: 600; font-family: inherit;
  color: rgba(255,255,255,0.35);
  text-align: center; padding: 4px;
  transition: color .15s;
}
.forgot-link:hover { color: #4285F4; }

/* Reset password view */
.reset-back {
  display: flex; align-items: center; gap: 6px;
  background: none; border: none; cursor: pointer; font-family: inherit;
  color: rgba(255,255,255,0.4); font-size: 13px; font-weight: 600;
  padding: 0; margin-bottom: 24px;
  transition: color .15s;
}
.reset-back:hover { color: #4285F4; }
.reset-icon { font-size: 42px; text-align: center; display: block; margin-bottom: 10px; }
.reset-title { font-size: 20px; font-weight: 800; color: #fff; text-align: center; margin-bottom: 6px; }
.reset-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.55; text-align: center; margin-bottom: 20px; }

/* Messages */
.auth-msg {
  margin-top: 12px;
  padding: 11px 14px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}
.auth-error { background: rgba(255,64,96,0.12); color: #FF6B6B; border: 1px solid rgba(255,64,96,0.2); }
.auth-success { background: rgba(0,200,150,0.12); color: #00C896; border: 1px solid rgba(0,200,150,0.2); }

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
