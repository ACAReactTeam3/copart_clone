import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth, dbStore } from "../firebase/firebase";
import { doc, setDoc } from 'firebase/firestore'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export let actionType = {
    userSignIn: 'user-signIn',
    userSignUp: 'user-signUp'
}

export const signIn = ( email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

export  const signUp = async (email, password, name, surname) => {   
    let db = getDatabase()
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          setDoc(doc(dbStore, 'user', email), {
            name: name,
            surname: surname,
            posts: [],
            saved: [],
            messages: []
          })
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      }); 
  }

export const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
             setDoc(doc(dbStore, 'user', auth.currentUser.email), {
                    posts: [],
                    saved: [],
                    messages: []
                    })
        }).catch((error) => {
        console.log(error)
        });
    }