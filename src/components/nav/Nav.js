import React, { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createUseStyles } from "react-jss";
import Messages from "./Messages";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

import SignIn from "../registration/SignIn";
import SignUp from "../registration/SignUp";
import DealersButton from "./dealers/DealersButton";
import DealersPage from "./dealers/DealersPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

let useStyles = createUseStyles({
  div: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,.95)",
    boxShadow: "0 2px 6px 0 rgb(0 0 0 / 7%) !important",
  },
  parentDiv: {
    width: "80%",
    height: 70,
    display: "flex",
    justifyContent: "space-around",
    margin: [0, "auto"],
    backgroundColor: "rgba(255,255,255,.95)",
  },
  img: {
    width: 210,
  },
  button: {
    height: 30,
    margin: ["auto", 0],
  },
  buttonMyPage: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  ul: {
    position: "absolute",
    top: 50,
    left: 0,
    backgroundColor: "white",
    border: [1, "black", "solid"],
    padding: 5,
    textAlign: "center",
    zIndex: 100,
    "& :hover": {
      backgroundColor: "red",
    },
  },
});

export default function Nav(props) {
  const { logout } = props;
  const classes = useStyles();
  const auth = getAuth();
  const user = auth.currentUser;
  let [show, setShow] = useState(false);
  const isShow = () => {
    setShow(!show);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };  
  const handleClose = () => {
    setOpen(false);
  };

  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  return (
    <div className={classes.div}>
      <div className={classes.parentDiv}>
        <LeftSideBar />
        <Link to="/">
          <img src={logo} className={classes.img} />
        </Link>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label={"Մակնիշ, մոդել, տարեթիվ"}
            variant="outlined"
          />
        </Box>
        <Link to="dealer">
          <DealersButton />
        </Link>
        <Link to="">
          <Messages />
        </Link>
          <div className={classes.buttonMyPage} onClick={isShow}>
            <AccountCircleIcon fontSize="large" color="action" />
            <span> Իմ էջը </span>
        {user ? (
              <nav className={classes.ul} style={show ? { display: 'block'} : {display: 'none'}}>
                <div>
                  <Link to="personalinfo/myOffers">
                    Անձնական տվյալներ
                  </Link>
                </div>
                <div>
                  <Link to="personalinfo/saved">
                    <Button> Հիշվածները </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <Button onClick={logout}> Ելք </Button>
                  </Link>
                </div>
              </nav>
            ) : (
              <div className={classes.ul} style={show ? { display: 'block'} : {display: 'none'}} >
                <Button onClick={handleClickOpen}> Մուտք </Button>
                <Button onClick={handleClickOpenSignUp}> Գրանցվել </Button>
              </div>
            )}
          </div>
        <Link>
          <Button variant="contained"> Վաճառել </Button>
        </Link>
      </div>
      <SignIn open={open} handleClose={handleClose} />
      <SignUp openSignUp={openSignUp} handleCloseSignUp={handleCloseSignUp} />
      <Routes>
        <Route path="dealer" element={<DealersPage />}></Route>
      </Routes>
    </div>
  );
}
