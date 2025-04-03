
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBT2A_P-9MHq1l3kaqCYGpb7eU0e54-SbM",
  authDomain: "recepies-60a3e.firebaseapp.com",
  projectId: "recepies-60a3e",
  storageBucket: "recepies-60a3e.firebasestorage.app",
  messagingSenderId: "186437754028",
  appId: "1:186437754028:web:fab4e5458682a0696b5309",
  measurementId: "G-NREBBP596L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()