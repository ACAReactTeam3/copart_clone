import "./App.css";
import React, { useState } from "react";
import SignIn from './components/registration/SignIn'
import SignUp from './components/registration/SignUp'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './components/About'
import Profile from './components/Profile'
import CreatePost from './components/CreatePost'

import { getDatabase} from "firebase/database";
import User from './components/User'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "./firebase/firebase";

function App() {    
  let db = getDatabase();
  let navigate = useNavigate()
  let dispatch = useDispatch()
 
  let user = useSelector(function(store) {
    return store.map((item => {return item}))
  })
  const signIn = ( email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

  /* const signUp = (newNickname, newUserName, newSurname, newUserPassword) => {
    dispatch({
      type: 'user-signUp',
      payload: { 
          nickname: newNickname,
          name: newUserName,
          surname: newSurname,
          password: newUserPassword
        }
    })
     db = set(ref(db, 'users/ ' + 'all-users'), {
      username: newNickname,
      password: newUserName,
      surname: newSurname,
      userPassword: newUserPassword
    });
    navigate('/signin')
  } */
  const signUp = async (email, password) => {   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      }); 
  }

  const logout = async () => {
    signOut(auth).then(() => {
      navigate('/signin')
    }).catch((error) => {
        console.log(error.message)
    });
  }
  const addedPost = (brand, model, color, price, moneyType, mileage, distanceType, horsepower, body, gearbox, handDrive, engine, additionalInfo) => {
    return dispatch({
      type: 'added-user-post',
      payload: {
        brand: brand,
        model: model,
        color: color,
        price: price,
        moneyType: moneyType,
        mileage: mileage,
        distanceType: distanceType,
        horsepower: horsepower,
        body: body,
        gearbox: gearbox,
        handDrive: handDrive,
        engine: engine,
        additionalInfo: additionalInfo
      }
    })
  }
  return (
    <>
      <Routes>
          <Route path='/*' element={<Home />} > Home </Route>
          <Route path='/user' element={<User />}> User
            <Route path='about' element={<About />}> about </Route>
            <Route path='createpost' element={<CreatePost addedPost={addedPost} />} > createPost </Route>
            <Route path='profile' element={<Profile logout={logout} />} > profile </Route>
          </Route>
          <Route path='signin'  element={<SignIn signIn={signIn} />}>  Sign In</Route> 
          <Route path='signup' element={<SignUp username={user} signUp={signUp} /> }> Sign Up</Route>
        </Routes>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
