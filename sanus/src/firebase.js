import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDq9Q8UbnAXgvQeSGd-hc9J2uOfqkSwJmk",
    authDomain: "carson-web-studio-reviews.firebaseapp.com",
    projectId: "carson-web-studio-reviews",
    storageBucket: "carson-web-studio-reviews.firebasestorage.app",
    messagingSenderId: "173684844543",
    appId: "1:173684844543:web:d53ca6ae630787688da9ca",
};

export const db = getFirestore(initializeApp(firebaseConfig));