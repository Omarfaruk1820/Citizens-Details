// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYAwBXw75vfS3LlMkYM0SIhrYrRKOuAbs",
  authDomain: "citizens-management-auth.firebaseapp.com",
  projectId: "citizens-management-auth",
  storageBucket: "citizens-management-auth.firebasestorage.app",
  messagingSenderId: "221515941686",
  appId: "1:221515941686:web:9a4c176420abeaaafb5597",
  measurementId: "G-GS47X40CHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
