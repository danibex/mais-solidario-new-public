import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQaOqW_uUyj_vNS-TiBL91IicCELf3mMo",
  authDomain: "mais-solidario-new.firebaseapp.com",
  projectId: "mais-solidario-new",
  storageBucket: "mais-solidario-new.appspot.com",
  messagingSenderId: "149115337320",
  appId: "1:149115337320:web:28fea02bac4a6e927719dd",
  measurementId: "G-GBPL279TEC"
};

export const app = initializeApp(firebaseConfig);