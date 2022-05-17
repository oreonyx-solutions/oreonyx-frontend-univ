import { initializeApp } from 'firebase/app';

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDV7SP3CnDJwzijawWkTr4uLCJfsE-Ct4s",
  authDomain: "oreonyx-tg.firebaseapp.com",
  databaseURL: "https://oreonyx-tg-db0.europe-west1.firebasedatabase.app/",
  projectId: "oreonyx-tg",
  storageBucket: "oreonyx-tg.appspot.com",
  messagingSenderId: "53313696888",
  appId: "1:53313696888:web:2bed81ef4587a60453e98d",
  measurementId: "G-71707P6NV7"
  };
  

const firebaseApp = () => initializeApp(firebaseConfig)

export default  firebaseApp 