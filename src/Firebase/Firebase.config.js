import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAydnglhhXtXhCISrQyZkIBLekaAxJcY80',
  authDomain: 'pet-store-3d0dd.firebaseapp.com',
  projectId: 'pet-store-3d0dd',
  storageBucket: 'pet-store-3d0dd.appspot.com',
  messagingSenderId: '945892258519',
  appId: '1:945892258519:web:503794962173a0acc3b692',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
