<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Settings</div>
      <div class="page-subtitle">Preferences & reference guide</div>
    </div>

    <div class="section">
      <!-- Currency -->
      <div class="settings-section">
        <div class="settings-label">💱 Currency</div>
        <div class="card card-sm">
          <div class="form-row" style="margin-bottom:0">
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Currency</label>
              <select v-model="currency" class="form-select" @change="onCurrencyChange">
                <option value="ZiG">ZiG — Zimbabwe Gold (ZiG)</option>
                <option value="USD">USD — US Dollar ($)</option>
                <option value="EUR">EUR — Euro (€)</option>
                <option value="GBP">GBP — British Pound (£)</option>
                <option value="KES">KES — Kenyan Shilling (KSh)</option>
                <option value="NGN">NGN — Nigerian Naira (₦)</option>
                <option value="ZAR">ZAR — South African Rand (R)</option>
                <option value="GHS">GHS — Ghanaian Cedi (GH₵)</option>
                <option value="UGX">UGX — Ugandan Shilling (USh)</option>
                <option value="TZS">TZS — Tanzanian Shilling (TSh)</option>
                <option value="INR">INR — Indian Rupee (₹)</option>
                <option value="PHP">PHP — Philippine Peso (₱)</option>
                <option value="BDT">BDT — Bangladeshi Taka (৳)</option>
                <option value="BRL">BRL — Brazilian Real (R$)</option>
                <option value="MXN">MXN — Mexican Peso ($)</option>
                <option value="IDR">IDR — Indonesian Rupiah (Rp)</option>
                <option value="CNY">CNY — Chinese Yuan (¥)</option>
                <option value="Custom">Custom…</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Symbol</label>
              <input v-model="symbol" class="form-input" placeholder="$" maxlength="4" @blur="saveSettings" />
            </div>
          </div>
        </div>
      </div>

      <!-- Units -->
      <div class="settings-section">
        <div class="settings-label">📏 Units</div>
        <div class="card card-sm">
          <div class="form-row" style="margin-bottom:0">
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Weight</label>
              <div class="toggle-row">
                <button class="tgl-btn" :class="{ active: settings.weightUnit === 'kg' }" @click="setWeight('kg')">kg</button>
                <button class="tgl-btn" :class="{ active: settings.weightUnit === 'lb' }" @click="setWeight('lb')">lb</button>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Temperature</label>
              <div class="toggle-row">
                <button class="tgl-btn" :class="{ active: settings.temperatureUnit === 'C' }" @click="setTemp('C')">°C</button>
                <button class="tgl-btn" :class="{ active: settings.temperatureUnit === 'F' }" @click="setTemp('F')">°F</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Reference guide -->
      <div class="settings-section">
        <div class="settings-label">📖 Optimal Conditions Guide</div>
        <div class="ref-card card">
          <div class="ref-mode-head egg-head">🥚 Egg Layers</div>
          <div class="ref-rows">
            <div class="ref-row"><span>Temperature</span><span>18–27°C (64–80°F)</span></div>
            <div class="ref-row"><span>Humidity</span><span>50–70%</span></div>
            <div class="ref-row"><span>Light hours/day</span><span>16–17 hrs</span></div>
            <div class="ref-row"><span>Max ammonia</span><span>&lt; 10 ppm</span></div>
            <div class="ref-row"><span>Target mortality</span><span>&lt; 5%</span></div>
            <div class="ref-row"><span>Stocking density</span><span>7–10 birds/m²</span></div>
          </div>
        </div>
        <div class="ref-card card mt-2">
          <div class="ref-mode-head meat-head">🍗 Broilers</div>
          <div class="ref-rows">
            <div class="ref-row"><span>Week 1 temperature</span><span>32–35°C</span></div>
            <div class="ref-row"><span>Week 3+ temperature</span><span>24–28°C</span></div>
            <div class="ref-row"><span>Humidity</span><span>50–65%</span></div>
            <div class="ref-row"><span>Target FCR</span><span>1.6–1.9</span></div>
            <div class="ref-row"><span>Harvest age</span><span>6–8 weeks</span></div>
            <div class="ref-row"><span>Target weight</span><span>2.0–2.8 kg</span></div>
          </div>
        </div>
        <div class="ref-card card mt-2">
          <div class="ref-mode-head" style="color:var(--text2)">📊 Key Formulas</div>
          <div class="ref-rows">
            <div class="ref-row"><span>FCR</span><span>Feed kg ÷ Weight gain kg</span></div>
            <div class="ref-row"><span>Mortality rate</span><span>Deaths ÷ Initial count × 100</span></div>
            <div class="ref-row"><span>Production rate</span><span>Eggs ÷ (Hens × Days) × 100</span></div>
            <div class="ref-row"><span>Profit/bird</span><span>(Revenue − Expenses) ÷ Birds</span></div>
          </div>
        </div>
      </div>

      <!-- Data management -->
      <div class="settings-section">
        <div class="settings-label">🗄️ Data Management</div>
        <div class="card card-sm">
          <button class="data-action-btn" @click="exportData">
            <div class="da-icon" style="background:var(--blue-dim)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-bold">Export All Data</div>
              <div class="text-xs text-muted">Download JSON backup</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div class="divider"></div>
          <button class="data-action-btn" @click="showImport = !showImport">
            <div class="da-icon" style="background:var(--green-dim)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-bold">Import Data</div>
              <div class="text-xs text-muted">Restore from backup</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div v-if="showImport" class="mt-2">
            <textarea v-model="importJson" class="form-textarea" placeholder="Paste exported JSON here…"></textarea>
            <button class="btn btn-primary btn-full mt-2" @click="importData" :disabled="!importJson || importing">
              {{ importing ? 'Importing…' : 'Import & Reload' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Danger zone -->
      <div class="settings-section">
        <div class="settings-label" style="color:var(--red2)">⚠️ Danger Zone</div>
        <button class="btn btn-danger btn-full" style="height:48px" @click="clearAll" :disabled="clearing">
          {{ clearing ? 'Clearing…' : '🗑️ Clear All Farm Data' }}
        </button>
        <div class="text-xs text-dim mt-2" style="text-align:center">Permanently deletes all batches, expenses & logs</div>
      </div>

      <!-- Account -->
      <div class="settings-section">
        <div class="settings-label">👤 Account</div>
        <div class="card card-sm">
          <div class="account-row" v-if="user">
            <div class="account-avatar">{{ user.displayName?.[0] || '?' }}</div>
            <div class="account-info">
              <div class="text-sm font-bold">{{ user.displayName || 'Unknown' }}</div>
              <div class="text-xs text-muted">{{ user.email }}</div>
            </div>
          </div>
          <div class="divider" v-if="user"></div>
          <button class="data-action-btn" @click="signOut">
            <div class="da-icon" style="background:var(--red-dim)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red2)" stroke-width="2.2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-bold" style="color:var(--red2)">Sign Out</div>
              <div class="text-xs text-muted">Your data stays in the cloud</div>
            </div>
          </button>
        </div>
      </div>

      <!-- App info -->
      <div class="app-info card">
        <div style="font-size:44px;margin-bottom:12px">🐔</div>
        <div class="font-heavy" style="font-size:18px;letter-spacing:-.3px">Vue Chicken</div>
        <div class="text-xs text-muted mt-1">v2.0.0 · Cloud Farm Manager</div>
        <div class="text-xs text-muted mt-1">Track eggs · meat · costs · profits</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { useAuthStore } from '@/stores/auth'
import { useBatchStore } from '@/stores/batches'
import { useEggStore } from '@/stores/eggs'
import { useExpenseStore } from '@/stores/expenses'
import { useRevenueStore } from '@/stores/revenue'
import { useMortalityStore } from '@/stores/mortality'
import { useWeightStore } from '@/stores/weights'
import { useEnvironmentStore } from '@/stores/environment'
import { useHealthStore } from '@/stores/health'

const settingsStore = useSettingsStore()
const { settings, update } = settingsStore
const authStore = useAuthStore()
const user = authStore.user

const batchStore = useBatchStore()
const eggStore = useEggStore()
const expenseStore = useExpenseStore()
const revenueStore = useRevenueStore()
const mortalityStore = useMortalityStore()
const weightStore = useWeightStore()
const environmentStore = useEnvironmentStore()
const healthStore = useHealthStore()

const sym: Record<string,string> = { ZiG:'ZiG',USD:'$',EUR:'€',GBP:'£',KES:'KSh',NGN:'₦',ZAR:'R',GHS:'GH₵',UGX:'USh',TZS:'TSh',INR:'₹',PHP:'₱',BDT:'৳',BRL:'R$',MXN:'$',IDR:'Rp',CNY:'¥' }

const currency = ref(settings.currency)
const symbol = ref(settings.currencySymbol)
const showImport = ref(false)
const importJson = ref('')
const importing = ref(false)
const clearing = ref(false)

function onCurrencyChange() {
  if (currency.value !== 'Custom') symbol.value = sym[currency.value] || currency.value
  saveSettings()
}

function saveSettings() {
  update({ currency: currency.value, currencySymbol: symbol.value })
}

function setWeight(u: 'kg'|'lb') { update({ weightUnit: u }) }
function setTemp(u: 'C'|'F') { update({ temperatureUnit: u }) }

function exportData() {
  const data: Record<string, any> = {
    vc_batches: batchStore.batches,
    vc_eggs: eggStore.collections,
    vc_expenses: expenseStore.expenses,
    vc_revenue: revenueStore.revenues,
    vc_mortality: mortalityStore.records,
    vc_weights: weightStore.records,
    vc_environment: environmentStore.logs,
    vc_health: healthStore.records,
    vc_settings: settings,
  }
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
  a.download = `vue-chicken-${new Date().toISOString().split('T')[0]}.json`
  a.click()
}

async function importData() {
  try {
    importing.value = true
    const data = JSON.parse(importJson.value)
    const adds: Promise<any>[] = []
    if (Array.isArray(data.vc_batches)) data.vc_batches.forEach((b: any) => { const { id, _ts, ...rest } = b; adds.push(batchStore.add(rest)) })
    if (Array.isArray(data.vc_eggs)) data.vc_eggs.forEach((e: any) => { const { id, _ts, ...rest } = e; adds.push(eggStore.add(rest)) })
    if (Array.isArray(data.vc_expenses)) data.vc_expenses.forEach((e: any) => { const { id, _ts, ...rest } = e; adds.push(expenseStore.add(rest)) })
    if (Array.isArray(data.vc_revenue)) data.vc_revenue.forEach((r: any) => { const { id, _ts, ...rest } = r; adds.push(revenueStore.add(rest)) })
    if (Array.isArray(data.vc_mortality)) data.vc_mortality.forEach((m: any) => { const { id, _ts, ...rest } = m; adds.push(mortalityStore.add(rest)) })
    if (Array.isArray(data.vc_weights)) data.vc_weights.forEach((w: any) => { const { id, _ts, ...rest } = w; adds.push(weightStore.add(rest)) })
    if (Array.isArray(data.vc_environment)) data.vc_environment.forEach((l: any) => { const { id, _ts, ...rest } = l; adds.push(environmentStore.add(rest)) })
    if (Array.isArray(data.vc_health)) data.vc_health.forEach((h: any) => { const { id, _ts, ...rest } = h; adds.push(healthStore.add(rest)) })
    await Promise.all(adds)
    showImport.value = false
    importJson.value = ''
    alert('Import complete! Your data is now synced.')
  } catch (e) {
    alert('Invalid JSON data.')
  } finally {
    importing.value = false
  }
}

async function clearAll() {
  if (!confirm('Delete ALL farm data permanently? This cannot be undone.')) return
  clearing.value = true
  try {
    const removes: Promise<any>[] = []
    batchStore.batches.forEach(b => removes.push(batchStore.remove(b.id)))
    eggStore.collections.forEach(e => removes.push(eggStore.remove(e.id)))
    expenseStore.expenses.forEach(e => removes.push(expenseStore.remove(e.id)))
    revenueStore.revenues.forEach(r => removes.push(revenueStore.remove(r.id)))
    mortalityStore.records.forEach(m => removes.push(mortalityStore.remove(m.id)))
    weightStore.records.forEach(w => removes.push(weightStore.remove(w.id)))
    environmentStore.logs.forEach(l => removes.push(environmentStore.remove(l.id)))
    healthStore.records.forEach(h => removes.push(healthStore.remove(h.id)))
    await Promise.all(removes)
  } finally {
    clearing.value = false
  }
}

async function signOut() {
  await authStore.signOut()
}
</script>

<style scoped>
.settings-section { margin-bottom: 20px; }
.settings-label { font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px;padding-left:4px; }

.toggle-row { display:flex;background:var(--surface);border-radius:11px;padding:3px;gap:3px;border:1px solid var(--border); }
.tgl-btn { flex:1;padding:9px;border-radius:9px;border:none;background:transparent;color:var(--text3);font-size:14px;font-weight:700;cursor:pointer;transition:all .15s; }
.tgl-btn.active { background:var(--card2);color:var(--amber);box-shadow:0 2px 8px rgba(0,0,0,.3); }

.ref-card { padding:0;overflow:hidden; }
.ref-mode-head { padding:12px 14px 10px;font-size:13px;font-weight:800;border-bottom:1px solid var(--border); }
.egg-head { color:var(--egg2); }
.meat-head { color:var(--meat2); }
.ref-rows { padding:4px 0; }
.ref-row { display:flex;justify-content:space-between;padding:9px 14px;border-bottom:1px solid rgba(255,255,255,.03);font-size:13px; }
.ref-row:last-child { border-bottom:none; }
.ref-row span:first-child { color:var(--text2); }
.ref-row span:last-child { font-weight:700;color:var(--text); }

.data-action-btn { display:flex;align-items:center;gap:12px;width:100%;background:none;border:none;cursor:pointer;padding:10px 0;-webkit-tap-highlight-color:transparent; }
.da-icon { width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--text2); }

.account-row { display:flex;align-items:center;gap:12px;padding:10px 0; }
.account-avatar { width:38px;height:38px;border-radius:50%;background:var(--amber);color:#000;font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
.account-info { flex:1;min-width:0; }

.app-info { text-align:center;padding:28px 20px; }
</style>
