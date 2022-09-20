// Import the functions you need from the SDKs you need





import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


import {getStorage} from 'firebase/storage'

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import {
  setCookie,
  removeCookie,
  removeLocalStorage,
  setLocalStorage,
} from "../helpers/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// functions for authentication

//login function

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const loginWithEmailandPassword = async (email, password) => {

  if (!email || !password) return;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);

    return userCredential;
  } catch (error) {
    console.log(error);

    if (error.code === "auth/wrong-password") {
      alert("Wrong password");
    }

    if (error.code === "auth/user-not-found") {
      alert("User not found");
    }
  }
};

//sign Up functions

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
      
    );

    console.log(userCredential);

    return userCredential;
  } catch (error) {

    alert('User already exists:(');
    console.log(error);
  }
};




export const userAuthState = async () => {

  onAuthStateChanged(auth, (user) => {

    if (user) {
      console.log(user);

      user.getIdToken().then((token) => {
        console.log(token);

        setCookie("token", token);
        setLocalStorage("user", token);

        return token;
      });
      
    } else {
      console.log("No user");
      return null;
    }
  });
};



// sign out functions

export const logOut = async () => {

  

  try {
    const response = await signOut(auth);

    removeCookie("token");
    removeLocalStorage("user");

    console.log("Logged out!");
  } catch (error) {
    alert("Error logging out");
    console.log(error);
  }

 
};

//firestore databse

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const snapShot = await getDoc(userRef);

  // if user does not exists in the database, create a new user

  if (!snapShot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    const coin = 0;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        coin,
        ...additionalData,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      }

      console.log("error creating user", error.message);
    }
  }

  return userRef;
};



export const getUserId = async () => {

  const user = auth.currentUser;

  if (user) {
    
        console.log("user id: " + user.uid);

        return user.uid
  }

  return null;
}



export const getIdToken = async () => {
  
    const user = auth.currentUser;
  
    if (user) {
      
          console.log("token: " + user.getIdToken());
  
          return user.getIdToken()
    }
  
    return null;
  }



// create storage




export const storage = getStorage(fireBaseApp);






