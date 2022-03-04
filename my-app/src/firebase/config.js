// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHOxtVKAyRF9mju9_EF5uT1yPmwBqtyE",
  authDomain: "neog-todo-c6f9e.firebaseapp.com",
  projectId: "neog-todo-c6f9e",
  storageBucket: "neog-todo-c6f9e.appspot.com",
  messagingSenderId: "666298772588",
  appId: "1:666298772588:web:0ed93c5148e075ae393c49",
  measurementId: "G-NCSD1M3WG8"
};
// Initialize Firebase
const app=initializeApp(firebaseConfig);

// init service
const db=getFirestore(app);

// collection ref 
const colRef=collection(db,"todos");

// get collection data



export {db,colRef};



