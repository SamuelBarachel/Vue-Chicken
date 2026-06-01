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
        <div class="login-top-bar"></div>

        <div class="login-logo-area">
          <div class="login-icon">🐔</div>
          <div class="login-title">Vue Chicken</div>
          <div class="login-subtitle">Poultry farm manager</div>
        </div>

        <p class="login-desc">Sign in to access your farm records and track performance.</p>

        <button class="login-btn" @click="signIn">
          Log in to your farm
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
  position: relative;
}
@media (min-width: 520px) {
  #app-root {
    max-width: 460px;
    margin: 0 auto;
    box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 0 1px var(--border);
  }
  body { background: #050810; }
}

/* Loading */
.auth-loading {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px;
  background: var(--bg);
}
.auth-loading-icon {
  font-size: 56px;
  animation: pulse-gem 1.6s ease-in-out infinite;
}
.auth-loading-text {
  font-size: 13px; font-weight: 500;
  color: var(--text2);
  animation: fade-cycle 0.9s ease-in-out;
}
@keyframes pulse-gem {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.88); }
}
@keyframes fade-cycle {
  0% { opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0.6; }
}

/* Login screen */
.login-screen {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: calc(28px + var(--safe-top)) 20px calc(28px + var(--safe-bottom));
  background: linear-gradient(160deg, #162040 0%, var(--bg) 65%);
}

/* Card */
.login-card {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  padding: 0 26px 32px;
  text-align: center;
}

/* Top stripe — multi-color formal gradient */
.login-top-bar {
  height: 4px; margin: 0 -26px 32px;
  background: linear-gradient(90deg, #3B5BDB 0%, #5C7CFA 30%, #0D9488 60%, #D4A427 100%);
}

/* Logo */
.login-logo-area { margin-bottom: 20px; }
.login-icon {
  font-size: 60px; display: block; margin-bottom: 14px;
  filter: drop-shadow(0 0 24px rgba(92,124,250,0.40));
}
.login-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 28px; font-weight: 900; letter-spacing: -0.4px;
  color: var(--text);
}
.login-subtitle {
  font-size: 11px; font-weight: 600; letter-spacing: 1.4px; text-transform: uppercase; margin-top: 5px;
  color: var(--amber2);
}

.login-desc {
  font-size: 13px; color: var(--text2); line-height: 1.55; margin: 0 0 22px;
}

/* Login button */
.login-btn {
  width: 100%; display: flex; align-items: center; justify-content: center;
  padding: 15px 20px;
  background: var(--amber);
  color: #fff;
  border: none; border-radius: 16px; font-size: 15px; font-weight: 600;
  cursor: pointer; transition: all .18s;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 6px 24px var(--amber-glow);
}
.login-btn:hover { background: #2D47B8; }
.login-btn:active { transform: scale(0.97); }

.auth-footnote { font-size: 11px; color: var(--text3); margin: 16px 0 0; line-height: 1.6; }

/* Page transitions */
.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
