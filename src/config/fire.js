import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDVhOCECcTJGRd9kEnk80DhdWuCBQ8mvwc",
    authDomain: "melbourne-app.firebaseapp.com",
    databaseURL: "https://melbourne-app.firebaseio.com",
    projectId: "melbourne-app",
    storageBucket: "melbourne-app.appspot.com",
    messagingSenderId: "780003574752",
    appId: "1:780003574752:web:c620a2855b723c55bce185",
    measurementId: "G-47CX5JMRTE"
  };

  const fire = firebase.initializeApp(config);

  export default fire;