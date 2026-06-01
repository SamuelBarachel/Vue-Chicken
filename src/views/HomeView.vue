<template>
  <main>
    <div class="hero">
      <h1>🐔 Vue Chicken</h1>
      <p>A Vue 3 + Vite application with TypeScript, Pinia, and Vue Router.</p>
      <div class="counter">
        <button @click="counter.increment()">Count: {{ counter.count }}</button>
        <p>Double: {{ counter.doubleCount }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}

.hero {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  color: #42b883;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #aaa;
  margin-bottom: 2rem;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

button {
  background: #42b883;
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #33a06f;
}
</style>
