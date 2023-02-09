import React, { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Dialog, DialogTitle } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createUseStyles } from "react-jss";
import MessagesIcon from "./messages/MessagesIcon";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import UsageRules from "../UsageRules";
import SignIn from "../registration/SignIn";
import SignUp from "../registration/SignUp";
import DealersButton from "./dealers/DealersButton";
import DealersPage from "./dealers/DealersPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import SellPage from "../sell/SellPage";
import Post from "../Post";
import Home from "../Home";

let useStyles = createUseStyles({
  div: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,.95)",
    boxShadow: "0 2px 6px 0 rgb(0 0 0 / 7%) !important",
  },
  parentDiv: {
    placeItems: "center",
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
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    alignContent: "start",
  },
  dialogTitle: {
    textAlign: "center",
  },
  ul: {
    backgroundColor: "white",
    border: [1, "black", "solid"],
    padding: 5,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    zIndex: 100,
    "& :hover": {
      backgroundColor: "#ff5252",
    },
  },
  deleteSearch: {
    maxWidth: 50,
    height: 50,
    backgroundColor: "white",
    position: "absolute",
    left: "70%",
    top: -70,
    borderRadius: "50%",
    border: 0,
    cursor: "pointer",
  },
});

export default function Nav(props) {
  const { logout } = props;
  const classes = useStyles();
  const auth = getAuth();
  const user = auth.currentUser;
  let [search, setSearch] = useState("");
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
  const [dialogMyPage, setDialogMyPage] = useState(false);
  const handleClickOpenMyPage = () => {
    setDialogMyPage(true);
  };
  const handleCloseMyPage = () => {
    setDialogMyPage(false);
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
            "& > :not(style)": { m: 1, width: "45ch", position: "relative" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label={"Մակնիշ"}
            variant="outlined"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(
                e.target.value.substring(0, 1).toUpperCase() +
                  e.target.value.substring(1, e.target.length).toLowerCase()
              );
            }}
          />
          <button
            className={classes.deleteSearch}
            onClick={(e) => {
              e.preventDefault();
              setSearch("");
            }}
          >
            {" "}
            X{" "}
          </button>
        </Box>
        <Link to="dealer" style={{ textDecoration: "none" }}>
          <DealersButton />
        </Link>
        <Link to="messages">
          <MessagesIcon />
        </Link>
        <AccountCircleIcon
          fontSize="large"
          color="action"
          onClick={handleClickOpenMyPage}
        />
        <Dialog
          className={classes.buttonMyPage}
          fullWidth={true}
          open={dialogMyPage}
          onClose={handleCloseMyPage}
        >
          <DialogTitle className={classes.dialogTitle}> Իմ էջը </DialogTitle>
          {user ? (
            <nav className={classes.ul}>
              <div>
                <Link
                  to="personalinfo/myOffers"
                  onClick={handleCloseMyPage}
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Անձնական տվյալներ
                </Link>
              </div>
              <div>
                <Link
                  to="personalinfo/saved"
                  onClick={handleCloseMyPage}
                  style={{
                    textDecoration: "none",
                    color: "#1976d2",
                    width: "100%",
                  }}
                >
                  <Button> Հիշվածները </Button>
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  onClick={handleCloseMyPage}
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  <Button onClick={logout}> Ելք </Button>
                </Link>
              </div>
            </nav>
          ) : (
            <div className={classes.ul}>
              <Button
                onClick={() => {
                  return handleClickOpen(), handleCloseMyPage();
                }}
              >
                {" "}
                Մուտք{" "}
              </Button>
              <Button
                onClick={() => {
                  return handleClickOpenSignUp(), handleCloseMyPage();
                }}
              >
                {" "}
                Գրանցվել{" "}
              </Button>
            </div>
          )}
        </Dialog>
        <Link
          to={auth.currentUser ? "sell" : "signin"}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained"> Վաճառել </Button>
        </Link>
      </div>
      <SignIn open={open} handleClose={handleClose} />
      <SignUp openSignUp={openSignUp} handleCloseSignUp={handleCloseSignUp} />
      <Routes>
        <Route path="/*" element={<Home search={search} />}>
          Home
        </Route>
      </Routes>
    </div>
  );
}
