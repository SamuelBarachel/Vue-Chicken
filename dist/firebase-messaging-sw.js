importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyANhiEU4CvantODisibi-K2Hf8Xh56IoSQ',
  authDomain: 'vue-chicken.firebaseapp.com',
  projectId: 'vue-chicken',
  storageBucket: 'vue-chicken.firebasestorage.app',
  messagingSenderId: '555186655345',
  appId: '1:555186655345:web:a0706fea92a71e8176cbd0',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  const notif = payload.notification || {}
  const title = notif.title || '🐔 Vue Chicken'
  const body = notif.body || ''
  self.registration.showNotification(title, {
    body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: payload.data?.tag || 'vue-chicken',
    data: payload.data || {},
    requireInteraction: false,
  })
})
