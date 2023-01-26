import "./App.css";
import React from "react";
import SignUp from './components/registration/SignUp'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import CreatePost from './components/CreatePost'

import { getDatabase, ref, set} from "firebase/database";
import User from './components/User'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "./firebase/firebase";
import Nav from "./components/nav/Nav";
import Account from "./components/account/Account";

function App() {    
  let db = getDatabase();
  let navigate = useNavigate()
  let dispatch = useDispatch()
 
  let user = useSelector(function(store) {
    return store.map((item => {return item}))
  })

  const logout = async () => {
    signOut(auth).then(() => {
      navigate('/')
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
    <Nav logout={logout} />
      <Routes>
          <Route path='/*' element={<Home />} > Home </Route>
      </Routes>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
