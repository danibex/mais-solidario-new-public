import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();



const firebaseConfig = {
  apiKey: "AIzaSyCQaOqW_uUyj_vNS-TiBL91IicCELf3mMo",
  authDomain: "mais-solidario-new.firebaseapp.com",
  projectId: "mais-solidario-new",
  storageBucket: "mais-solidario-new.appspot.com",
  messagingSenderId: "149115337320",
  appId: "1:149115337320:web:28fea02bac4a6e927719dd",
  measurementId: "G-GBPL279TEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(`Usuário: ${user} Credenciais: ${userCredential}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });