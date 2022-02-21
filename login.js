// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3oPTL7N2fv3ucPLCzkFZj9QRfWryeWnk",
    authDomain: "test2-7f3ee.firebaseapp.com",
    databaseURL: "https://test2-7f3ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test2-7f3ee",
    storageBucket: "test2-7f3ee.appspot.com",
    messagingSenderId: "968101558034",
    appId: "1:968101558034:web:b18f070e4461a02337a5cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      alert(errorCode + errorMessage);
    });
});

document.getElementById("signin").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("login success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      alert(errorCode + errorMessage);
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});
