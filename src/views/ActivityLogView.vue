<template>
  <div class="page">
    <div class="page-header">
      <div class="flex-between mb-1">
        <div>
          <div class="page-title">Activity Log</div>
          <div class="page-subtitle">Everything that happened on the farm</div>
        </div>
        <button class="btn btn-ghost btn-icon" @click="$router.push('/settings')" title="Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </button>
      </div>

      <!-- Search bar -->
      <div class="search-wrap mb-2">
        <div class="search-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <input
          v-model="searchQuery"
          class="search-input"
          placeholder="Search actions, batches, users…"
          type="search"
          autocomplete="off"
        />
        <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <!-- Category filter pills -->
      <div class="filter-scroll">
        <button
          v-for="f in filters"
          :key="f.id"
          class="filter-pill"
          :class="{ 'pill-active': activeFilter === f.id }"
          @click="activeFilter = f.id"
        >{{ f.icon }} {{ f.label }}</button>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="section" style="padding-bottom:0">
      <div class="activity-stats">
        <div class="astat">
          <div class="astat-val">{{ visibleEntries.length }}</div>
          <div class="astat-lbl">Actions</div>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <div class="astat-val">{{ uniqueUsers.length }}</div>
          <div class="astat-lbl">Users</div>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <div class="astat-val">{{ todayCount }}</div>
          <div class="astat-lbl">Today</div>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <div class="astat-val">{{ uniqueBatchCount }}</div>
          <div class="astat-lbl">Batches</div>
        </div>
      </div>
    </div>

    <!-- Empty: no activity at all -->
    <div v-if="!activityStore.entries.length" class="section">
      <div class="empty-state" style="padding:48px 0">
        <div class="empty-icon">📋</div>
        <div class="empty-title">No activity yet</div>
        <div class="empty-desc">Actions you take — logging eggs, adding costs, recording feed — will appear here with a timestamp and who did them.</div>
        <button class="btn btn-primary mt-3" @click="$router.push('/log')">+ Start Logging</button>
      </div>
    </div>

    <!-- Timeline -->
    <div v-else class="section">

      <!-- No-results state -->
      <div v-if="!visibleEntries.length" class="empty-state" style="padding:40px 0">
        <div class="empty-icon" style="font-size:32px">🔍</div>
        <div class="empty-title" style="font-size:16px">No results</div>
        <div class="empty-desc">
          <span v-if="searchQuery">Nothing matched "<strong>{{ searchQuery }}</strong>"</span>
          <span v-else>No {{ activeFilter }} entries found</span>
        </div>
        <button class="btn btn-ghost btn-sm mt-3" @click="searchQuery = ''; activeFilter = 'all'">Clear filters</button>
      </div>

      <!-- Grouped timeline -->
      <div v-for="group in groupedEntries" :key="group.date" class="date-group">
        <div class="date-header">
          <div class="date-line"></div>
          <div class="date-badge">{{ formatGroupDate(group.date) }}</div>
          <div class="date-line"></div>
        </div>

        <div class="card" style="padding:4px 14px">
          <div
            v-for="entry in group.entries"
            :key="entry.id"
            class="timeline-item"
            @click="entry.batchId && $router.push(`/batches/${entry.batchId}`)"
            :class="{ clickable: !!entry.batchId }"
          >
            <!-- Category icon -->
            <div class="tl-icon" :style="{ background: getCatBg(entry.category) }">
              {{ getCatIcon(entry.category) }}
            </div>

            <!-- Content -->
            <div class="tl-body">
              <div class="tl-desc">{{ entry.description }}</div>
              <div class="tl-meta">
                <span v-if="entry.batchName" class="batch-chip">{{ entry.batchName }}</span>
                <span class="tl-who">{{ entry.userName }}</span>
                <span class="tl-dot">·</span>
                <span class="tl-time">{{ formatTime(entry.timestamp) }}</span>
              </div>
            </div>

            <!-- User avatar -->
            <div class="tl-user" :title="entry.userName">
              <img v-if="entry.userPhoto" :src="entry.userPhoto" :alt="entry.userName" class="user-avatar" referrerpolicy="no-referrer" />
              <div v-else class="user-initial">{{ userInitial(entry.userName) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useActivityLogStore } from '@/stores/activityLog'
import type { ActivityCategory } from '@/types'

const activityStore = useActivityLogStore()

const searchQuery = ref('')
const activeFilter = ref<ActivityCategory | 'all'>('all')

const filters = [
  { id: 'all', icon: '📋', label: 'All' },
  { id: 'eggs', icon: '🥚', label: 'Eggs' },
  { id: 'expense', icon: '💸', label: 'Costs' },
  { id: 'revenue', icon: '💵', label: 'Sales' },
  { id: 'feed', icon: '🌾', label: 'Feed' },
  { id: 'mortality', icon: '💀', label: 'Loss' },
  { id: 'weight', icon: '⚖️', label: 'Weights' },
  { id: 'health', icon: '🩺', label: 'Health' },
  { id: 'env', icon: '🌡️', label: 'Env' },
  { id: 'batch', icon: '🐔', label: 'Batches' },
] as const

const filteredByCategory = computed(() =>
  activeFilter.value === 'all'
    ? activityStore.entries
    : activityStore.entries.filter(e => e.category === activeFilter.value)
)

const visibleEntries = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return filteredByCategory.value
  return filteredByCategory.value.filter(e =>
    e.description.toLowerCase().includes(q) ||
    (e.batchName || '').toLowerCase().includes(q) ||
    e.userName.toLowerCase().includes(q) ||
    e.userEmail.toLowerCase().includes(q)
  )
})

const groupedEntries = computed(() => {
  const groups: Record<string, typeof activityStore.entries> = {}
  visibleEntries.value.forEach(e => {
    if (!groups[e.date]) groups[e.date] = []
    groups[e.date].push(e)
  })
  return Object.entries(groups)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([date, entries]) => ({ date, entries }))
})

const todayStr = new Date().toISOString().slice(0, 10)
const todayCount = computed(() => activityStore.entries.filter(e => e.date === todayStr).length)
const uniqueUsers = computed(() => [...new Set(activityStore.entries.map(e => e.userId))])
const uniqueBatchCount = computed(() => new Set(activityStore.entries.filter(e => e.batchId).map(e => e.batchId)).size)

function formatGroupDate(dateStr: string) {
  if (dateStr === todayStr) return 'Today'
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  if (dateStr === yesterday.toISOString().slice(0, 10)) return 'Yesterday'
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })
}

function userInitial(name: string) {
  return (name || '?').charAt(0).toUpperCase()
}

function getCatIcon(cat: ActivityCategory) {
  const map: Record<ActivityCategory, string> = {
    eggs: '🥚', expense: '💸', feed: '🌾', revenue: '💵',
    mortality: '💀', health: '🩺', weight: '⚖️', env: '🌡️', batch: '🐔',
  }
  return map[cat] || '📋'
}

function getCatBg(cat: ActivityCategory) {
  const map: Record<ActivityCategory, string> = {
    eggs: 'rgba(234,179,8,0.15)',
    expense: 'rgba(255,64,96,0.15)',
    feed: 'rgba(245,166,35,0.15)',
    revenue: 'rgba(0,200,150,0.15)',
    mortality: 'rgba(155,107,255,0.15)',
    health: 'rgba(59,126,255,0.15)',
    weight: 'rgba(229,57,53,0.15)',
    env: 'rgba(59,126,255,0.12)',
    batch: 'rgba(255,165,0,0.15)',
  }
  return map[cat] || 'rgba(100,100,100,0.12)'
}
</script>

<style scoped>
/* Search */
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text3);
  display: flex;
  align-items: center;
  pointer-events: none;
}
.search-input {
  width: 100%;
  background: var(--surface);
  border: 1.5px solid var(--border2);
  border-radius: 12px;
  padding: 10px 36px 10px 36px;
  font-size: 14px;
  color: var(--text);
  font-family: inherit;
  font-weight: 500;
  outline: none;
  transition: border-color 0.18s;
  -webkit-appearance: none;
}
.search-input:focus { border-color: var(--amber); }
.search-input::placeholder { color: var(--text3); }
.search-input::-webkit-search-cancel-button { display: none; }
.search-clear {
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: var(--card2);
  border: none;
  color: var(--text3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
}

/* Category filters */
.filter-scroll {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
}
.filter-scroll::-webkit-scrollbar { display: none; }
.filter-pill {
  flex-shrink: 0;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text3);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}
.filter-pill.pill-active {
  background: var(--amber);
  border-color: var(--amber);
  color: #000;
}

/* Stats bar */
.activity-stats {
  display: flex;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 0;
  margin-bottom: 4px;
}
.astat { flex: 1; text-align: center; }
.astat-val { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }
.astat-lbl { font-size: 10px; color: var(--text3); font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin-top: 2px; }
.astat-div { width: 1px; height: 32px; background: var(--border); }

/* Timeline */
.date-group { margin-bottom: 4px; }
.date-header { display: flex; align-items: center; gap: 10px; padding: 14px 0 8px; }
.date-line { flex: 1; height: 1px; background: var(--border); }
.date-badge { font-size: 11px; font-weight: 800; color: var(--text3); text-transform: uppercase; letter-spacing: .6px; white-space: nowrap; }

.timeline-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid var(--border);
}
.timeline-item:last-child { border-bottom: none; }
.timeline-item.clickable { cursor: pointer; }
.timeline-item.clickable:active { opacity: 0.7; }

.tl-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.tl-body {
  flex: 1;
  min-width: 0;
}

.tl-desc {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tl-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.batch-chip {
  font-size: 10px;
  font-weight: 700;
  background: rgba(255,165,0,0.15);
  color: var(--amber);
  border-radius: 6px;
  padding: 2px 7px;
  white-space: nowrap;
  flex-shrink: 0;
}

.tl-who {
  font-size: 11px;
  color: var(--text2);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
}

.tl-dot {
  font-size: 11px;
  color: var(--text3);
  flex-shrink: 0;
}

.tl-time {
  font-size: 11px;
  color: var(--text3);
  font-weight: 600;
  flex-shrink: 0;
}

.tl-user { flex-shrink: 0; }

.user-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid var(--border2);
  display: block;
}

.user-initial {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--amber);
  color: #000;
  font-size: 13px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
