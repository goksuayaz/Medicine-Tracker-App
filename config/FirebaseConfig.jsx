// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEbyR4bd7jItvqIXx8r2ArrO87DvjLqU0",
    authDomain: "testapp-350d5.firebaseapp.com",
    projectId: "testapp-350d5",
    storageBucket: "testapp-350d5.firebasestorage.app",
    messagingSenderId: "483507605422",
    appId: "1:483507605422:web:fa95c374b29b2f6cf9023f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);