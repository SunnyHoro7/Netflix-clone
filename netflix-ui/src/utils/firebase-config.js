import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyjfFQeqZ-FXZwN6ZdD728QqMEL6ajAso",
  authDomain: "react-netflix-clone-3ba32.firebaseapp.com",
  projectId: "react-netflix-clone-3ba32",
  storageBucket: "react-netflix-clone-3ba32.appspot.com",
  messagingSenderId: "1085005443773",
  appId: "1:1085005443773:web:ef43cacacdfd62ac7cfdd4",
  measurementId: "G-VF59DWB8GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
