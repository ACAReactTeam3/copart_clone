import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useEffect } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
  where,
} from "firebase/firestore";
import { query } from "firebase/database";
import { dbStore } from "../../firebase/firebase";

let useStyle = createUseStyles({
  parent: {
    backgroundColor: "#d9d9d9",
  },
  inputParent: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    margin: [0, "40%"],
    padding: 10,
  },
  "@media only screen and (max-width: 935px)": {
    inputParent: {
      margin: [0, "20%"],
    },
  },
});

export default function PersonalInfoData() {
  let classes = useStyle();
  const auth = getAuth();
  const user = auth.currentUser;
  let email = user?.email;
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  const onSave = () => {
    updateProfile(auth.currentUser, {
      // ...updateProfile,
      displayName: name ? name : user.displayName,
    })
      .then((res) => {
        alert("Փոփոխությունները բարեհաջող կատարվել են:");
        return res;
      })
      .catch((error) => {
        alert(error.message);
      });
    updateSurname();
    updatePhoneNumber();
  };

  // my posts
  let [post, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const filterUser = query(colRef, where("userEmail", "==", email));
      const snapshots = await getDocs(filterUser);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, []);

  const updateSurname = () => {
    post.forEach((userPost) => {
      const itemDoc = doc(dbStore, "post", userPost.id);
      if (surname.length > 2) {
        (async () =>
          await updateDoc(itemDoc, {
            surname: arrayUnion(surname),
          }))();
      }
    });
  };
  const updatePhoneNumber = () => {
    post.forEach((userPost) => {
      const itemDoc = doc(dbStore, "post", userPost.id);
      if (phone.length > 7) {
        (async () =>
          await updateDoc(itemDoc, {
            phone: arrayUnion(`(+374) ${phone}`),
          }))();
      }
    });
  };
  return (
    <div className={classes.parent}>
      <div className={classes.inputParent}>
        <TextField
          id="outlined-required"
          label={email}
          placeholder={email}
          sx={{ width: 250, m: 1 }}
          disabled={true}
        />
        <TextField
          id="outlined-required"
          label="Անուն"
          sx={{ width: 250, m: 1 }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-required"
          label="Ազգանուն"
          sx={{ width: 250, m: 1 }}
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <TextField
          id="outlined-required"
          label="93 123456"
          sx={{ width: 250, m: 1 }}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value.replace(/[^0-9,]/g, "").substring(0, 8));
          }}
        />
        <Button variant="contained" sx={{ width: 300 }} onClick={onSave}>
          Պահպանել փոփոխությունները
        </Button>
      </div>
    </div>
  );
}
