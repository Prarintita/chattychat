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

// Configure authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

// Configure database and Rebase
const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base