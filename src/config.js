import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAe6HmLHIfvwzeTDsZbJOxs3akYWu90kp8",
    authDomain: "instagram-39da0.firebaseapp.com",
    databaseURL: "https://instagram-39da0-default-rtdb.firebaseio.com",
    projectId: "instagram-39da0",
    storageBucket: "instagram-39da0.appspot.com",
    messagingSenderId: "356197994200",
    appId: "1:356197994200:web:27d2131b54aab0af6dd1ad",
    measurementId: "G-0B9BZLGBYC"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };