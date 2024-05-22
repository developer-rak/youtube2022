import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorialfirebase-cee9a.firebaseapp.com",
  projectId: "tutorialfirebase-cee9a",
  storageBucket: "tutorialfirebase-cee9a.appspot.com",
  messagingSenderId: "138621784180",
  appId: "1:138621784180:web:771ec42180ec3b589e4121"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
// const storage = getStorage(firebaseApp, "gs://my-custom-bucket");