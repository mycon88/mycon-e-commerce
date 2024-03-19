// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mycon-e-commerce.firebaseapp.com",
  projectId: "mycon-e-commerce",
  storageBucket: "mycon-e-commerce.appspot.com",
  messagingSenderId: "290401818603",
  appId: "1:290401818603:web:52d680bdf85c61e9b82bae"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);