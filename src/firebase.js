// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8KfDpZUMC58ER4h8ZfzONma6Z9OS90x4",
  authDomain: "rsvp-guest-list.firebaseapp.com",
  projectId: "rsvp-guest-list",
  storageBucket: "rsvp-guest-list.firebasestorage.app",
  messagingSenderId: "813119405398",
  appId: "1:813119405398:web:f9bad39a2d3c74d986aaf7",
  measurementId: "G-7Y5RJJ5L7X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
