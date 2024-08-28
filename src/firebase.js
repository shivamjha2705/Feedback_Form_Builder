import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcy8GehEL96rUuDLWXXKRyUZ_ED8_1uR8",
  authDomain: "feedback-form-builder-8ece9.firebaseapp.com",
  projectId: "feedback-form-builder-8ece9",
  storageBucket: "feedback-form-builder-8ece9.appspot.com",
  messagingSenderId: "58804313591",
  appId: "1:58804313591:web:0300d8b202abef0bba22f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export { db };