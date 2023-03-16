// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUc5gafBpkSdJk_7jnvxsKyWrIXI7HzAU",
  authDomain: "etical-hacking-e21fb.firebaseapp.com",
  projectId: "etical-hacking-e21fb",
  storageBucket: "etical-hacking-e21fb.appspot.com",
  messagingSenderId: "608497440039",
  appId: "1:608497440039:web:3a55445e061ffbdfd80502",
  measurementId: "G-EKFQ7LE5V0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);