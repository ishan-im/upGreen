// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  showLoginError,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAtREIZ2EcxRR2N7JMlvrhkkExNC8yHqCs",
  authDomain: "up-green-40f76.firebaseapp.com",
  projectId: "up-green-40f76",
  storageBucket: "up-green-40f76.appspot.com",
  messagingSenderId: "1074881011401",
  appId: "1:1074881011401:web:0a5fa653dbb7eca1473718",
  measurementId: "G-37ME4KZP5B",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();




// functions for authentication

export const signInWithGooglePopUp = () =>

  signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>

  signInWithRedirect(auth, provider);

export const loginWithEmailandPassword = async (email, password) => {
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
    showLoginError(error);
  }
};




export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);

    return userCredential;
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};




export const userAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);

      return user;
    } else {
      console.log("No user");
      return null;
    }
  });
};

export const logOut = async () => {
  try {
    await auth.signOut(auth);
    console.log("Logged out");
  } catch (error) {
    console.log(error);
  }
};

//functions login with google








//firestore databse



export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const snapShot = await getDoc(userRef);

  // if user does not exists in the database, create a new user

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

}