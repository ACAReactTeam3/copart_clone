import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpli-BYj4w3p1icnZkMVwZ4B73X4RgA44",
  authDomain: "copartclone-b2247.firebaseapp.com",
  projectId: "copartclone-b2247",
  storageBucket: "copartclone-b2247.appspot.com",
  messagingSenderId: "385589877212",
  appId: "1:385589877212:web:bcbefe86eea183e1281719",
  measurementId: "G-CGMYDE7P4T",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const currentuser = auth.currentUser;
export const db = getDatabase();
export const dbStore = getFirestore(app);
export const storage = getStorage(app);
