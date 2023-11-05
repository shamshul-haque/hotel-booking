import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const secretKey = import.meta.env;
const firebaseConfig = {
  apiKey: secretKey.VITE_apiKey,
  authDomain: secretKey.VITE_authDomain,
  projectId: secretKey.VITE_projectId,
  storageBucket: secretKey.VITE_storageBucket,
  messagingSenderId: secretKey.VITE_messagingSenderId,
  appId: secretKey.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
