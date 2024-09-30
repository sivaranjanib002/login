import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1fTjwVuVUVyNnAdmsLcP7eGaCbf8jTH8",
  authDomain: "login-72a0b.firebaseapp.com",
  projectId: "login-72a0b",
  storageBucket: "login-72a0b.appspot.com",
  messagingSenderId: "95358683524",
  appId: "1:95358683524:web:fce5d23bef6425b4ef75d1",
  measurementId: "G-R8W6FG9DX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
