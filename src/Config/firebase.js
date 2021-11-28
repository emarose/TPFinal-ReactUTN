import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCqFsL_P__QjMbe4Im7X3CfJOw3za4xkIk",
    authDomain: "proyecto1-4ce94.firebaseapp.com",
    projectId: "proyecto1-4ce94",
    storageBucket: "proyecto1-4ce94.appspot.com",
    messagingSenderId: "406741643322",
    appId: "1:406741643322:web:487908192405fe6a5a8503",
    measurementId: "G-Z8KZVGSCBE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase