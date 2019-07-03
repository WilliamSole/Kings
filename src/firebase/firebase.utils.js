import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAeOg6mL0EGhD-THR0vFlwDUAS-SZC2Ack",
    authDomain: "king-db.firebaseapp.com",
    databaseURL: "https://king-db.firebaseio.com",
    projectId: "king-db",
    storageBucket: "",
    messagingSenderId: "681543624310",
    appId: "1:681543624310:web:ff66d0dc66a264a5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;