import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyAvsVtaA02_RESZnTyjZaHXHoGb7S5sO4Y",
   authDomain: "immocues.firebaseapp.com",
   databaseURL: "https://immocues.firebaseio.com",
   projectId: "immocues",
   storageBucket: "immocues.appspot.com",
   messagingSenderId: "997299030847"
 };
 firebase.initializeApp(config);

const database = firebase.database();

export default database;
