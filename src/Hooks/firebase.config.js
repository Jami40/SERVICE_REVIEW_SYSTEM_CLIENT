// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPK9AtoyHt2xeQIteGxOoQZXIAsIVt28s",
  authDomain: "review-service-c6108.firebaseapp.com",
  projectId: "review-service-c6108",
  storageBucket: "review-service-c6108.firebasestorage.app",
  messagingSenderId: "419045008096",
  appId: "1:419045008096:web:35b56670b26d4a596ae685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)