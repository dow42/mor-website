import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa7jZAcK9mLSlv2ccAV-G11jy-Dj3nxR8",
  authDomain: "axomiyatchat.firebaseapp.com",
  projectId: "axomiyatchat",
  storageBucket: "axomiyatchat.firebasestorage.app",
  messagingSenderId: "745124651657",
  appId: "1:745124651657:web:a0c3398b50a133482f9c58",
  measurementId: "G-S1ZPTCH9WF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };