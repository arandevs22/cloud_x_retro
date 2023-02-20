// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeVpQNWHpbmHPfHhBIDDAWOugH1MTC4Qo",
  authDomain: "arandevs-a4605.firebaseapp.com",
  projectId: "arandevs-a4605",
  storageBucket: "arandevs-a4605.appspot.com",
  messagingSenderId: "858077889437",
  appId: "1:858077889437:web:a85090f4849cd28777a574",
  measurementId: "G-B94ZTXE061",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
