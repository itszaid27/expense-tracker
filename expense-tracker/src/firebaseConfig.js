import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZ43DS53ZmyJWe9qqSzkIc5IVwsytHzBc",
    authDomain: "expensetracker-6ad98.firebaseapp.com",
    projectId: "expensetracker-6ad98",
    storageBucket: "expensetracker-6ad98.firebasestorage.app",
    messagingSenderId: "666936616340",
    appId: "1:666936616340:web:156136aade28d9d2e1db81"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
export default app;