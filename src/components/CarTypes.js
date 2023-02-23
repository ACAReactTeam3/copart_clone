import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";

const useStyles = makeStyles({
  parentUl: {
    display: "none",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    margin: [0, "auto"],
    "&": {
      backgroundColor: "#DCDCDC",
      lineHeight: "3",
      fontSize: "14px",
      fontWeight: "600",
    },
    "& :hover": {
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
  categoryLink: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  "@media only screen and (max-width: 935px)": {
    parentUl: {
      display: "block",
      backgroundColor: "#DCDCDC",
    },
    buttonBurger: {
      cursor: "pointer",
    },
    ul: {
      flexDirection: "column",
      alignItems: "center",
      padding: 0,
    },
    categoryLink: {
      width: "100%",
      textAlign: "center",
    },
  },
});
export default function CarTypes(props) {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(true);
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
      <div className={classes.parentUl}>
        {isShow ? (
          <CloseIcon
            className={classes.buttonBurger}
            style={{ fontSize: 40 }}
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
        ) : (
          <ListIcon
            className={classes.buttonBurger}
            style={{ fontSize: 40 }}
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
        )}
      </div>
      <ul className={classes.ul} style={{ display: isShow ? "flex" : "none" }}>
        {carsType.map((item) => {
          return (
            <Link
              to={item.link}
              key={uuid()}
              style={{ textDecoration: "none", color: "#1172b6" }}
              className={classes.categoryLink}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
      <Filter setSelectFilter={props.setSelectFilter} />
    </>
  );
}
