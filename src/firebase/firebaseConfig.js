// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR41cMJt6LpJ8QbgUIU8LooG7DRgSyUWw",
  authDomain: "react-project-apple.firebaseapp.com",
  projectId: "react-project-apple",
  storageBucket: "react-project-apple.appspot.com",
  messagingSenderId: "765276105907",
  appId: "1:765276105907:web:494e358a0d1b8ed2e854c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
