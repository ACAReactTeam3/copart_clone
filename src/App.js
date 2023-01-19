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

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import User from './components/User'

function App() {   
  const firebaseConfig = {
    apiKey: "AIzaSyBpli-BYj4w3p1icnZkMVwZ4B73X4RgA44",
    authDomain: "copartclone-b2247.firebaseapp.com",
    projectId: "copartclone-b2247",
    storageBucket: "copartclone-b2247.appspot.com",
    messagingSenderId: "385589877212",
    appId: "1:385589877212:web:bcbefe86eea183e1281719",
    measurementId: "G-CGMYDE7P4T"
  };
  const app = initializeApp(firebaseConfig);
  let db = getDatabase();

  let navigate = useNavigate()
  let dispatch = useDispatch()
 
  let user = useSelector(function(store) {
    return store.map((item => {return item}))
  })
  let [oneUser, setOneUser] = useState({})
  const signIn = (nickname, password) => {
    dispatch({
      type: 'user-signIn',
      payload: {
        nickname: nickname,
        password: password,
        loggedIn: true
      }
    });
    setOneUser(user.find((item => {return item.nickname == nickname })))
    if(localStorage.length) {
      set(ref(db, 'users/signIn'), {
        username: nickname,
        password: password,
      });
     return navigate('/', {state: 'logged', replace: true}),
      localStorage.setItem('signInuser', JSON.stringify(nickname))
    }
  } 

  const signUp = (newNickname, newUserName, newSurname, newUserPassword) => {
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
  }

  const logout = () => {
   return  navigate('/signin'),
    localStorage.removeItem('userLoggedIn'),
    window.location.reload(),
    localStorage.clear()
  }

  const addedPost = (model, color, price, moneyType, mileage, horsepower, body, gearbox, handDrive, engine, additionalInfo) => {
    return dispatch({
      type: 'added-user-post',
      payload: {
        model: model,
        color: color,
        price: price,
        moneyType: moneyType,
        mileage: mileage,
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
            <Route path='profile' element={<Profile oneUser={oneUser} logout={logout} />} > profile </Route>
          </Route>
          <Route path='signin'  element={<SignIn signIn={signIn} />}>  Sign In</Route> 
          <Route path='signup' element={<SignUp username={user} signUp={signUp} /> }> Sign Up</Route>
        </Routes>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
