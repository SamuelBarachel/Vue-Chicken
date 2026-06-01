import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANhiEU4CvantODisibi-K2Hf8Xh56IoSQ',
  authDomain: 'vue-chicken.firebaseapp.com',
  projectId: 'vue-chicken',
  storageBucket: 'vue-chicken.firebasestorage.app',
  messagingSenderId: '555186655345',
  appId: '1:555186655345:web:a0706fea92a71e8176cbd0',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
