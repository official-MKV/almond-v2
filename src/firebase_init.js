// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyCQ4e1ilr2EnQfZr6HYF1n3Cabr4RZ_LLY",
    authDomain: "almond-wait-list.firebaseapp.com",
    projectId: "almond-wait-list",
    storageBucket: "almond-wait-list.appspot.com",
    messagingSenderId: "188702699065",
    appId: "1:188702699065:web:a9375326018f590452e7e8",
    measurementId: "G-0WVKTQ5G6G"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
