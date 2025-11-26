// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf1C5XkSvseFiQDJZd_DEnVS9lfza7Q9w",
  authDomain: "netflixgpt-aac50.firebaseapp.com",
  projectId: "netflixgpt-aac50",
  storageBucket: "netflixgpt-aac50.firebasestorage.app",
  messagingSenderId: "314228182172",
  appId: "1:314228182172:web:fcaa8964ec6661e0d2f159",
  measurementId: "G-Z7J6ENF5VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
