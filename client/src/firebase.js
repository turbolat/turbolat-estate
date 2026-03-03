// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "turbolat-estate.firebaseapp.com",
  projectId: "turbolat-estate",
  storageBucket: "turbolat-estate.firebasestorage.app",
  messagingSenderId: "193600720244",
  appId: "1:193600720244:web:abf29189443b3375a8f021"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);