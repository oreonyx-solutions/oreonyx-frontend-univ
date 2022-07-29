import { initializeApp } from 'firebase/app';

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB5ZkmN9XFIlLXcvbGFf-XvFa-z2FqTlAo",
  authDomain: "gtea-1.firebaseapp.com",
  projectId: "gtea-1",
  storageBucket: "gtea-1.appspot.com",
  messagingSenderId: "437587986232",
  appId: "1:437587986232:web:4919dc594bfabcdd2fe3cd",
  measurementId: "G-C600R7D6JM",
  };
  

const firebaseApp = () => initializeApp(firebaseConfig)

export default  firebaseApp 