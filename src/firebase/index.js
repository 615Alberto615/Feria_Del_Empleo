import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyiBjHlpRhNa4bzzruwEkA-009-XbZfHk",
  authDomain: "feriadelempleo-c3d6f.firebaseapp.com",
  databaseURL: "https://feriadelempleo-c3d6f-default-rtdb.firebaseio.com",
  projectId: "feriadelempleo-c3d6f",
  storageBucket: "feriadelempleo-c3d6f.appspot.com",
  messagingSenderId: "975115630878",
  appId: "1:975115630878:web:150268064a192ba38a710f",
  measurementId: "G-PW5ER7Y6V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
