import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ import getFirestore

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ now db works

console.log("🔥 Firebase Config:", firebaseConfig);