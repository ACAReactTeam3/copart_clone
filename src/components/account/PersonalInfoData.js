import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";

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
            setPhone(e.target.value.replace(/[^0-9,]/g, ""));
          }}
        />
        <Button variant="contained" sx={{ width: 300 }} onClick={onSave}>
          Պահպանել փոփոխությունները
        </Button>
      </div>
    </div>
  );
}
