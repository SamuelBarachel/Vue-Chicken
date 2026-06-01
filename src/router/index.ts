import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'dashboard', component: DashboardView },
    { path: '/batches', name: 'batches', component: () => import('../views/BatchesView.vue') },
    { path: '/batches/new', name: 'batch-new', component: () => import('../views/AddBatchView.vue') },
    { path: '/batches/:id', name: 'batch-detail', component: () => import('../views/BatchDetailView.vue') },
    { path: '/batches/:id/edit', name: 'batch-edit', component: () => import('../views/AddBatchView.vue') },
    { path: '/log', name: 'log', component: () => import('../views/LogEntryView.vue') },
    { path: '/reports', name: 'reports', component: () => import('../views/ReportsView.vue') },
    { path: '/settings', name: 'settings', component: () => import('../views/SettingsView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
