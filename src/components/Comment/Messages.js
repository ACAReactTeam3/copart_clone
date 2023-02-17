import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { v4 as uuid } from "uuid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import MessageIcon from "@mui/icons-material/Message";
import { auth } from "../../firebase/firebase";
import { Route, Routes } from "react-router-dom";
import UsageRules from "../UsageRules";
import Post from "../Post";
import message from "../../images/message.jpg";
import MessagesIcon from "../nav/messages/MessagesIcon";

const useStyles = createUseStyles({
  div: {
    width: 200,
    margin: "auto",
    marginTop: "260px",
  },
});

export default function Messages() {
  const classes = useStyles();
  let navigate = useNavigate();

  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/message") {
      setState({ right: true });
      console.log("location", location.pathname);
    } else {
      setState({ right: false });
    }
  }, []);

  return (
    <>
      <div
        onClick={toggleDrawer("right", true)}
        style={{
          display: location.pathname === "/message" ? "none" : "block",
        }}
      >
        <MessagesIcon />
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={
          location.pathname === "/message"
            ? toggleDrawer("right", true)
            : toggleDrawer("right", false)
        }
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <div className={classes.div}>
            <img src={message} style={{ width: "250px" }} />
            {auth.currentUser ? (
              <>
                <div
                  style={{
                    fontSize: "14.8px",
                    textAlign: "center",
                  }}
                >
                  Դուք դեռևս չունեք հաղորդագրություններ
                  <br></br>
                  <br></br>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="small">
                      Գլխավոր էջ
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "14.8px",
                  }}
                >
                  Հարգելի օգտատեր, հաղորդագրություներ ուղարկելու կամ ստանալու
                  համար անհրաժեշտ է մուտք գործել ձեր հաշիվ և հաստատել հեռախոսի
                  համարը
                </div>
                <br></br>
                <div style={{ width: 234, textAlign: "center" }}>
                  <Link to="../signin" style={{ textDecoration: "none" }}>
                    <Button
                      style={{ float: "right" }}
                      variant="contained"
                      size="small"
                    >
                      Մուտք գործել
                    </Button>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="small">
                      Գլխավոր էջ
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </Box>
      </Drawer>
    </>
  );
}
