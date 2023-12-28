import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext } from 'react'
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDrb3UZL1VPSYsp7oTv--H-ta5a6OlVeFI",
  authDomain: "news-app-1607f.firebaseapp.com",
  projectId: "news-app-1607f",
  storageBucket: "news-app-1607f.appspot.com",
  messagingSenderId: "219448404129",
  appId: "1:219448404129:web:0083fbcddad4896324e8e0"

};

const firebaseApp = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }


  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
        {props.children}
    </FirebaseContext.Provider>
  )
}

export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider()