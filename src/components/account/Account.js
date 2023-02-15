import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import MyOffers from "./MyOffers";
import Saved from "./Saved";
import PersonalInfo from "./PersonalInfo";
import { createUseStyles } from "react-jss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../../constants/constants";

let useStyle = createUseStyles({
  parentDiv: {
    backgroundColor: "#D0D0D0",
    width: "80%",
    margin: [0, "auto"],
  },
  columnDiv: {
    height: 200,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
    color: "yellow",
  },
  linkStyle: {
    textDecoration: "none",
  },
});

export default function Account(props) {
  let routes = useRoutes([
    {
      path: "myoffers",
      element: <MyOffers />,
    },
    {
      path: "saved",
      element: <Saved />,
    },
    {
      path: "personalinfo/*",
      element: <PersonalInfo />,
    },
  ]);
  let navigate = useNavigate();

  let classes = useStyle();
  const auth = getAuth();
  const user = auth.currentUser;
  let email = user?.email;
  let location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/", { replace: true });
      }
    });
  }, [auth, user]);

  useEffect(() => {
    if (location.pathname === "/personalinfo") {
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <div className={classes.parentDiv}>
      <div className={classes.columnDiv}>
        <div>
          <p> {email} </p>
        </div>
        <div>
          <p> Հաշվի տիպը - անձնական</p>
          <span> հայտարարություն 10-ից </span>
        </div>
        <div>
          <p> Հաշվի կապը սոց. հաշիվների հետ</p>
          <Button variant="contained" disabled={true} sx={{ m: 1 }}>
            {" "}
            <FacebookOutlinedIcon /> Facebook{" "}
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={signInWithGoogle}
          >
            {" "}
            <GoogleIcon /> oogle{" "}
          </Button>
        </div>
      </div>
      <nav className={classes.link}>
        <Link to="myOffers" className={classes.linkStyle}>
          {" "}
          <h2> Իմ հայտարարությունները </h2>
        </Link>
        <Link to="saved" className={classes.linkStyle}>
          {" "}
          <h2> Հիշվածները </h2>
        </Link>
        <Link to="personalinfo" className={classes.linkStyle}>
          {" "}
          <h2> Անձնական տվյալներ </h2>{" "}
        </Link>
      </nav>
      {routes}
      <Outlet />
    </div>
  );
}
