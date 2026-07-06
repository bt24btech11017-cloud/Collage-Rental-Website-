import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBPcoJy-ISv0rh8Nr-d0uB8kxaWG-ZBZ3A",
  authDomain: "collagerental-8922a.firebaseapp.com",
  projectId: "collagerental-8922a",
  storageBucket: "collagerental-8922a.firebasestorage.app",
  messagingSenderId: "829036223014",
  appId: "1:829036223014:web:1bd0e6867d16d47ea924e7",
  measurementId: "G-091SLW3NM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
const analytics = getAnalytics(app);