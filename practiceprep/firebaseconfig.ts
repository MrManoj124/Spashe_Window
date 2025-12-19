import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyCd6lpdbWXcOXvugpSUxkgmgM4OW2718yc",

  authDomain: "splashmovieapp.firebaseapp.com",

  projectId: "splashmovieapp",

  storageBucket: "splashmovieapp.firebasestorage.app",

  messagingSenderId: "607193225650",

  appId: "1:607193225650:web:ab70c93b384b08981aecab",

  measurementId: "G-5NEY21QS0R"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;