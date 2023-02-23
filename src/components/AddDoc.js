import { Button } from "@mui/material";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, dbStore } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

export default function AddDoc() {
  const storage = getStorage();
  const listRef = ref(storage, `image`);
  let [userData, setUserData] = useState([]);
  let [img, setImg] = useState(null);
  let [url, setUrl] = useState([]);

  // add post
  const add = async () => {
    const newPost = await addDoc(collection(dbStore, "post"), {
      userEmail: auth.currentUser.email,
      brand: "Ford",
      model: "F-max",
      year: 2012,
      price: 43400,
      category: "Բեռնատար",
    });
  };

  //   // get posts
  // useEffect(() => {
  //          (async () => {
  //           const colRef = collection(dbStore, "post");
  //           const snapshots = await getDocs(colRef);
  //           const docs = await snapshots.docs.map((doc) => {
  //             const data = doc.data();
  //             data.id = doc.id;
  //             return data;
  //           });
  //           setUserData(docs);
  //         })()
  //     }, [auth.currentUser]);

  // add photo
  const addPhoto = (id) => {
    // const imageRef = ref(storage, `image/${auth.currentUser.email}/1aMIrTdlZNEupeP4g19p/${img.name}`)
    const imageRef = ref(
      storage,
      `image/${auth.currentUser.email}/${id}/${img.name}`
    ); // id ??
    uploadBytes(imageRef, img)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log("img error", error.message);
          });
        setImg(null);
      })
      .catch((error) => {
        console.log("err", error.message);
      });
    alert(id);
  };

  // img list
  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          listAll(folderRef).then((res) => {
            res.prefixes.forEach((folderRefSecond) => {
              listAll(folderRefSecond).then((res) => {
                res.items.forEach((itemRef) => {
                  getDownloadURL(itemRef)
                    .then((urll) => {
                      //      console.log(folderRefSecond.name)
                      setUrl(() => {
                        return [
                          ...url,
                          {
                            pathName: folderRefSecond.name,
                            url: urll,
                          },
                        ];
                      }).catch((error) => {
                        //   console.log('img error', error.message)
                      });
                      setImg(null);
                    })
                    .catch((error) => {
                      console.log("err err", error.message);
                    });
                });
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/*  <Button onClick={add}> Add post</Button> */}
      {/*   {url.map((item) => {
            return <img src={item.url} alt={item.pathName} key={uuid()} style={{width: 250, height: 250, objectFit: 'contain'}} /> 
        })}  */}
      {/*  <Button variant='outlined' type='file' onClick={addPhoto}> Upload image </Button>
        
        <input type='file' onChange={(e) => {
            return   setUrl(url), setImg(e.target.files[0])
             }} />  */}
    </div>
  );
}
