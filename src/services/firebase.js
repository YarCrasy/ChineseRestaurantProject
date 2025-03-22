import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxMX09_wK8rBZHkoaJBAmRAVjN-Xr2M4A",
    authDomain: "chuanminfusion.firebaseapp.com",
    databaseURL: "https://chuanminfusion-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chuanminfusion",
    storageBucket: "chuanminfusion.firebasestorage.app",
    messagingSenderId: "967808051756",
    appId: "1:967808051756:web:d49e42925efdc5d2ccbf89",
    measurementId: "G-NKMNR72Q18"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };