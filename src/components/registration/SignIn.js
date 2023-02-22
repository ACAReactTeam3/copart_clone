import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  signIn,
  signInWithGoogle,
  signInWithFacebook,
} from "../../constants/constants";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { currentuser } from "../../firebase/firebase";
import HouseIcon from "@mui/icons-material/House";

let useStyles = createUseStyles({
  house: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 20,
    top: 20,
    border: [1, "black", "solid"],
    borderRadius: "50%",
  },
  title: {
    textAlign: "center",
    margin: 5,
  },
  div: {
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    margin: [5, "auto"],
  },
  link: {
    textAlign: "center",
    padding: 5,
  },
});

export default function SignIn(props) {
  const classes = useStyles();
  const auth = getAuth();
  let { open, handleClose } = props;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        navigate("/", { replace: true });
      }
    });
  }, [auth, currentuser]);

  return currentuser ? null : (
    <div>
      <Dialog
        open={location.pathname === "/signin" ? true : open}
        onClose={handleClose}
      >
        {location.pathname === "/signin" ? (
          <Link to="/" onClick={handleClose}>
            <HouseIcon className={classes.house} />
          </Link>
        ) : null}
        <DialogTitle className={classes.title}> Մուտք </DialogTitle>
        <DialogContentText className={classes.title}>
          Սոց. հաշիվներով
        </DialogContentText>
        <Button
          variant="contained"
          sx={{ m: "auto", mt: 1 }}
          className={classes.button}
          onClick={() => {
            return signInWithFacebook(), handleClose();
          }}
        >
          Facebook <FacebookOutlinedIcon />
        </Button>
        <Button
          variant="contained"
          sx={{ m: "auto", mt: 1 }}
          color="success"
          className={classes.button}
          onClick={() => {
            return signInWithGoogle(), handleClose();
          }}
        >
          Google <GoogleIcon />
        </Button>
        <DialogContent>
          <hr />
          <DialogContentText className={classes.title}> Կամ </DialogContentText>
          <div className={classes.div}>
            <TextField
              required
              id="outlined-required"
              label="Էլ. հասցե"
              sx={{ m: 1 }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Գաղտնաբառ"
              sx={{ m: 1 }}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ m: [0, "auto"] }}
            onClick={() => {
              signIn(email, password);
              handleClose();
              setEmail("");
              setPassword("");
            }}
          >
            {" "}
            Մուտք{" "}
          </Button>
        </DialogActions>
        {location.pathname === "/signin" ? (
          <h3 className={classes.link}>
            Դեռ հաշիվ չկա՞
            <Link to="/signup"> Sign Up </Link>
          </h3>
        ) : null}
      </Dialog>
    </div>
  );
}
