import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiaPVhzxWnXjmIJS_u9B9UfMMEPSJ0rGY",
  authDomain: "instagram-clone-a8d14.firebaseapp.com",
  projectId: "instagram-clone-a8d14",
  storageBucket: "instagram-clone-a8d14.appspot.com",
  messagingSenderId: "456977301157",
  appId: "1:456977301157:web:9baf52a88b17cfe97b974c",
  measurementId: "G-8GF4J3GV8J",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
