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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }


    return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;