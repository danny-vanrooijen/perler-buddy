import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCQDOxw4LDKUJpgwuDSOSGUTzCTBM-k0k",
  authDomain: "perler-buddy.firebaseapp.com",
  projectId: "perler-buddy",
  storageBucket: "perler-buddy.appspot.com",
  messagingSenderId: "685123181970",
  appId: "1:685123181970:web:80874af29b68d5c20ab54b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
