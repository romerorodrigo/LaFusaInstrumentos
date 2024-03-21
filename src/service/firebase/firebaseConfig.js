import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5B5-8fnaAdduJ9itQDFImT7lgGvn-O28",
  authDomain: "lafusa.firebaseapp.com",
  projectId: "lafusa",
  storageBucket: "lafusa.appspot.com",
  messagingSenderId: "936429994756",
  appId: "1:936429994756:web:ec5a4bf437013ee2608651"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);