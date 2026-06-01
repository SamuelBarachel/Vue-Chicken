<template>
  <div id="app-root">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import BottomNav from './components/BottomNav.vue'
</script>

<style>
#app-root {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  background: var(--bg);
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

.page-enter-active { transition: opacity 0.18s ease, transform 0.2s ease; }
.page-leave-active { transition: opacity 0.12s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; }
</style>
