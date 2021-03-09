import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDC-WHJYNmq5z7vVh2LY4UckbfV3wQmffA",
  authDomain: "apex-clothing-db.firebaseapp.com",
  projectId: "apex-clothing-db",
  storageBucket: "apex-clothing-db.appspot.com",
  messagingSenderId: "831896642690",
  appId: "1:831896642690:web:ea0b4495c63d3a53d3c09b",
  measurementId: "G-V7J4BHK2KG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
