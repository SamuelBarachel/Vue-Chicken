import { useNotificationStore } from '@/stores/notifications'
import { useBatchStore } from '@/stores/batches'
import { useEggStore } from '@/stores/eggs'
import { useHealthStore } from '@/stores/health'
import { useMortalityStore } from '@/stores/mortality'
import { useFeedStockStore } from '@/stores/feedStock'

const TODAY_KEY = 'vc_notif_last_egg_check'
const HEALTH_KEY = 'vc_notif_last_health_check'
const MORTALITY_KEY = 'vc_notif_last_mortality_check'
const FEED_KEY = 'vc_notif_last_feed_check'

// Recommended daily feed per bird in grams
const RECOMMENDED_G: Record<string, number> = { egg: 120, meat: 100 }

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function daysUntil(dateStr: string): number {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const target = new Date(dateStr + 'T00:00:00')
  return Math.round((target.getTime() - now.getTime()) / 86_400_000)
}

export function useNotificationScheduler() {
  function runChecks() {
    const notifStore = useNotificationStore()
    if (notifStore.permission !== 'granted') return

    const today = todayStr()
    const nowHour = new Date().getHours()

    // ── Egg reminder ──────────────────────────────────────────────
    if (notifStore.prefs.eggReminderEnabled && nowHour >= notifStore.prefs.eggReminderHour) {
      const lastCheck = localStorage.getItem(TODAY_KEY)
      if (lastCheck !== today) {
        const batchStore = useBatchStore()
        const eggStore = useEggStore()

        const activeLayers = batchStore.batches.filter(
          b => b.mode === 'egg' && b.status === 'active'
        )

        if (activeLayers.length > 0) {
          const loggedToday = eggStore.collections.some(c => c.date === today)
          if (!loggedToday) {
            notifStore.showLocal(
              '🥚 Egg count reminder',
              `You haven't logged today's egg collection yet. Tap to open Vue Chicken.`,
              'egg-reminder'
            )
          }
        }
        localStorage.setItem(TODAY_KEY, today)
      }
    }

    // ── Mortality spike alert ─────────────────────────────────────
    if (notifStore.prefs.mortalityAlertEnabled) {
      const lastCheck = localStorage.getItem(MORTALITY_KEY)
      if (lastCheck !== today) {
        const mortalityStore = useMortalityStore()
        const batchStore2 = useBatchStore()
        const threshold = notifStore.prefs.mortalityAlertThreshold

        // Group today's mortality records by batch and sum counts
        const todayRecords = mortalityStore.records.filter(r => r.date === today)
        const byBatch: Record<string, number> = {}
        for (const r of todayRecords) {
          byBatch[r.batchId] = (byBatch[r.batchId] ?? 0) + r.count
        }

        const spikes = Object.entries(byBatch).filter(([, count]) => count >= threshold)
        if (spikes.length > 0) {
          const lines = spikes.map(([batchId, count]) => {
            const batch = batchStore2.batches.find(b => b.id === batchId)
            return `${batch?.name ?? 'Unknown batch'}: ${count} bird${count !== 1 ? 's' : ''} today`
          })
          notifStore.showLocal(
            `⚠️ Mortality spike detected`,
            lines.slice(0, 3).join('\n'),
            'mortality-spike'
          )
        }
        localStorage.setItem(MORTALITY_KEY, today)
      }
    }

    // ── Health check due alerts ───────────────────────────────────
    if (notifStore.prefs.healthAlertEnabled) {
      const lastCheck = localStorage.getItem(HEALTH_KEY)
      if (lastCheck !== today) {
        const healthStore = useHealthStore()
        const batchStore = useBatchStore()
        const ahead = notifStore.prefs.healthAlertDaysAhead

        const dueRecords = healthStore.records.filter(r => {
          if (!r.nextDue) return false
          const d = daysUntil(r.nextDue)
          return d >= 0 && d <= ahead
        })

        if (dueRecords.length > 0) {
          const names = dueRecords.map(r => {
            const batch = batchStore.batches.find(b => b.id === r.batchId)
            const batchName = batch?.name ?? 'Unknown batch'
            const d = daysUntil(r.nextDue!)
            const when = d === 0 ? 'today' : d === 1 ? 'tomorrow' : `in ${d} days`
            return `${batchName}: ${r.description} due ${when}`
          })

          notifStore.showLocal(
            `🩺 Health check${dueRecords.length > 1 ? 's' : ''} due`,
            names.slice(0, 3).join('\n'),
            'health-alert'
          )
        }
        localStorage.setItem(HEALTH_KEY, today)
      }
    }

    // ── Feed stock checks ─────────────────────────────────────────
    if (notifStore.prefs.feedLowAlertEnabled || notifStore.prefs.feedRateAlertEnabled) {
      const lastCheck = localStorage.getItem(FEED_KEY)
      if (lastCheck !== today) {
        const feedStore = useFeedStockStore()
        const batchStore3 = useBatchStore()

        const lowMessages: string[] = []
        const underMessages: string[] = []
        const overMessages: string[] = []

        for (const batch of batchStore3.batches.filter(b => b.status === 'active')) {
          const entry = feedStore.records
            .filter(r => r.batchId === batch.id)
            .sort((a, b) => b.date.localeCompare(a.date))[0]
          if (!entry) continue

          const daysSince = Math.floor(
            (new Date(today + 'T00:00:00').getTime() - new Date(entry.date + 'T00:00:00').getTime()) / 86_400_000
          )
          const daysRemaining = entry.durationDays - daysSince

          // Low stock check
          if (notifStore.prefs.feedLowAlertEnabled && daysRemaining <= notifStore.prefs.feedLowAlertDaysAhead) {
            const when = daysRemaining <= 0 ? 'today' : daysRemaining === 1 ? 'tomorrow' : `in ${daysRemaining} days`
            lowMessages.push(`${batch.name}: runs out ${when}`)
          }

          // Under/overfeeding check
          if (notifStore.prefs.feedRateAlertEnabled && batch.currentCount > 0) {
            const actualGPerBirdPerDay = (entry.quantityKg * 1000) / entry.durationDays / batch.currentCount
            const recommended = RECOMMENDED_G[batch.mode] ?? 110
            const ratio = actualGPerBirdPerDay / recommended

            if (ratio < 0.80) {
              underMessages.push(`${batch.name}: ${Math.round(actualGPerBirdPerDay)}g/bird/day (need ~${recommended}g)`)
            } else if (ratio > 1.25) {
              overMessages.push(`${batch.name}: ${Math.round(actualGPerBirdPerDay)}g/bird/day (need ~${recommended}g)`)
            }
          }
        }

        if (lowMessages.length > 0) {
          notifStore.showLocal(
            `🌾 Feed running low`,
            lowMessages.slice(0, 3).join('\n'),
            'feed-low'
          )
        }
        if (underMessages.length > 0) {
          notifStore.showLocal(
            `⬇️ Underfeeding detected`,
            underMessages.slice(0, 3).join('\n'),
            'feed-under'
          )
        }
        if (overMessages.length > 0) {
          notifStore.showLocal(
            `⬆️ Overfeeding detected`,
            overMessages.slice(0, 3).join('\n'),
            'feed-over'
          )
        }

        localStorage.setItem(FEED_KEY, today)
      }
    }
  }

  return { runChecks }
}
