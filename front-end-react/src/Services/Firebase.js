import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL6HOcOvesfaa9m1z3el2kDjm_TlxN6rk",
  authDomain: "glossy-protocol-314323.firebaseapp.com",
  projectId: "glossy-protocol-314323",
  storageBucket: "glossy-protocol-314323.appspot.com",
  messagingSenderId: "611745384469",
  appId: "1:611745384469:web:c14d18c75480b72199261c",
  measurementId: "G-956DMRN27M",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err);
  }
};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBL6HOcOvesfaa9m1z3el2kDjm_TlxN6rk",
//   authDomain: "glossy-protocol-314323.firebaseapp.com",
//   projectId: "glossy-protocol-314323",
//   storageBucket: "glossy-protocol-314323.appspot.com",
//   messagingSenderId: "611745384469",
//   appId: "1:611745384469:web:c14d18c75480b72199261c",
//   measurementId: "G-956DMRN27M"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
