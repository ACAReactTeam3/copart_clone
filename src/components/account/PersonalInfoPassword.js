import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { getAuth, updatePassword } from "firebase/auth";

let useStyle = createUseStyles({
  parent: {
    backgroundColor: "#d9d9d9",
  },
  parentPassword: {
    width: "50%",
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    margin: [0, "40%"],
    padding: 10,
    top: "50%",
  },
  "@media only screen and (max-width: 935px)": {
    parentPassword: {
      margin: [0, "20%"],
    },
  },
});

export default function PersonalInfoPassword() {
  let classes = useStyle();
  let [oldPassword, setOldPassword] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const onSave = () => {
    updatePassword(user)
      .then((result) => {
        // Update successful.
        alert("Խնդրում ենք ստուգել Ձեր էլ.հասցեն:");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={classes.parent}>
      <div className={classes.parentPassword}>
        {/* <TextField
            required
            id="outlined-required"
            label="Հին գաղտնաբառ"
            sx={{width: 250, m: 1}}
            type='password'
            value={oldPassword}  
            onChange={(e) => { 
                setOldPassword(e.target.value.trim())
          }}
        />
         <TextField
          required
          id="outlined-required"
          label="Նոր գաղտնաբառ"
          sx={{width: 250, m: 1}}
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim())
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Կրկնել գաղտնաբառ"
          sx={{width: 250, m: 1}}
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value.trim())
          }}
          /> */}
        <Button variant="contained" sx={{ width: 250, m: 1 }} onClick={onSave}>
          Փոխել գաղտնաբառը
        </Button>
        <p>
          Դուք կարող եք պարբերաբար թարմացնել գաղտնաբառը՝ այն ավելի ապահով
          դարձնելու համար
        </p>
      </div>
    </div>
  );
}
