import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: 'AIzaSyBj5wBh_lPmUtKKaKDxc4KO0u1-2D450pA',
    authDomain: 'chemian-63230.firebaseapp.com',
    databaseURL: 'https://chemian-63230.firebaseio.com',
    projectId: 'chemian-63230',
    storageBucket: 'chemian-63230.appspot.com',
    messagingSenderId: '828302993437',
    appId: '1:828302993437:web:cd28315326f84b7f47fef4',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();