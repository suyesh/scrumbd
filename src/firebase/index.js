import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSJX9231UpQ7B597IBb_tZMjS1fPkgxT8",
  authDomain: "scrumbd-3043a.firebaseapp.com",
  databaseURL: "https://scrumbd-3043a.firebaseio.com",
  projectId: "scrumbd-3043a",
  storageBucket: "scrumbd-3043a.appspot.com",
  messagingSenderId: "5652968728",
  appId: "1:5652968728:web:df717873b76f599f"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const database = firebase.database();

export { firestore, database, firebase };
