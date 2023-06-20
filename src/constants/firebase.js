import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "taipei-parking-v2-389902.firebaseapp.com",
  projectId: "taipei-parking-v2-389902",
  storageBucket: "taipei-parking-v2-389902.appspot.com",
  messagingSenderId: "929229085215",
  appId: "1:929229085215:web:407f206255bc40ae4bd32a",
  measurementId: "G-61PC8D8VEE"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()