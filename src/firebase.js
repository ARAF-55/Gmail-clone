import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrVxoPPglRsKLjj0HlzrTY5dC_fHAe-Ag",
    authDomain: "fir-fba77.firebaseapp.com",
    projectId: "fir-fba77",
    storageBucket: "fir-fba77.appspot.com",
    messagingSenderId: "635750426979",
    appId: "1:635750426979:web:e142ac10f712fc0987cb56"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const colRef = collection(db, 'emails');

export {
    db, auth, provider, colRef, addDoc, serverTimestamp,
    query, orderBy, onSnapshot, signInWithPopup, onAuthStateChanged,
    signOut
};
