import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-NDkT5wGiRnOv74BioZiyLOnIST17LC4",
  authDomain: "barrale-porfolio.firebaseapp.com",
  projectId: "barrale-porfolio",
  storageBucket: "barrale-porfolio.appspot.com",
  messagingSenderId: "1367578871",
  appId: "1:1367578871:web:452a632f53d5e9a9919bf2",
  measurementId: "G-FQ4M4E7Q7T",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
