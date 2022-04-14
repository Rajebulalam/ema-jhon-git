// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5kCwAYsBRYF4C6VW8mzI3WPmYspM1S4s",
  authDomain: "ema-jhon-git.firebaseapp.com",
  projectId: "ema-jhon-git",
  storageBucket: "ema-jhon-git.appspot.com",
  messagingSenderId: "294456375088",
  appId: "1:294456375088:web:08ac91a3e043b69503faf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;