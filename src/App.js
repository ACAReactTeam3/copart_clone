import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { signOut } from "firebase/auth";
import { auth, dbStore } from "./firebase/firebase";
import Nav from "./components/nav/Nav";
import SellPage from "./components/sell/SellPage";
import Post from "./components/Post";
import DealersPage from "./components/nav/dealers/DealersPage";
import UsageRules from "./components/UsageRules";
import { collection, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import Messages from "./components/Comment/Messages";

function App() {
  let db = getDatabase();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [post, setPost] = useState([]);
  // all posts
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, []);

  const logout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/");
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
        <Route path="sell" element={<SellPage />} />
        <Route path="dealer" element={<DealersPage />}></Route>
        <Route path="usageRules" element={<UsageRules />}></Route>
        <Route path="message" element={<Messages />}></Route>
        {post.map((item) => {
          return (
            <Route
              key={uuid()}
              path={item.id}
              element={<Post item={item} />}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
