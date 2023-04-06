import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNcasAlHrE0VRyhPJ5UKrSzaoEYWrI7No",
    authDomain: "pipo-foe.firebaseapp.com",
    projectId: "pipo-foe",
    storageBucket: "pipo-foe.appspot.com",
    messagingSenderId: "150174467296",
    appId: "1:150174467296:web:d4c14fdb84b649ed677c85",
    measurementId: "G-C9R540PSBE"
  };
const firebaseSApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
 const db = firebaseSApp.firestore();
 const googleProvider = new firebase.auth.GoogleAuthProvider();
 const facebookProvider = new firebase.auth.FacebookAuthProvider();
 const TwitterProvider = new firebase.auth.TwitterAuthProvider();
 const GithubProvider = new firebase.auth.GithubAuthProvider();
 const storage = firebase.storage();
export default {auth, db, storage};
export  {db, googleProvider, facebookProvider, TwitterProvider,GithubProvider};
export  {auth};
export  {storage};