import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6bg1a0hII8emiYrx3zsxKkG8L1CXh6zc",
  authDomain: "challenge-980b3.firebaseapp.com",
  databaseURL: "https://challenge-980b3.firebaseio.com",
  projectId: "challenge-980b3",
  storageBucket: "challenge-980b3.appspot.com",
  messagingSenderId: "162641177456",
  appId: "1:162641177456:web:a2f637eda038a4d78dbdb5",
  measurementId: "G-38ZK9C0NHF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};