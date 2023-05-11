import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO1tkwPpvi4z8U4hHAC_-baRACMEHYo2Q",
  authDomain: "feriaempleo-44aa2.firebaseapp.com",
  projectId: "feriaempleo-44aa2",
  storageBucket: "feriaempleo-44aa2.appspot.com",
  messagingSenderId: "583669220049",
  appId: "1:583669220049:web:6d0cf0620168a0afca7bf0",
  measurementId: "G-7455938Y2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
