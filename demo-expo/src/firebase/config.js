import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBqskZvuQ9ULtMzlLM-V5tNXJGZj-8Dxcs",
  authDomain: "desarrollo-movil-3033e.firebaseapp.com",
  projectId: "desarrollo-movil-3033e",
  storageBucket: "desarrollo-movil-3033e.firebasestorage.app",
  messagingSenderId: "423589995682",
  appId: "1:423589995682:web:0191770765f2e69325a3fb"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();