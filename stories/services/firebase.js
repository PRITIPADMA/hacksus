import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARInvNAVmrjxnFtzWDeDf60khFJWJ7HqI",
  authDomain: "hacksus-stories.firebaseapp.com",
  projectId: "hacksus-stories",
  storageBucket: "hacksus-stories.appspot.com",
  messagingSenderId: "68274683414",
  appId: "1:68274683414:web:6632283f20891a987a7f37",
  measurementId: "G-N635EGFNQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
