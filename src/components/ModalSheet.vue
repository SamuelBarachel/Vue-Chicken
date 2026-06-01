<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
        <Transition name="slide-up">
          <div v-if="modelValue" class="modal-sheet">
            <div class="modal-handle"></div>
            <div class="modal-header">
              <h3 class="modal-title">{{ title }}</h3>
              <button class="btn btn-icon btn-ghost" @click="$emit('update:modelValue', false)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
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
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.slide-up-enter-active { transition: transform 0.3s cubic-bezier(0.34,1.05,0.64,1), opacity 0.25s; }
.slide-up-leave-active { transition: transform 0.22s ease-in, opacity 0.22s; }
.slide-up-enter-from { transform: translateY(100%); opacity: 0; }
.slide-up-leave-to { transform: translateY(100%); opacity: 0; }
</style>
