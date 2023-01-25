import React, { useState, useEffect } from "react";
import LeftSideBar from "../LeftSideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createUseStyles } from "react-jss";
import Dealers from "./DealersButton";
import Messages from "./Messages";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

let useStyles = createUseStyles({
  parentDiv: {
    width: "80%",
    height: 70,
    display: "flex",
    justifyContent: "space-around",
    margin: [0, "auto"],
  },
  img: {
    width: 70,
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
  return (
    <>
      <div className={classes.parentDiv}>
        <LeftSideBar />
        <Link to="/">
          {" "}
          <img
            src="https://auto.am/assets/ico/200x200.png"
            className={classes.img}
          />{" "}
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
        <Link to="">
          {" "}
          <Dealers />{" "}
        </Link>
        <Link to="">
          {" "}
          <Messages />{" "}
        </Link>
        {user ? (
          <div className={classes.buttonMyPage} onClick={isShow}>
            <AccountCircleIcon fontSize="large" color="action" />
            <span> Իմ էջը </span>
            {show ? (
              <nav className={classes.ul}>
                <div>
                  {" "}
                  <Link to="personalinfo/myOffers">
                    {" "}
                    Անձնական տվյալներ{" "}
                  </Link>{" "}
                </div>
                <div>
                  {" "}
                  <Link to="personalinfo/saved">
                    {" "}
                    <Button> Հիշվածները </Button>{" "}
                  </Link>{" "}
                </div>
                <div>
                  {" "}
                  <Link to="/">
                    {" "}
                    <Button onClick={logout}> Ելք </Button>{" "}
                  </Link>{" "}
                </div>
              </nav>
            ) : null}
          </div>
        ) : (
          <div>
            <Link to="signin"> Մուտք </Link>
            <Link to="signup"> Գրանցվել </Link>
          </div>
        )}
        <Link>
          {" "}
          <Button variant="contained"> Վաճառել </Button>{" "}
        </Link>
      </div>
    </>
  );
}
