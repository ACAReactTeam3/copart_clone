import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";

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
      link: "passenger",
      name: "Մարդատար",
      selected: true,
    },
    {
      link: "trucks",
      name: "Բեռնատար",
      selected: false,
    },
    {
      link: "motorcycles",
      name: "Մոտոտեխնիկա",
      selected: false,
    },
    {
      link: "special-motor-vehicle",
      name: "Հատուկ տեխնիկա",
      selected: false,
    },
    {
      link: "buses",
      name: "Ավտոբուս",
      selected: false,
    },
    {
      link: "trailers",
      name: "Կցասայլ",
      selected: false,
    },
    {
      link: "water-vehicles",
      name: "Ջրային տեխնիկա",
      selected: false,
    },
  ];
  return (
    <>
      <ul className={classes.ul}>
        {carsType.map((item) => {
          return (
            <Link
              to={item.link}
              key={uuid()}
              style={{ textDecoration: "none", color: "#1172b6" }}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
      <Filter />
    </>
  );
}
