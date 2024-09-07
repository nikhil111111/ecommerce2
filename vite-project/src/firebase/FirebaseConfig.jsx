// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpJqotpFEw59-XD567Ev0wS_M6rPvJzko",
  authDomain: "myfirstapp-84515.firebaseapp.com",
  projectId: "myfirstapp-84515",
  storageBucket: "myfirstapp-84515.appspot.com",
  messagingSenderId: "910387250870",
  appId: "1:910387250870:web:4b524e1ca0f267b8c1c817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth}