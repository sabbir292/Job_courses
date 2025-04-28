
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCga-v8aUeJnJLLhgkXiUFHjrjCnnXPelc",
  authDomain: "gamescore292.firebaseapp.com",
  projectId: "gamescore292",
  storageBucket: "gamescore292.firebasestorage.app",
  messagingSenderId: "896970890632",
  appId: "1:896970890632:web:cc6971cd61de3fddd2ae3d",
  measurementId: "G-MSPG2JZVD5"
};

if(getApps().length === 0){
    initializeApp(firebaseConfig);
}

const DB = getFirestore()
const AUTH = getAuth()

export {DB, AUTH}
// const analytics = getAnalytics(app);