import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBuqm0eWY_QMqJRRpc7dT-tfZHu_XFTl30",
//   authDomain: "problem-set-5-285221.firebaseapp.com",
//   databaseURL: "https://problem-set-5-285221.firebaseio.com",
//   projectId: "problem-set-5-285221",
//   storageBucket: "problem-set-5-285221.appspot.com",
//   messagingSenderId: "871976389684",
//   appId: "1:871976389684:web:248525d7f6f75831cbce61",
//   measurementId: "G-BH05YT97DJ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
