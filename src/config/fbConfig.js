import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWAhjwMeoo6Pg2PFxL-tXhks9XcLyUqOU",
  authDomain: "dietifynigeria.firebaseapp.com",
  databaseURL: "https://dietifynigeria.firebaseio.com",
  projectId: "dietifynigeria",
  storageBucket: "dietifynigeria.appspot.com",
  messagingSenderId: "151193510038",
  appId: "1:151193510038:web:6cbebdf2bb640a0f1be2b7",
  measurementId: "G-31NSLE9GSE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
