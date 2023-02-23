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
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { signUp } from "../../constants/constants";
import { currentuser } from "../../firebase/firebase";
import HouseIcon from "@mui/icons-material/House";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../constants/constants";

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

export default function SignUp(props) {
  const classes = useStyles();
  let { openSignUp, handleCloseSignUp } = props;
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [password, setPassword] = useState("");
  let disabledButton = password.length < 6 || email.length < 3;
  let navigate = useNavigate();
  const auth = getAuth();
  let location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/", { replace: true });
      }
    });
  }, [auth, currentuser]);

  return currentuser ? null : (
    <div>
      <Dialog
        open={location.pathname === "/signup" ? true : openSignUp}
        onClose={handleCloseSignUp}
      >
        {location.pathname === "/signup" ? (
          <Link to="/" onClick={handleCloseSignUp}>
            {" "}
            <HouseIcon className={classes.house} />{" "}
          </Link>
        ) : null}
        <DialogTitle className={classes.title}> Գրանցվել </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.title}>
            Սոց. հաշիվներով
          </DialogContentText>
          <Button
            variant="contained"
            sx={{ m: "auto", mt: 1, display: "block" }}
            className={classes.button}
            onClick={() => {
              return signInWithFacebook(), handleCloseSignUp();
            }}
          >
            Facebook <FacebookOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            sx={{ m: "auto", mt: 1, display: "block" }}
            color="success"
            className={classes.button}
            onClick={() => {
              return signInWithGoogle(), handleCloseSignUp();
            }}
          >
            Google <GoogleIcon />
          </Button>
          <hr />
          <DialogContentText className={classes.title}> Կամ </DialogContentText>
          <div className={classes.div}>
            <TextField
              required
              margin="dense"
              id="name"
              label="Էլ. հասցե"
              sx={{ m: 1 }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-required"
              label="Անուն"
              sx={{ m: 1 }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-required"
              label="Ազգանուն"
              sx={{ m: 1 }}
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
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
            disabled={disabledButton}
            variant="contained"
            onClick={() => {
              signUp(email, password, name, surname);
              handleCloseSignUp();
            }}
            sx={{ m: [0, "auto"] }}
          >
            Գրանցվել
          </Button>
        </DialogActions>
        {location.pathname === "/signup" ? (
          <h3 className={classes.link}>
            ՈՒնե՞ք հաշիվ
            <Link to="/signin"> Sign In</Link>
          </h3>
        ) : null}
      </Dialog>
    </div>
  );
}
