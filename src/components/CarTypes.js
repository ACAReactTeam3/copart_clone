import React from "react";
import { createUseStyles } from "react-jss";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import Post from "./Post";

let useStyles = createUseStyles({
  ul: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: [0, "auto"],
    "&": {
      backgroundColor: "#DCDCDC",
      height: 50,
      lineHeight: "3",

      fontSize: "14px",
      fontWeight: "600",
    },
    "& :hover": {
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
});
export default function CarTypes() {
  const classes = useStyles();
  const carsType = [
    {
      name: "Մարդատար",
      selected: true,
    },
    {
      name: "Բեռնատար",
      selected: false,
    },
    {
      name: "Մոտոտեխնիկա",
      selected: false,
    },
    {
      name: "Հատուկ տեխնիկա",
      selected: false,
    },
    {
      name: "Ավտոբուս",
      selected: false,
    },
    {
      name: "Կցասայլ",
      selected: false,
    },
    {
      name: "Ջրային տեխնիկա",
      selected: false,
    },
  ];
  return (
    <>
      <ul className={classes.ul}>
        {carsType.map((item) => {
          return <li key={uuid()}>{item.name}</li>;
        })}
      </ul>
      <Filter />
    </>
  );
}
