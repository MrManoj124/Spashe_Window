import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAF3djYVjF49bD6QHsAkrwXHEVKP5dRb94",
  authDomain: "unimate-74.firebaseapp.com",
  projectId: "unimate-74",
  storageBucket: "unimate-74.appspot.com",
  messagingSenderId: "27455709747",
  appId: "1:27455709747:web:15e355452716fbc7b27946",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;