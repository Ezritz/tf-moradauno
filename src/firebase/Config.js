import  firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCjnAKuhWiPuFwTXEos91cXUNtwt3OPVsY",
    authDomain: "morada-uno-012022.firebaseapp.com",
    projectId: "morada-uno-012022",
    storageBucket: "morada-uno-012022.appspot.com",
    messagingSenderId: "895170281549",
    appId: "1:895170281549:web:b2190e1916be060b491c04"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage};