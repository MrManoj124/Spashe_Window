import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';


const firebaseConfig = {

  apiKey: "AIzaSyAF3djYVjF49bD6QHsAkrwXHEVKP5dRb94",

  authDomain: "unimate-74.firebaseapp.com",

  projectId: "unimate-74",

  storageBucket: "unimate-74.firebasestorage.app",

  messagingSenderId: "27455709747",

  appId: "1:27455709747:web:15e355452716fbc7b27946",

  measurementId: "G-MT8Y453PNN"

};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();


