<template>
  <nav class="bottom-nav">
    <RouterLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="nav-item"
      :class="{ active: isActive(item) }"
    >
      <div class="nav-icon-wrap">
        <div class="nav-icon" v-html="item.icon"></div>
        <div class="nav-pip" v-if="isActive(item)"></div>
      </div>
      <span class="nav-label">{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  {
    to: '/', label: 'Home', exact: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    to: '/batches', label: 'Batches', exact: false,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`
  },
  {
    to: '/log', label: 'Log', exact: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`
  },
  {
    to: '/reports', label: 'Reports', exact: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
  },
  {
    to: '/settings', label: 'More', exact: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  },
]

function isActive(item: typeof navItems[0]) {
  if (item.exact) return route.path === item.to
  return route.path.startsWith(item.to)
}
</script>

<style scoped>
.bottom-nav {
  display: flex;
  align-items: center;
  height: var(--nav-h);
  background: rgba(10, 19, 37, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding-bottom: var(--safe-bottom);
  flex-shrink: 0;
  position: relative;
  z-index: 40;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  color: var(--text3);
  padding: 8px 4px;
  transition: color 0.2s;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}

.nav-item.active { color: var(--amber); }

.nav-icon-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon {
  transition: transform 0.25s cubic-bezier(0.34,1.4,0.64,1);
  display: flex;
  align-items: center;
}

.nav-item.active .nav-icon {
  transform: scale(1.1) translateY(-1px);
}

/* Special center Log button */
.nav-item:nth-child(3) .nav-icon-wrap {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--amber) 0%, #FF9500 100%);
  border-radius: 16px;
  color: #000;
  margin-top: -4px;
  box-shadow: 0 4px 18px var(--amber-glow2);
  transition: all 0.25s cubic-bezier(0.34,1.4,0.64,1);
}
.nav-item:nth-child(3) { color: #000; }
.nav-item:nth-child(3).active .nav-icon { transform: scale(1) translateY(0); }
.nav-item:nth-child(3):active .nav-icon-wrap { transform: scale(0.92); }
.nav-item:nth-child(3).active .nav-icon-wrap { box-shadow: 0 6px 24px var(--amber-glow2); }

.nav-pip {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--amber);
  border-radius: 2px;
  animation: pip-in 0.3s cubic-bezier(0.34,1.4,0.64,1);
}
@keyframes pip-in { from { transform: translateX(-50%) scaleX(0); opacity: 0; } }

.nav-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.nav-item:nth-child(3) .nav-label { color: var(--text3); margin-top: 2px; }
</style>
