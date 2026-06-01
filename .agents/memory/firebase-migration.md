---
name: Firebase to Replit migration
description: Full migration from Firebase Auth + Firestore to Replit Auth + PostgreSQL; architecture of the backend server and store pattern
---

This project was fully migrated from Firebase (Auth + Firestore) to Replit (Auth + PostgreSQL).

## Architecture
- **Backend**: Express server at `server/index.ts`, runs on port 5000, serves built Vue SPA from `dist/`
- **Auth**: Replit OIDC via `server/replitAuth.ts` — login at `/api/auth/login`, callback at `/api/auth/callback`, logout at `/api/auth/logout`; session stored via `express-session`; issuer URL read from `ISSUER_URL` env var (allows test override)
- **Database**: Replit PostgreSQL via `server/db.ts` (pg Pool); all REST routes in `server/api.ts`
- **Frontend**: Vue 3 + Pinia stores in `src/stores/`; all Firebase imports removed; data fetched via `src/api.ts` (fetch wrapper to `/api/*`)

## Store pattern
Each store has `init(uid: string | null)` called from `App.vue` after auth check. Stores use `api.get/post/patch/delete` to REST endpoints. No real-time listeners (polling not needed — data loads on mount).

## Auth pattern in App.vue
`onMounted` → `authStore.loadUser()` (fetches `/api/auth/user`) → if uid, calls `initStores(uid)` with `Promise.all` across all stores.

## Database schema tables
users, batches, eggs, expenses, revenue, mortality, weights, environment_logs, health_records, feed_stock, activity_log, settings, notification_prefs

**Why:** Firestore was replaced because Replit's security model requires server-side data access, not client-side Firebase SDKs. Auth was replaced because Replit Auth integrates natively.

**How to apply:** New data collections need: (1) a table in Postgres, (2) CRUD routes in `server/api.ts`, (3) a Pinia store in `src/stores/` using `api.*` helpers.
