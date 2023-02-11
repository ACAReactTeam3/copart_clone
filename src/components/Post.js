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
import { Route, Routes, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

let useStyles = createUseStyles({
  parentimgAndContent: {
    width: 900,
    display: "flex",
  },
  img: {
    width: 500,
    height: 380,
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
  top: {
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

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const rows = [
    createData("Գինը:", `${item.price}`),
    createData("Մակնիշը:", `${item.brand}`),
    createData("Մոդիֆիկացիան:", `${item.model}`),
    createData("Տարեթիվը:", `${item.year}`),
    createData("Թափքը:", `${item.carBodyType}`),
    createData("Վազքը:", `${item.carMileage}`),
    createData("Փոխանցման տուփը:", `${item.selGearbox}`),
    createData("Ղեկը:", `${item.selSteeringWheel}`),
    createData("Շարժիչը:", `${item.selFuel}`),
    createData("Գույնը:", `${item.color}`),
    createData("Ձիաուժը:", `${item.power}`),
    createData("Դռների քանակը:", `${item.selDoors}`),
    createData("Անվահեծը:", `${item.selTires}`),
  ];

  return (
    <div>
      <Card
        sx={{
          maxWidth: 930,
          border: [1, "white"],
          m: "auto",
        }}
      >
        <IconButton
          size="large"
          aria-label="add to favorites"
          style={{ float: "right", marginTop: 0 }}
          onClick={handleClick}
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
                {item.userEmail[0]}
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
            alt="Car"
          />
          <div className={classes.parentImgSmall}>
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
          </div>
          <Table
            aria-label="simple table"
            size="small"
            style={{
              lineHeight: "100px",
            }}
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
              marginTop: 280,
              fontSize: "25px",
              marginLeft: "10px",
            }}
          >
            Լրացուցիչ
          </p>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpandClick} style={{ marginTop: 270 }}>
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
              Լրացուցիչ հեռախոսահամար
            </Typography>
            <Typography paragraph>{item.phoneNum}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
