<template>
  <div id="app-root">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const transitionName = computed(() => 'page-slide')
</script>

<style>
#app-root {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  background: var(--bg);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

/* Tablet: show slightly wider */
@media (min-width: 600px) {
  #app-root {
    box-shadow: 0 0 60px rgba(0,0,0,0.5);
  }
}

.page-slide-enter-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.page-slide-leave-active {
  transition: opacity 0.12s ease;
}
.page-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-slide-leave-to {
  opacity: 0;
}
</style>
