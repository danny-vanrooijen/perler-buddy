import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKCe4wnsihRcskEwJTDrVfCa82e2Wrlp0",
  authDomain: "simple-todo-list-dvr.firebaseapp.com",
  projectId: "simple-todo-list-dvr",
  storageBucket: "simple-todo-list-dvr.appspot.com",
  messagingSenderId: "473834038411",
  appId: "1:473834038411:web:1b473111f764035796608e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
