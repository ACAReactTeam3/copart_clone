import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PersonalInfoData from "./PersonalInfoData";
import PersonalInfoPassword from "./PersonalInfoPassword";

let useStyle = createUseStyles({
  nav: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "& :hover": {
      backgroundColor: "#ff5252",
    },
  },
});
export default function PersonalInfo() {
  let classes = useStyle();
  return (
    <div>
      <nav className={classes.nav}>
        <Link to="personalinfodata">
          <h3> Անձնական տվյալներ </h3>
        </Link>
        <Link to="changepassword">
          <h3> Գաղտնաբառ </h3>
        </Link>
      </nav>
      <Routes>
        <Route path="personalinfodata" element={<PersonalInfoData />}>
          personalinfodata
        </Route>
        <Route path="changepassword" element={<PersonalInfoPassword />}>
          personalinfodata
        </Route>
      </Routes>
      {/*  <Outlet /> */}
    </div>
  );
}
