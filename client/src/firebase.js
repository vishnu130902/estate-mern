// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f32d9.firebaseapp.com",
  projectId: "mern-estate-f32d9",
  storageBucket: "mern-estate-f32d9.appspot.com",
  messagingSenderId: "854071369144",
  appId: "1:854071369144:web:09e47599f1bac28ca7c34d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);