import { useNotificationStore } from '@/stores/notifications'
import { useBatchStore } from '@/stores/batches'
import { useEggStore } from '@/stores/eggs'
import { useHealthStore } from '@/stores/health'
import { useMortalityStore } from '@/stores/mortality'

const TODAY_KEY = 'vc_notif_last_egg_check'
const HEALTH_KEY = 'vc_notif_last_health_check'
const MORTALITY_KEY = 'vc_notif_last_mortality_check'

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
  }

  return { runChecks }
}
