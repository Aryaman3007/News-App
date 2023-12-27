import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrb3UZL1VPSYsp7oTv--H-ta5a6OlVeFI",
  authDomain: "news-app-1607f.firebaseapp.com",
  projectId: "news-app-1607f",
  storageBucket: "news-app-1607f.appspot.com",
  messagingSenderId: "219448404129",
  appId: "1:219448404129:web:0083fbcddad4896324e8e0"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()