import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { dbStore } from "./firebase/firebase";
import { v4 as uuid } from "uuid";

export default function FilteredPage(props) {
  let [post, setPost] = useState([]);
  const { selectFilter } = props;
  // useEffect(() => {
  //   (async () => {
  //     const colRef = await collection(dbStore, "post");
  //     const filterUser = await query(
  //       colRef,
  //       where("brand", "==", selectFilter.brand)
  //     );
  //     const snapshots = await getDocs(filterUser);

  //     const docs = snapshots.docs.map((doc) => {
  //       const data = doc.data();
  //       data.id = doc.id;
  //       return data;
  //     });
  //     setPost(docs);
  //   })();
  // }, [selectFilter]);
  return (
    <div>
      {/* FilteredPage
      {selectFilter.map((item) => {
        return <div key={Math.random()}>
          <p> {item.brand}</p>
          <p> {item.model} </p>
          <p> {item.minYear} </p>
          <p> {item.maxYear} </p>
          <p> {item.minPrice} </p>
          <p> {item.maxPrice} </p>
          </div> 
      })}
      {
        post.map((item) => {
          return <div key={uuid()}> 
            <p> {item.brand}</p>
          <p> {item.model} </p>
          <p> {item.minYear} </p>
          <p> {item.maxYear} </p>
          <p> {item.minPrice} </p>
          <p> {item.maxPrice} </p>
            </div>
        })
      } */}
    </div>
  );
}
