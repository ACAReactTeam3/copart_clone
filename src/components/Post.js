import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { dbStore } from "../firebase/firebase";
import CallIcon from "@mui/icons-material/Call";
import { v4 as uuid } from "uuid";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";

let useStyles = createUseStyles({
  parentimgAndContent: {
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    maxWidth: 500,
    maxHeight: 380,
    objectFit: "contain",
    position: "relative",
  },
  parentImgSmall: {
    width: 504,
    height: 200,
    display: "flex",
    flexWrap: "wrap",
    position: "absolute",
    marginTop: 377,
  },
  imgSmall: {
    width: 248,
    height: 100,
    objectFit: "contain",
    border: [0.8, "black", "solid"],
  },
  arrow: {
    backgroundColor: "white",
    color: "#1172b6",
    "& :hover": {
      backgroundColor: "#C0C0C0",
      color: "white",
    },
  },
  email: {
    fontFamily: "Times New Roman, Times, serif",
    fontSize: "20px",
    marginTop: "25px",
    color: "#1172b6",
  },
  header: {
    display: "flex",
  },
  table: {
    minWidth: 200,
    maxWidth: 400,
  },
  top: {
    display: "flex",
  },
  a: {
    minWidth: 150,
    display: "flex",
  },
});

function createData(name, value) {
  return { name, value };
}

export default function Post(props) {
  const { item } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentEmail = getAuth()?.currentUser?.email;

  // const [isEmailAdded, setIsEmailAdded] = useState(
  //   item.saved.includes(currentEmail) ? true : false
  // );
  // const func = async () => {
  //   const itemDoc = doc(dbStore, "post", item.id);
  //   const snapshot = await getDoc(itemDoc);
  //   const docItem = snapshot.data();
  //   setDocSnap(docItem);
  // };
  // const [docSnap, setDocSnap] = useState([]);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  useEffect(() => setIsShown(item.saved.includes(currentEmail)), []);

  useEffect(() => {
    const itemDoc = doc(dbStore, "post", item.id);
    if (isShown) {
      (async () =>
        await updateDoc(itemDoc, {
          saved: arrayUnion(currentEmail),
        }))();
    } else {
      (async () =>
        await updateDoc(itemDoc, {
          saved: arrayRemove(currentEmail),
        }))();
    }
  }, [isShown]);

  // const handleActive = (e) => setIsActive(e.target.checked);

  useEffect(() => {
    (async () => {
      const itemDoc = doc(dbStore, "post", item.id);
      const docSnap = await getDoc(itemDoc);
      setIsActive(docSnap.data().isActive);
    })();
  }, []);
  const [firstStart, setFirstStart] = useState(false);
  const [isActive, setIsActive] = useState(item.isActive);

  useEffect(() => {
    const itemDoc = doc(dbStore, "post", item.id);
    firstStart &&
      (async () => {
        await updateDoc(itemDoc, { isActive: isActive });
      })();
    setFirstStart(true);
  }, [isActive]);

  const rows = [
    createData("Գինը:", `${!item.price ? "x" : item.price}`),
    createData("Մակնիշը:", `${!item.brand ? "x" : item.brand}`),
    createData("Մոդիֆիկացիան:", `${!item.model ? "x" : item.model}`),
    createData("Տարեթիվը:", `${!item.year ? "x" : item.year}`),
    createData("Թափքը:", `${!item.carBodyType ? "x" : item.carBodyType}`),
    createData("Վազքը:", `${!item.carMileage ? "x" : item.carMileage}`),
    createData(
      "Փոխանցման տուփը:",
      `${!item.selGearbox ? "x" : item.selGearbox}`
    ),
    createData(
      "Ղեկը:",
      `${!item.selSteeringWheel ? "x" : item.selSteeringWheel}`
    ),
    createData("Շարժիչը:", `${!item.selFuel ? "x" : item.selFuel}`),
    createData("Գույնը:", `${!item.color ? "x" : item.color}`),
    createData("Ձիաուժը:", `${!item.power ? "x" : item.power}`),
    createData("Դռների քանակը:", `${!item.selDoors ? "x" : item.selDoors}`),
    createData("Անվահեծը:", `${!item.selTires ? "x" : item.selTires}`),
  ];

  return (
    <div>
      <Card
        sx={{
          paddingLeft: 15,
          paddingRight: 15,
          m: "auto",
        }}
      >
        {item.userEmail === currentEmail ? (
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
                name="activ"
              />
            }
            label="Ակտիվացել"
          />
        ) : null}
        <IconButton
          size="large"
          aria-label="add to favorites"
          style={{ float: "right", marginTop: 0 }}
          onClick={() => {
            handleClick();
          }}
          id={item.id}
        >
          {/* 👇️ show component on click */}
          {isShown ? <BookmarkIcon /> : <BookmarkBorderIcon color="action" />}
        </IconButton>
        <div className={classes.arrow}>
          <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>
        </div>

        <div className={classes.header}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="post"
                style={{ color: "#1172b6", fontSize: "20px" }}
              >
                {/*   { item.displayName ? item.displayName : item.userEmail[0]} */}
              </Avatar>
            }
          />
          <div className={classes.email}>{item.userEmail}</div>
        </div>
        <div className={classes.parentimgAndContent}>
          <CardMedia
            className={classes.img}
            component="img"
            // image="https://www.kia.com/content/dam/kia/us/en/home2-0/mtf-carousel/mpv/sorento/kia_sorento_2023_large-middle.png"
            image={item.img}
            alt={item.id}
          />
          {/*  <div className={classes.parentImgSmall}>
            <img
              className={classes.imgSmall}
              // src="https://www.kia.com/us/content/dam/kia/us/en/vehicles/sorento/2023/trims/s-xline-awd/exterior/46533a/360/01.png/jcr:content/renditions/mobile.png"
            />
            <img
              className={classes.imgSmall}
              //  src="https://www.kiaonhuntclub.com/vimgs/USD20KIS022B021007/IOF_H150/2022-Kia-Sorento-4dr-AWD_21007.jpg"
            />
            <img
              className={classes.imgSmall}
              //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkAh8F6N9jT0xlh2m_b2VeDp7YzQio569mTcyd5NydUueBUIa_tU2w_CKqjOoOiKxQZM&usqp=CAU"
            />
            <img
              className={classes.imgSmall}
              //  src="https://www.kiaonhuntclub.com/vimgs/usd20kis022b022200/IOF_H600/xColourPhotoSample_0.jpg.pagespeed.ic.ObavIULTW_.jpg"
            />
            <img
              className={classes.imgSmall}
              // src="https://www.kiaonhuntclub.com/vimgs/USD20KIS022B021009/IOF_H150/x2022-Kia-Sorento-4dr-AWD_21009.jpg.pagespeed.ic.Sm96kYwWkW.jpg"
            />
          </div> */}
          <Table
            aria-label="simple table"
            size="small"
            style={{
              lineHeight: "100px",
            }}
            className={classes.table}
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className={classes.top}>
          <p
            style={{
              marginTop: 30,
              fontSize: "25px",
              marginLeft: "10px",
            }}
          >
            Լրացուցիչ
          </p>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpandClick} style={{ marginTop: 25 }}>
              {!expanded ? (
                <ExpandMore
                  aria-expanded={expanded}
                  aria-label="show more"
                ></ExpandMore>
              ) : (
                <ExpandLessIcon
                  aria-expanded={expanded}
                  aria-label="show less"
                ></ExpandLessIcon>
              )}
            </IconButton>
          </CardActions>
        </div>
        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <Typography
              paragraph
              style={{ fontSize: "20px", color: "#1172b6", fontWeight: "bold" }}
            >
              Լրացուցիչ օպցիաներ
            </Typography>
            <Typography paragraph>{item.options?.join()}</Typography>
            <Typography
              paragraph
              style={{ fontSize: "20px", color: "#1172b6", fontWeight: "bold" }}
            >
              Լրացուցիչ տվյալներ
            </Typography>
            <Typography paragraph>{item.additionalInfo}</Typography>
            <Typography
              paragraph
              style={{ fontSize: "20px", color: "#1172b6", fontWeight: "bold" }}
            >
              Հիմնական հեռախոսահամար
              <a href={`tel:${item.phoneNum}`} className={classes.a}>
                <CallIcon className={classes.call} /> {item.phoneNum}
              </a>
            </Typography>
            <Typography
              paragraph
              style={{ fontSize: "20px", color: "#1172b6", fontWeight: "bold" }}
            >
              Լրացուցիչ հեռախոսահամար
            </Typography>

            {item.phone?.map((number) => {
              return (
                <a href={`tel:${number}`} key={uuid()} className={classes.a}>
                  <CallIcon className={classes.call} /> {number}
                </a>
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
