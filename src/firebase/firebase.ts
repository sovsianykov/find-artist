import { getFirestore } from "@firebase/firestore"
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9qaIQjDZ3PBy5e7kiDGgQexnk3QIPZwE",
    authDomain: "semiotic-creek-326913.firebaseapp.com",
    projectId: "semiotic-creek-326913",
    storageBucket: "semiotic-creek-326913.appspot.com",
    messagingSenderId: "468726893424",
    appId: "1:468726893424:web:e5be6951f62ae06db2ddb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
