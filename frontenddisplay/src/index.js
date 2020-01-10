import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyCGRJ0CUTUqzQrCwKwnP8ao7R0Hr29l2q8",
    authDomain: "frontdisplayapp.firebaseapp.com",
    databaseURL: "https://frontdisplayapp.firebaseio.com",
    projectId: "frontdisplayapp",
    storageBucket: "frontdisplayapp.appspot.com",
    messagingSenderId: "518129644054",
    appId: "1:518129644054:web:39391cff7f5c59322b3b37"
  };

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
