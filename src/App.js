import "./App.css";
import React from "react";
import SignIn from "./components/registration/SignIn";
import SignUp from "./components/registration/SignUp";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebase";
import Nav from "./components/nav/Nav";

function App() {
  let db = getDatabase();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let user = useSelector(function (store) {
    return store.map((item) => {
      return item;
    });
  });
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signUp = async (email, password, name, surname) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        db = set(ref(db, "users/ " + user.uid), {
          name: name,
          surname: surname,
          posts: [],
          saved: [],
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const addedPost = (
    brand,
    model,
    color,
    price,
    moneyType,
    mileage,
    distanceType,
    horsepower,
    body,
    gearbox,
    handDrive,
    engine,
    additionalInfo
  ) => {
    return dispatch({
      type: "added-user-post",
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
        additionalInfo: additionalInfo,
      },
    });
  };
  return (
    <>
      <Nav logout={logout} />
      <Routes>
        <Route path="/*" element={<Home />}>
          {" "}
          Home{" "}
        </Route>
        <Route path="signin" element={<SignIn signIn={signIn} />}>
          {" "}
          Sign In
        </Route>
        <Route
          path="signup"
          element={<SignUp username={user} signUp={signUp} />}
        >
          {" "}
          Sign Up
        </Route>
      </Routes>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
