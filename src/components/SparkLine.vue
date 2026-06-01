<template>
  <svg :width="width" :height="height" viewBox="0 0 100 40" preserveAspectRatio="none">
    <defs>
      <linearGradient :id="gradId" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" :stop-color="color" stop-opacity="0.3"/>
        <stop offset="100%" :stop-color="color" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path v-if="areaPath" :d="areaPath" :fill="`url(#${gradId})`"/>
    <path v-if="linePath" :d="linePath" :stroke="color" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  data: number[]
  color?: string
  width?: number | string
  height?: number | string
}>()

const color = computed(() => props.color || '#F59E0B')
const gradId = `sg-${Math.random().toString(36).slice(2)}`

const linePath = computed(() => {
  const d = props.data
  if (!d || d.length < 2) return ''
  const min = Math.min(...d)
  const max = Math.max(...d)
  const range = max - min || 1
  const pts = d.map((v, i) => {
    const x = (i / (d.length - 1)) * 100
    const y = 36 - ((v - min) / range) * 32
    return `${x},${y}`
  })
  return `M${pts.join('L')}`
})

const areaPath = computed(() => {
  const d = props.data
  if (!d || d.length < 2) return ''
  const min = Math.min(...d)
  const max = Math.max(...d)
  const range = max - min || 1
  const pts = d.map((v, i) => {
    const x = (i / (d.length - 1)) * 100
    const y = 36 - ((v - min) / range) * 32
    return `${x},${y}`
  })
  return `M0,40 L${pts.join('L')} L100,40 Z`
})
</script>
