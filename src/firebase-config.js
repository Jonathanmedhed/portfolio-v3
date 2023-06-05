import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyANTOkxPh8ttaHNYS50Y09GSozuNHHXTc8",
  authDomain: "portfolio-v3-jonathan.firebaseapp.com",
  projectId: "portfolio-v3-jonathan",
  storageBucket: "portfolio-v3-jonathan.appspot.com",
  messagingSenderId: "567389500969",
  appId: "1:567389500969:web:3e75d96cfab6c4b78b4e38",
  measurementId: "G-TJHHT2VRZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
