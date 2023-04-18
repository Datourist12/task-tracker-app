import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAXPOShIHRIZ-sgm8MHdJxwDoBmC8HSIc",
  authDomain: "sesl-task-tracker.firebaseapp.com",
  projectId: "sesl-task-tracker",
  storageBucket: "sesl-task-tracker.appspot.com",
  messagingSenderId: "776785974187",
  appId: "1:776785974187:web:0a3471535172635713b8ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
