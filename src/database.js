import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_rfKSRKpwHy0gbImIUaphKKqilcxsefA",
    authDomain: "todo-app-692a4.firebaseapp.com",
    projectId: "todo-app-692a4",
    storageBucket: "todo-app-692a4.appspot.com",
    messagingSenderId: "1000640634101",
    appId: "1:1000640634101:web:8e02bb00dccbacef38f9bc"
});

const db = firebaseApp.firestore();

export default db;
