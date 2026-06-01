<template>
  <svg :width="width" :height="height" :viewBox="`0 0 200 ${vh}`" preserveAspectRatio="none" style="display:block;width:100%;overflow:visible">
    <defs>
      <linearGradient :id="gradId" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" :stop-color="color" stop-opacity="0.28"/>
        <stop offset="100%" :stop-color="color" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path v-if="areaPath" :d="areaPath" :fill="`url(#${gradId})`"/>
    <path v-if="linePath" :d="linePath" :stroke="color" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle v-if="lastPt" :cx="lastPt.x" :cy="lastPt.y" r="3" :fill="color"/>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  data: number[]
  color?: string
  width?: number | string
  height?: number | string
}>(), { color: '#F5A623', width: '100%', height: 48 })

const gradId = `sg-${Math.random().toString(36).slice(2, 8)}`
const vh = computed(() => Number(props.height) || 48)

const pts = computed(() => {
  const d = props.data
  if (!d || d.length < 2) return []
  const min = Math.min(...d)
  const max = Math.max(...d)
  const range = max - min || 1
  const pad = 5
  return d.map((v, i) => ({
    x: (i / (d.length - 1)) * 200,
    y: vh.value - pad - ((v - min) / range) * (vh.value - pad * 2),
  }))
})

function curve(ps: { x: number; y: number }[]) {
  if (ps.length < 2) return ''
  let d = `M ${ps[0].x},${ps[0].y}`
  for (let i = 1; i < ps.length; i++) {
    const cx = ps[i - 1].x + (ps[i].x - ps[i - 1].x) * 0.5
    d += ` C ${cx},${ps[i - 1].y} ${cx},${ps[i].y} ${ps[i].x},${ps[i].y}`
  }
  return d
}

const linePath = computed(() => curve(pts.value))
const areaPath = computed(() => {
  const ps = pts.value
  if (!ps.length) return ''
  return `${curve(ps)} L ${ps[ps.length - 1].x},${vh.value} L 0,${vh.value} Z`
})
const lastPt = computed(() => pts.value[pts.value.length - 1] || null)
</script>
