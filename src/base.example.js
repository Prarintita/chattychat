import firebase from 'firebase/app'

// Initialize Firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGE SENDER ID"
  };
  firebase.initializeApp(config);

  const app = firebase.initializeApp(config)