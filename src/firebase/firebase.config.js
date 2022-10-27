// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUUezmo3ch2uRkIAN8OxJKYH4u8he7pgs",
  authDomain: "learning-platform-1c1cd.firebaseapp.com",
  projectId: "learning-platform-1c1cd",
  storageBucket: "learning-platform-1c1cd.appspot.com",
  messagingSenderId: "830424218639",
  appId: "1:830424218639:web:b36d84b2f90d42b040b77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;