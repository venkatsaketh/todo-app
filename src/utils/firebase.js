// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlGKNoJFHtZY5m88YGrtnHdhqD_eLSDuA",
  authDomain: "todo-app-a9adc.firebaseapp.com",
  projectId: "todo-app-a9adc",
  storageBucket: "todo-app-a9adc.appspot.com",
  messagingSenderId: "531141681184",
  appId: "1:531141681184:web:4698557781968534a5dc45",
  measurementId: "G-C948G2KR80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
