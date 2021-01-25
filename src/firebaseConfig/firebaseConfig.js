import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0sp_GrNPpzqBa_W5shg0GZk_hhliYMao",
  authDomain: "proforma-application.firebaseapp.com",
  projectId: "proforma-application",
  storageBucket: "proforma-application.appspot.com",
  messagingSenderId: "74756999837",
  appId: "1:74756999837:web:a038beb4221bb42d92a274",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
