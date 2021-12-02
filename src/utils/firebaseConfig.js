import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCydwSFYd89UwTRS0i7cg-XVjVq-JaX4IA",
  authDomain: "ecommerce-dreamgreen.firebaseapp.com",
  projectId: "ecommerce-dreamgreen",
  storageBucket: "ecommerce-dreamgreen.appspot.com",
  messagingSenderId: "773301363277",
  appId: "1:773301363277:web:eeb60e0bffe9028af7f204"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
