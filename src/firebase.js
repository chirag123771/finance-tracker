import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAywePRPgMWlE0Fy70y7tcB_UzaiRjzN3Q",
  authDomain: "finance-tracker-2a8b2.firebaseapp.com",
  projectId: "finance-tracker-2a8b2",
  storageBucket: "finance-tracker-2a8b2.appspot.com",
  messagingSenderId: "41745108420",
  appId: "1:41745108420:web:385c214005c2425ec4e891",
  measurementId: "G-97357JP3L5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
