---
name: Firebase Firestore migration
description: How all Pinia stores are structured after migrating from localStorage to Firestore
---

Each data store exports an `init(uid: string | null)` function. App.vue calls `initStores(uid)` inside `onAuthStateChanged` to start/stop Firestore listeners.

Data lives under `/users/{uid}/{collection}/{docId}`. Settings lives at `/users/{uid}/meta/settings` (single doc).

Each doc has a `_ts: Date.now()` field added on write for client-side sort order.

Stores are async: `add()` returns Promise, `remove()` and `update()` return Promise<void>. AddBatchView.save() is async and awaits add().

**Why:** Firestore is async and real-time; the init(uid) pattern avoids circular imports between auth store and data stores. App.vue is the orchestrator.

**How to apply:** Any new store must follow the same pattern: local ref state + init(uid) + onSnapshot listener + async CRUD.
