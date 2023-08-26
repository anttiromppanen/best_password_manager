import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBv2fO8E1rGzxF9ooyoi0XVEN2Ha2kbNU",
  authDomain: "salasanaholvi-dev.firebaseapp.com",
  projectId: "salasanaholvi-dev",
  storageBucket: "salasanaholvi-dev.appspot.com",
  messagingSenderId: "250179976215",
  appId: "1:250179976215:web:8d319d5aa030c5e2587052"
};

const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIRESTORE_DB = getFirestore(app);