// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjAI7Fx1oecKis3U9s73d9yzKf8UEYwpQ",
  authDomain: "authnasa.firebaseapp.com",
  projectId: "authnasa",
  storageBucket: "authnasa.appspot.com",
  messagingSenderId: "1002347171311",
  appId: "1:1002347171311:web:775e0727f4511958e3ba1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
