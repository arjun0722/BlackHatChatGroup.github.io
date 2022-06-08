import firebase from "firebase"


 
const firebaseConfig = {
  apiKey: "AIzaSyDGGxRFocvF1TCJXvfnaz9SQ5hnsTXRPh4",
  authDomain: "wassup-app-4cc0b.firebaseapp.com",
  databaseURL: "https://wassup-app-4cc0b-default-rtdb.firebaseio.com",
  projectId: "wassup-app-4cc0b",
  storageBucket: "wassup-app-4cc0b.appspot.com",
  messagingSenderId: "725108861987",
  appId: "1:725108861987:web:ef895951424928199fd596",
  measurementId: "G-ER5H94JE9W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;