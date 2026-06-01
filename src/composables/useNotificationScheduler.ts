import { useNotificationStore } from '@/stores/notifications'
import { useBatchStore } from '@/stores/batches'
import { useEggStore } from '@/stores/eggs'
import { useHealthStore } from '@/stores/health'

const TODAY_KEY = 'vc_notif_last_egg_check'
const HEALTH_KEY = 'vc_notif_last_health_check'

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
