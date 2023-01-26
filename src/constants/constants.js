import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebase/firebase";

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
          db = set(ref(db, 'users/ ' + user.uid), {
            name: name,
            surname: surname,
            posts: [],
            saved: []
          });
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      }); 
  }