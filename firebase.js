import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbG_1kIQA-DnMSR4cALqg6vuQgaTbHbNU",
  authDomain: "instagram-clone-7b9f6.firebaseapp.com",
  projectId: "instagram-clone-7b9f6",
  storageBucket: "instagram-clone-7b9f6.appspot.com",
  messagingSenderId: "366293824943",
  appId: "1:366293824943:web:dec2fa601ad8bfe6022b5a",
  measurementId: "G-7WWK8F4M7Z",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
