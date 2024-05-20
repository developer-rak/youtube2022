import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorialfirebase-cee9a.firebaseapp.com",
  projectId: "tutorialfirebase-cee9a",
  storageBucket: "tutorialfirebase-cee9a.appspot.com",
  messagingSenderId: "138621784180",
  appId: "1:138621784180:web:771ec42180ec3b589e4121"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();