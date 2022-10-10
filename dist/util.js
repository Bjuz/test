// src/index.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDMb4t2EW5NyzYlsN5yI6ueuIrxuKR3EmE",
  authDomain: "municipalidad-ad862.firebaseapp.com",
  projectId: "municipalidad-ad862",
  storageBucket: "municipalidad-ad862.appspot.com",
  messagingSenderId: "430734355108",
  appId: "1:430734355108:web:4b087296a8dd0919225431",
  measurementId: "G-BWDKK1DMRC"
});

const auth = getAuth(firebaseApp);
var id = "empty";

export  function LoginFb (email,password) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      id = userCredential;
    const user = userCredential.user;
    console.log("Login Ok");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);

  }).then((e)=>{
    if(id == "empty"){
      return("Fail to loggin");
    }else{
      return("Login Ok");
    }
  });
  return("Login Ok");

  };




  





