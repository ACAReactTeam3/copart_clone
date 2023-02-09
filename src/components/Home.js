import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useRoutes } from "react-router-dom";
import Account from "./account/Account";
import MyOffers from "./account/MyOffers";
import PersonalInfo from "./account/PersonalInfo";
import PersonalInfoData from "./account/PersonalInfoData";
import PersonalInfoPassword from "./account/PersonalInfoPassword";
import Saved from "./account/Saved";
import AllOffers from "./AllOffers";
import CarTypes from "./CarTypes";
import CategoryPage from "./CategoryPage";
import SignIn from "./registration/SignIn";
import SignUp from "./registration/SignUp";
import { v4 as uuid } from "uuid";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbStore } from "../firebase/firebase";
export default function Home(props) {
  const { search } = props;
  let [post, setPost] = useState([]);
  // all posts
  useEffect(() => {
    (async () => {
      const colRef = await collection(dbStore, "post");
      const filtered = await query(
        colRef,
        search && where("brand".toLowerCase(), "==", search)
      );
      const snapshots = await getDocs(filtered);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, [search]);

  let routes = useRoutes([
    {
      path: "/*",
      children: [
        {
          path: "/*",
          element: (
            <>
              <CarTypes />
              <AllOffers post={post} />
            </>
          ),
        },
      ],
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "myoffers",
      element: <MyOffers />,
    },
    {
      path: "saved",
      element: <Saved />,
    },
    {
      path: "personalinfo/*",
      element: (
        <Account>
          <PersonalInfo />
        </Account>
      ),
      children: [
        {
          path: "personalinfodata",
          element: <PersonalInfoData />,
        },
        {
          path: "changepassword",
          element: <PersonalInfoPassword />,
        },
      ],
    },
  ]);
  return (
    <div>
      {routes}
      {[
        { link: "passenger", category: "Մարդատար" },
        { link: "trucks", category: "Բեռնատար" },
        { link: "motorcycles", category: "Մոտոտեխնիկա" },
        { link: "special-motor-vehicle", category: "Հատուկ տեխնիկա" },
        { link: "buses", category: "Ավտոբուս" },
        { link: "trailers", category: "Կցասայլ" },
        { link: "water-vehicles", category: "Ջրային տեխնիկա" },
      ].map((item) => {
        return (
          <React.Fragment key={uuid()}>
            <Link to={item.link}> </Link>
            <Routes>
              <Route
                path={item.link}
                element={
                  <CategoryPage category={item.category} search={search} />
                }
              ></Route>
            </Routes>
          </React.Fragment>
        );
      })}
    </div>
  );
}
