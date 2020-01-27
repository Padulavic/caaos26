import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC7UnViBGegiVoUrvkCIegncHySi4VFYE4",
    authDomain: "caaos26.firebaseapp.com",
    databaseURL: "https://caaos26.firebaseio.com",
    projectId: "caaos26",
    storageBucket: "caaos26.appspot.com",
    messagingSenderId: "21515275382",
    appId: "1:21515275382:web:1013eed6262430a440a357"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage();