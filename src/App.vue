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

        <p class="login-desc">Sign in to access your farm — or create a new one.</p>

        <button class="login-btn" @click="signIn">
          Log in
        </button>

        <p class="auth-footnote">Your account is handled securely. No password needed.</p>
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
import { useFeedStockStore } from './stores/feedStock'
import { useActivityLogStore } from './stores/activityLog'
import { useNotificationStore } from './stores/notifications'
import { useNotificationScheduler } from './composables/useNotificationScheduler'
import BottomNav from './components/BottomNav.vue'

const authStore = useAuthStore()
const feedStockStore = useFeedStockStore()
const activityLogStore = useActivityLogStore()
const notificationStore = useNotificationStore()
const { runChecks } = useNotificationScheduler()
const batchStore = useBatchStore()
const eggStore = useEggStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const weightStore = useWeightStore()
const environmentStore = useEnvironmentStore()
const healthStore = useHealthStore()
const settingsStore = useSettingsStore()

const loadingMsgs = ['Loading farm…', 'Checking account…', 'Syncing data…']
const loadingText = ref(loadingMsgs[0])
let msgIdx = 0

async function initStores(uid: string | null) {
  await Promise.all([
    batchStore.init(uid),
    eggStore.init(uid),
    expenseStore.init(uid),
    revenueStore.init(uid),
    mortalityStore.init(uid),
    weightStore.init(uid),
    environmentStore.init(uid),
    healthStore.init(uid),
    settingsStore.init(uid),
    feedStockStore.init(uid),
    activityLogStore.init(uid),
    notificationStore.init(uid),
  ])
  if (uid) {
    setTimeout(() => runChecks(), 3000)
  }
}

onMounted(async () => {
  const ticker = setInterval(() => {
    msgIdx = (msgIdx + 1) % loadingMsgs.length
    loadingText.value = loadingMsgs[msgIdx]
  }, 900)

  await authStore.loadUser()
  clearInterval(ticker)
  await initStores(authStore.uid)
})

function signIn() {
  authStore.signIn()
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

/* Login button */
.login-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 11px;
  padding: 15px 20px; background: #fff; color: #1a1a1a;
  border: none; border-radius: 16px; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all .2s; font-family: inherit;
  box-shadow: 0 4px 20px rgba(0,0,0,0.35); letter-spacing: -0.1px;
}
.login-btn:hover { background: #f2f6ff; box-shadow: 0 6px 28px rgba(66,133,244,0.3); transform: translateY(-1px); }
.login-btn:active { transform: scale(0.97) translateY(0); }

.auth-footnote { font-size: 11px; color: rgba(255,255,255,0.22); margin: 16px 0 0; line-height: 1.6; }

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
