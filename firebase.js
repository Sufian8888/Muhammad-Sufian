// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArNbcpffEe0Fkz3uO_HmtTJZNv2RjD5z0",
    authDomain: "sample-46b1c.firebaseapp.com",
    projectId: "sample-46b1c",
    storageBucket: "sample-46b1c.firebasestorage.app",
    messagingSenderId: "741661158581",
    appId: "1:741661158581:web:0c1d7c940f3aefb9ff22fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, addDoc, collection };