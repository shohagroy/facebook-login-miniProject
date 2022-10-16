// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjevAzN6zYaEQZcNIdGUusxGVaYt81EtE",
  authDomain: "explore-firebase-explore.firebaseapp.com",
  projectId: "explore-firebase-explore",
  storageBucket: "explore-firebase-explore.appspot.com",
  messagingSenderId: "545224057058",
  appId: "1:545224057058:web:12aa86abce50b916fc7ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;