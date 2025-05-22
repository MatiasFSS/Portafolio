// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4XQKmlmz8fs4B_JIkXtenGYMH7k7PZw",
  authDomain: "portafolio-matias-be13f.firebaseapp.com",
  projectId: "portafolio-matias-be13f",
  storageBucket: "portafolio-matias-be13f.firebasestorage.app",
  messagingSenderId: "89148074128",
  appId: "1:89148074128:web:34a1f082c6183b051c1015"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp)