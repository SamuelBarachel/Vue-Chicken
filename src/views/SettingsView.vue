<template>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Settings</div>
      <div class="page-subtitle">Preferences & data management</div>
    </div>

    <div class="section">
      <!-- Currency -->
      <div class="settings-group card mb-3">
        <div class="sg-header">💱 Currency</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Currency Code</label>
            <select v-model="currency" class="form-select" @change="saveCurrency">
              <option value="USD">USD — US Dollar</option>
              <option value="EUR">EUR — Euro</option>
              <option value="GBP">GBP — British Pound</option>
              <option value="KES">KES — Kenyan Shilling</option>
              <option value="NGN">NGN — Nigerian Naira</option>
              <option value="ZAR">ZAR — South African Rand</option>
              <option value="GHS">GHS — Ghanaian Cedi</option>
              <option value="UGX">UGX — Ugandan Shilling</option>
              <option value="TZS">TZS — Tanzanian Shilling</option>
              <option value="INR">INR — Indian Rupee</option>
              <option value="PHP">PHP — Philippine Peso</option>
              <option value="BDT">BDT — Bangladeshi Taka</option>
              <option value="BRL">BRL — Brazilian Real</option>
              <option value="MXN">MXN — Mexican Peso</option>
              <option value="COP">COP — Colombian Peso</option>
              <option value="IDR">IDR — Indonesian Rupiah</option>
              <option value="CNY">CNY — Chinese Yuan</option>
              <option value="Custom">Custom…</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Symbol</label>
            <input v-model="symbol" class="form-input" placeholder="$" maxlength="4" @change="saveCurrency" />
          </div>
        </div>
      </div>

      <!-- Units -->
      <div class="settings-group card mb-3">
        <div class="sg-header">📏 Units</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Weight Unit</label>
            <div class="unit-toggle">
              <button class="unit-btn" :class="{ active: weightUnit === 'kg' }" @click="setWeight('kg')">kg</button>
              <button class="unit-btn" :class="{ active: weightUnit === 'lb' }" @click="setWeight('lb')">lb</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Temperature</label>
            <div class="unit-toggle">
              <button class="unit-btn" :class="{ active: tempUnit === 'C' }" @click="setTemp('C')">°C</button>
              <button class="unit-btn" :class="{ active: tempUnit === 'F' }" @click="setTemp('F')">°F</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Optimal ranges reference -->
      <div class="settings-group card mb-3">
        <div class="sg-header">📖 Quick Reference</div>
        <div class="ref-section">
          <div class="ref-title text-amber">🥚 Egg Layers (Optimal)</div>
          <div class="ref-row"><span>Temperature</span><span>18–27°C (64–80°F)</span></div>
          <div class="ref-row"><span>Humidity</span><span>50–70%</span></div>
          <div class="ref-row"><span>Light hours</span><span>16–17 hrs/day</span></div>
          <div class="ref-row"><span>Ammonia max</span><span>&lt; 10 ppm</span></div>
          <div class="ref-row"><span>Target mortality</span><span>&lt; 5%</span></div>
        </div>
        <div class="divider"></div>
        <div class="ref-section mt-2">
          <div class="ref-title text-red">🍗 Broilers (Optimal)</div>
          <div class="ref-row"><span>Week 1 temp</span><span>32–35°C</span></div>
          <div class="ref-row"><span>Week 3+ temp</span><span>24–27°C</span></div>
          <div class="ref-row"><span>Humidity</span><span>50–65%</span></div>
          <div class="ref-row"><span>Target FCR</span><span>1.6–1.9</span></div>
          <div class="ref-row"><span>Harvest week</span><span>6–8 weeks</span></div>
        </div>
      </div>

      <!-- Data management -->
      <div class="settings-group card mb-3">
        <div class="sg-header">🗄️ Data</div>
        <div class="list-item" @click="exportData" style="cursor:pointer">
          <div class="icon-circle" style="background:var(--blue-dim)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-sm font-bold">Export Data (JSON)</div>
            <div class="text-xs text-muted">Download all your farm data</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class="list-item" @click="showImport = !showImport" style="cursor:pointer">
          <div class="icon-circle" style="background:var(--green-dim)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-sm font-bold">Import Data (JSON)</div>
            <div class="text-xs text-muted">Restore from a backup</div>
          </div>
        </div>
        <div v-if="showImport" class="mt-2">
          <textarea v-model="importJson" class="form-textarea" placeholder="Paste exported JSON here…" style="min-height:80px"></textarea>
          <button class="btn btn-primary btn-full mt-2" @click="importData" :disabled="!importJson">Import</button>
        </div>
      </div>

      <!-- Danger zone -->
      <div class="settings-group card mb-3">
        <div class="sg-header" style="color:var(--red2)">⚠️ Danger Zone</div>
        <button class="btn btn-danger btn-full" @click="clearAll">🗑️ Clear All Data</button>
        <div class="text-xs text-muted mt-2" style="text-align:center">This will permanently delete all batches, expenses, and logs.</div>
      </div>

      <!-- App info -->
      <div class="card" style="text-align:center;padding:20px">
        <div style="font-size:40px">🐔</div>
        <div class="font-bold mt-2">Vue Chicken</div>
        <div class="text-xs text-muted mt-1">v1.0.0 · Chicken Farm Manager</div>
        <div class="text-xs text-muted mt-1">Track eggs, meat, costs & profits</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const { settings, update } = useSettingsStore()

const currencySymbols: Record<string, string> = {
  USD: '$', EUR: '€', GBP: '£', KES: 'KSh', NGN: '₦', ZAR: 'R', GHS: 'GH₵',
  UGX: 'USh', TZS: 'TSh', INR: '₹', PHP: '₱', BDT: '৳', BRL: 'R$', MXN: '$',
  COP: '$', IDR: 'Rp', CNY: '¥'
}

const currency = ref(settings.currency)
const symbol = ref(settings.currencySymbol)
const weightUnit = ref(settings.weightUnit)
const tempUnit = ref(settings.temperatureUnit)

function saveCurrency() {
  if (currency.value !== 'Custom') symbol.value = currencySymbols[currency.value] || currency.value
  update({ currency: currency.value, currencySymbol: symbol.value })
}

function setWeight(unit: 'kg' | 'lb') {
  weightUnit.value = unit
  update({ weightUnit: unit })
}

function setTemp(unit: 'C' | 'F') {
  tempUnit.value = unit
  update({ temperatureUnit: unit })
}

function exportData() {
  const data: Record<string, any> = {}
  const keys = ['vc_batches', 'vc_expenses', 'vc_revenue', 'vc_mortality', 'vc_eggs', 'vc_weights', 'vc_environment', 'vc_health', 'vc_settings']
  keys.forEach(k => { const v = localStorage.getItem(k); if (v) data[k] = JSON.parse(v) })
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = `vue-chicken-backup-${new Date().toISOString().split('T')[0]}.json`
  a.click(); URL.revokeObjectURL(url)
}

const showImport = ref(false)
const importJson = ref('')

function importData() {
  try {
    const data = JSON.parse(importJson.value)
    Object.entries(data).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)))
    window.location.reload()
  } catch {
    alert('Invalid JSON. Please check your data.')
  }
}

function clearAll() {
  if (confirm('Delete ALL data? This cannot be undone!')) {
    const keys = ['vc_batches', 'vc_expenses', 'vc_revenue', 'vc_mortality', 'vc_eggs', 'vc_weights', 'vc_environment', 'vc_health']
    keys.forEach(k => localStorage.removeItem(k))
    window.location.reload()
  }
}
</script>

<style scoped>
.settings-group {}
.sg-header { font-size: 12px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
.unit-toggle { display: flex; background: var(--surface); border-radius: 10px; padding: 3px; gap: 3px; }
.unit-btn { flex: 1; padding: 8px; border-radius: 8px; border: none; background: transparent; color: var(--text3); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.unit-btn.active { background: var(--card); color: var(--amber); }
.ref-section { padding: 4px 0; }
.ref-title { font-size: 13px; font-weight: 700; margin-bottom: 8px; }
.ref-row { display: flex; justify-content: space-between; padding: 5px 0; font-size: 12px; border-bottom: 1px solid var(--border); }
.ref-row:last-child { border-bottom: none; }
.ref-row span:last-child { font-weight: 600; color: var(--text); }
.ref-row span:first-child { color: var(--text2); }
</style>
