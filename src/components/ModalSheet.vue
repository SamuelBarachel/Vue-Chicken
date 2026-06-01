<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
        <Transition name="modal-slide">
          <div v-if="modelValue" class="modal-sheet">
            <div class="modal-handle"></div>
            <div class="modal-header">
              <h3 class="modal-title">{{ title }}</h3>
              <button class="modal-close" @click="$emit('update:modelValue', false)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div class="modal-body">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean; title: string }>()
defineEmits(['update:modelValue'])
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.28s; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-slide-enter-active { transition: transform 0.34s cubic-bezier(0.32,0.94,0.60,1), opacity 0.28s; }
.modal-slide-leave-active { transition: transform 0.22s cubic-bezier(0.4,0,1,1), opacity 0.2s; }
.modal-slide-enter-from { transform: translateY(100%); opacity: 0; }
.modal-slide-leave-to { transform: translateY(100%); opacity: 0; }

.modal-close {
  width: 34px; height: 34px;
  border-radius: 10px;
  background: var(--card2);
  border: 1px solid var(--border2);
  color: var(--text2);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
  flex-shrink: 0;
}
.modal-close:active { transform: scale(0.92); }
</style>
