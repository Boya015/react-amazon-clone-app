import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGnBJ5YDOzmZAAc5gR3EEi9gxvVZj5dgY",
    authDomain: "zaio-25.firebaseapp.com",
    projectId: "zaio-25",
    storageBucket: "zaio-25.appspot.com",
    messagingSenderId: "302901451960",
    appId: "1:302901451960:web:ef8ec510dcdf935b40284d",
    measurementId: "G-EDVTWGZZJ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export  { db, auth };