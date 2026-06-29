// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnTL4BvbKq-eB5cWrArb9_6gjH3PHLiew",
  authDomain: "dishtribute-app.firebaseapp.com",
  projectId: "dishtribute-app",
  storageBucket: "dishtribute-app.firebasestorage.app",
  messagingSenderId: "73371840485",
  appId: "1:73371840485:web:12a916c5aa27b0df18890c",
  measurementId: "G-1CQS9QXSDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);