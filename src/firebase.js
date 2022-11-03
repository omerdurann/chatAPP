import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZlbzFdmTW0Nq06ztnL08x__Fi5O04bZg",
  authDomain: "chatapp-f0410.firebaseapp.com",
  databaseURL: "https://chatapp-f0410-default-rtdb.firebaseio.com",
  projectId: "chatapp-f0410",
  storageBucket: "chatapp-f0410.appspot.com",
  messagingSenderId: "916135653260",
  appId: "1:916135653260:web:fe5a734f60960a655a30a9",
  measurementId: "G-WQVQHP4W5B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()