import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
export const signup = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    window.alert(error)
    console.log(error);
    return error;
  }
};
export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
    window.alert("Incorrect username or password")
    return error;
  }
};
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err.message);
    return <div>Help</div>;
  }
};