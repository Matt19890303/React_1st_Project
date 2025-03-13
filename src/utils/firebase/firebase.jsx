// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuHb5P11fSIz6X6XEmBJ1ZX7zt_mm0GRE",
    authDomain: "reactproject1-2062a.firebaseapp.com",
    projectId: "reactproject1-2062a",
    storageBucket: "reactproject1-2062a.firebasestorage.app",
    messagingSenderId: "600635194863",
    appId: "1:600635194863:web:47b7f0b287805013694a1a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
// Sign in with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
