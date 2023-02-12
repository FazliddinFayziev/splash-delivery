import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCeNzNXePSG7c4L0-epNxoPexWjTtfZZu0",
    authDomain: "splash-admin-75008.firebaseapp.com",
    projectId: "splash-admin-75008",
    storageBucket: "splash-admin-75008.appspot.com",
    messagingSenderId: "538241282966",
    appId: "1:538241282966:web:05d3d3fad358024011a3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)