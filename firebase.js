// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAZdkFjfSMjkwwkggruRFsk9MymDQZoHh4",
  authDomain: "recipes-ece06.firebaseapp.com",
  projectId: "recipes-ece06",
  storageBucket: "recipes-ece06.appspot.com",
  messagingSenderId: "1057474541201",
  appId: "1:1057474541201:web:7bfec824d601112b3df130",
  measurementId: "G-984LC16J90",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const firestore = getFirestore(app);
