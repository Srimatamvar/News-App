// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//getAuth for authentication, getFirestore for database, getStorage to store any uploaded file/image
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_S5c7EoRmpATEMA7iOOxXnB5dIKOw9ls",
  authDomain: "my-app-f4049.firebaseapp.com",
  projectId: "my-app-f4049",
  storageBucket: "my-app-f4049.appspot.com",
  messagingSenderId: "177923042167",
  appId: "1:177923042167:web:654c8321a2fcc909d48f72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
