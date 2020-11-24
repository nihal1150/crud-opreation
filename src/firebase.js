import App from "./App";
import  firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyAZYFsRQLIV-FSbgrD8ucN8jYlQG75J48s",
  authDomain: "crud-operation-63abc.firebaseapp.com",
  databaseURL: "https://crud-operation-63abc.firebaseio.com",
  projectId: "crud-operation-63abc",
  storageBucket: "crud-operation-63abc.appspot.com",
  messagingSenderId: "585657789118",
  appId: "1:585657789118:web:b2e944aefde535e9c34cef"
  };

  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
