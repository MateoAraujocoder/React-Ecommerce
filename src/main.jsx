import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrLgqoIoqheU11wUJDd06fj4_gv6Vpf9k",
  authDomain: "samsung-ecommerce-bd02a.firebaseapp.com",
  projectId: "samsung-ecommerce-bd02a",
  storageBucket: "samsung-ecommerce-bd02a.appspot.com",
  messagingSenderId: "430211384851",
  appId: "1:430211384851:web:b0c87b4bc8b6e8f34aa1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)