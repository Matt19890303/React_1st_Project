// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import some methods from firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
// this is using the Google Auth Provider
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();


// Creating a user document from Firebase
export const createUserDocumentFromAuth = async (userAuth) => {
  // Check if user document exists
  const userDocRef = doc(db, 'users', userAuth.uid);
  // Get user document
  const userSnapshot = await getDoc(userDocRef);
  // If user doesn't exist, create a new user document
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userDocRef;

};