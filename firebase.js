import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCM16TEh-0aptYSsbBW5wUPqfKLivuHhho",
  authDomain: "donateapp-99c9b.firebaseapp.com",
  databaseURL: "https://donateapp-99c9b.firebaseio.com",
  projectId: "donateapp-99c9b",
  storageBucket: "donateapp-99c9b.appspot.com",
  messagingSenderId: "725479593714",
  appId: "1:725479593714:web:e6f40584043f0564d1a26b"
};

const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {app, projectStorage, projectFirestore};