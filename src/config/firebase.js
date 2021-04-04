import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArCJfVTzGT20o-nTHZL4xQVBIeYwJVDSA",
    authDomain: "football-site-13535.firebaseapp.com",
    databaseURL: "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "football-site-13535",
    storageBucket: "football-site-13535.appspot.com",
    messagingSenderId: "403898425612",
    appId: "1:403898425612:web:cf61e35e06d06f54c1e929"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();