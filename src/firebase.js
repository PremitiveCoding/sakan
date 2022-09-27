// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "sakan-fe2e6.firebaseapp.com",
  databaseURL: "https://sakan-fe2e6-default-rtdb.firebaseio.com",
  projectId: "sakan-fe2e6",
  storageBucket: "sakan-fe2e6.appspot.com",
  messagingSenderId: "226653362077",
  appId: "1:226653362077:web:50e3f39a201be7723a8174"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
