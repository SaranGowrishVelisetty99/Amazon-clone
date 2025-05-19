import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzTZfih6hcjr6bJmVcqL-7Y30n2WTGxmU",
    authDomain: "ac1234.firebaseapp.com",
    databaseURL: "https://ac1234.firebaseio.com",
    projectId: "ac1234",
    storageBucket: "ac1234.appspot.com",
    messagingSenderId: "889353560130",
    appId: "1:889353560130:web:b303245565cd8c95ee8ddb",
    measurementId: "G-9H9KZK6ZJQ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{db, auth, storage};