import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import MessageIcon from "@mui/icons-material/Message";
import { auth } from "../firebase/firebase";
import { Route, Routes } from "react-router-dom";
import UsageRules from "./UsageRules";
import Post from "./Post";
import Messages from "./Comment/Messages";

const useStyles = createUseStyles({
  ListItem: {
    "& :hover": {
      backgroundColor: "#ff5252",
    },
  },
  language: {
    padding: 10,
  },
});

export default function LeftSideBar(props) {
  const classes = useStyles();
  let navigate = useNavigate();
  let menuList = [
    {
      link: auth.currentUser ? "personalinfo/*" : "signin",
      name: auth.currentUser ? auth.currentUser.email : "Մուտք",
      icon: <AccountCircleIcon />,
    },
    {
      link: "message",

      name: "Հաղորդագրություններ",
      icon: <MessageIcon />,
    },
    {
      link: "/",
      name: "Գլխավոր էջ",
    },
    {
      link: "dealer",
      name: "Դիլերներ",
    },

    {
      link: auth.currentUser ? "sell" : "signin",
      name: "Վաճառել",
    },
    {
      link: "usageRules",
      name: "Օգտագործման կանոնները",
    },
    // {
    //   link: "",
    //   name: "Օգնություն",
    // },
  ];
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((item) => (
          <ListItem key={uuid()} disablePadding className={classes.ListItem}>
            <ListItemButton
              onClick={() => {
                return navigate(`${item?.link}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuRoundedIcon fontSize="large" color="action" />
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      {/* <Routes>
        <Route path="usageRules" element={<UsageRules />}></Route>
      </Routes> */}
    </>
  );
}
