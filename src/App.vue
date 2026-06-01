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

        <!-- Mode tabs -->
        <div class="auth-tabs" v-if="authMode !== 'reset'">
          <button class="auth-tab" :class="{ active: authMode === 'signin' }" @click="switchMode('signin')">Sign In</button>
          <button class="auth-tab" :class="{ active: authMode === 'register' }" @click="switchMode('register')">Create Account</button>
        </div>

        <!-- SIGN IN -->
        <div v-if="authMode === 'signin'" class="auth-form">
          <input v-model="email" class="auth-input" type="email" placeholder="Email address" autocomplete="email" />
          <div class="password-wrap">
            <input v-model="password" class="auth-input" :type="showPw ? 'text' : 'password'" placeholder="Password" autocomplete="current-password" @keydown.enter="signInEmail" />
            <button class="pw-toggle" @click="showPw = !showPw" type="button">{{ showPw ? '🙈' : '👁️' }}</button>
          </div>
          <button class="auth-btn" @click="signInEmail" :disabled="busy || !email || !password">
            <span v-if="busy" class="auth-spinner"></span>
            {{ busy ? 'Signing in…' : 'Sign In' }}
          </button>
          <button class="forgot-btn" @click="switchMode('reset')">Forgot password?</button>
          <div class="auth-divider"><span>or</span></div>
          <button class="login-google-btn" @click="signInGoogle" :disabled="busy">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <!-- CREATE ACCOUNT -->
        <div v-else-if="authMode === 'register'" class="auth-form">
          <input v-model="name" class="auth-input" type="text" placeholder="Full name" autocomplete="name" />
          <input v-model="email" class="auth-input" type="email" placeholder="Email address" autocomplete="email" />
          <div class="password-wrap">
            <input v-model="password" class="auth-input" :type="showPw ? 'text' : 'password'" placeholder="Password (min 6 chars)" autocomplete="new-password" @keydown.enter="register" />
            <button class="pw-toggle" @click="showPw = !showPw" type="button">{{ showPw ? '🙈' : '👁️' }}</button>
          </div>
          <div class="password-wrap">
            <input v-model="confirmPw" class="auth-input" :type="showPw ? 'text' : 'password'" placeholder="Confirm password" autocomplete="new-password" @keydown.enter="register" />
          </div>
          <button class="auth-btn" @click="register" :disabled="busy || !email || !password || !confirmPw">
            <span v-if="busy" class="auth-spinner"></span>
            {{ busy ? 'Creating account…' : 'Create Account' }}
          </button>
          <div class="auth-divider"><span>or</span></div>
          <button class="login-google-btn" @click="signInGoogle" :disabled="busy">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <!-- RESET PASSWORD -->
        <div v-else-if="authMode === 'reset'" class="auth-form">
          <div class="reset-heading">Reset Password</div>
          <div class="reset-desc">Enter your email and we'll send a reset link.</div>
          <input v-model="email" class="auth-input" type="email" placeholder="Email address" autocomplete="email" @keydown.enter="sendReset" />
          <button class="auth-btn" @click="sendReset" :disabled="busy || !email">
            <span v-if="busy" class="auth-spinner"></span>
            {{ busy ? 'Sending…' : 'Send Reset Link' }}
          </button>
          <button class="forgot-btn" @click="switchMode('signin')">← Back to Sign In</button>
        </div>

        <!-- Error / Success -->
        <div v-if="errorMsg" class="auth-msg auth-error">{{ errorMsg }}</div>
        <div v-if="successMsg" class="auth-msg auth-success">{{ successMsg }}</div>
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
import { ref, onMounted, defineComponent, h } from 'vue'
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

const GoogleIcon = defineComponent({
  render: () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
    h('path', { d: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z', fill: '#4285F4' }),
    h('path', { d: 'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z', fill: '#34A853' }),
    h('path', { d: 'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z', fill: '#FBBC05' }),
    h('path', { d: 'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z', fill: '#EA4335' }),
  ]),
})

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

type AuthMode = 'signin' | 'register' | 'reset'
const authMode = ref<AuthMode>('signin')
const email = ref('')
const password = ref('')
const confirmPw = ref('')
const name = ref('')
const showPw = ref(false)
const busy = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

function switchMode(mode: AuthMode) {
  authMode.value = mode
  errorMsg.value = ''
  successMsg.value = ''
  password.value = ''
  confirmPw.value = ''
  showPw.value = false
}

function parseError(e: any): string {
  const code = e?.code || ''
  if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') return 'Incorrect email or password.'
  if (code === 'auth/email-already-in-use') return 'An account with this email already exists.'
  if (code === 'auth/weak-password') return 'Password must be at least 6 characters.'
  if (code === 'auth/invalid-email') return 'Please enter a valid email address.'
  if (code === 'auth/too-many-requests') return 'Too many attempts. Try again later.'
  if (code === 'auth/popup-closed-by-user') return 'Sign-in cancelled.'
  return e?.message || 'Something went wrong. Please try again.'
}

async function signInGoogle() {
  busy.value = true; errorMsg.value = ''
  try { await authStore.signInWithGoogle() }
  catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false }
}

async function signInEmail() {
  if (!email.value || !password.value) return
  busy.value = true; errorMsg.value = ''
  try { await authStore.signInWithEmail(email.value, password.value) }
  catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false }
}

async function register() {
  if (!email.value || !password.value || !confirmPw.value) return
  if (password.value !== confirmPw.value) { errorMsg.value = 'Passwords do not match.'; return }
  if (password.value.length < 6) { errorMsg.value = 'Password must be at least 6 characters.'; return }
  busy.value = true; errorMsg.value = ''
  try { await authStore.createAccount(email.value, password.value, name.value) }
  catch (e: any) { errorMsg.value = parseError(e) }
  finally { busy.value = false }
}

async function sendReset() {
  if (!email.value) return
  busy.value = true; errorMsg.value = ''; successMsg.value = ''
  try {
    await authStore.resetPassword(email.value)
    successMsg.value = 'Reset link sent! Check your inbox.'
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

/* Loading */
.auth-loading { flex: 1; display: flex; align-items: center; justify-content: center; }
.auth-loading-icon { font-size: 48px; animation: pulse-icon 1.4s ease-in-out infinite; }
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
  padding: 20px;
  overflow-y: auto;
}
.login-card {
  width: 100%;
  text-align: center;
  padding: 32px 22px 28px;
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 24px;
}
.login-icon { font-size: 46px; margin-bottom: 10px; }
.login-title { font-size: 22px; font-weight: 700; letter-spacing: -0.4px; color: var(--text); }
.login-subtitle { font-size: 11px; font-weight: 600; color: var(--amber); text-transform: uppercase; letter-spacing: 1px; margin-top: 3px; margin-bottom: 18px; }

/* Tabs */
.auth-tabs { display: flex; background: var(--surface); border: 1px solid var(--border); border-radius: 13px; padding: 3px; gap: 3px; margin-bottom: 18px; }
.auth-tab { flex: 1; padding: 9px; border-radius: 10px; border: none; background: transparent; color: var(--text3); font-size: 13px; font-weight: 700; cursor: pointer; transition: all .15s; font-family: inherit; }
.auth-tab.active { background: var(--card2); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,.3); }

/* Form */
.auth-form { display: flex; flex-direction: column; gap: 10px; text-align: left; }
.auth-input {
  width: 100%;
  padding: 13px 14px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 13px;
  color: var(--text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: border-color .15s;
}
.auth-input:focus { border-color: var(--amber); }
.auth-input::placeholder { color: var(--text3); }

.password-wrap { position: relative; }
.password-wrap .auth-input { padding-right: 44px; }
.pw-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 16px; padding: 4px; line-height: 1; }

.auth-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px;
  background: var(--amber);
  color: #000;
  border: none;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all .18s;
  font-family: inherit;
  margin-top: 2px;
}
.auth-btn:hover { opacity: 0.9; }
.auth-btn:active { transform: scale(0.97); }
.auth-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.auth-spinner {
  width: 15px; height: 15px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

.forgot-btn { background: none; border: none; color: var(--text3); font-size: 12px; cursor: pointer; font-family: inherit; text-align: center; padding: 4px; transition: color .15s; }
.forgot-btn:hover { color: var(--amber); }

.auth-divider { display: flex; align-items: center; gap: 10px; margin: 2px 0; }
.auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.auth-divider span { font-size: 11px; color: var(--text3); font-weight: 600; }

.login-google-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  background: #fff;
  color: #1f1f1f;
  border: none;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all .18s;
  font-family: inherit;
}
.login-google-btn:hover { background: #f5f5f5; }
.login-google-btn:active { transform: scale(0.97); }
.login-google-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Reset password */
.reset-heading { font-size: 17px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.reset-desc { font-size: 13px; color: var(--text2); line-height: 1.5; margin-bottom: 6px; }

/* Messages */
.auth-msg { margin-top: 10px; padding: 10px 14px; border-radius: 11px; font-size: 13px; font-weight: 600; text-align: left; }
.auth-error { background: var(--red-dim); color: var(--red2); border: 1px solid rgba(255,64,96,.2); }
.auth-success { background: var(--green-dim); color: var(--green2); border: 1px solid rgba(0,200,150,.2); }

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
