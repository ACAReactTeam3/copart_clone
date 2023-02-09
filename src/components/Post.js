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

let useStyles = createUseStyles({
  parentimgAndContent: {
    width: 800,
    display: "flex",
  },
  img: {
    width: 500,
    height: 380,
    objectFit: "contain",
  },
  parentImgSmall: {
    width: 610,
    height: 200,
    display: "flex",
    flexWrap: "wrap",
  },
  imgSmall: {
    width: 200,
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
});

export default function Post(props) {
  const { item } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Card
        sx={{
          maxWidth: 1000,
          border: [1, "white"],
          m: "auto",
        }}
      >
        <div className={classes.arrow}>
          <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>
        </div>
        <CardHeader avatar={<Avatar aria-label="post">U</Avatar>} />
        <div className={classes.parentimgAndContent}>
          <CardMedia
            className={classes.img}
            component="img"
            // image="https://www.kia.com/content/dam/kia/us/en/home2-0/mtf-carousel/mpv/sorento/kia_sorento_2023_large-middle.png"
            image={item.img}
            alt="Car"
          />
          <CardContent>
            <Typography> Գինը: {item?.price} </Typography>
            <Typography> Մակնիշը: {item?.brand} </Typography>
            <Typography> Մոդիֆիկացիան: {item?.model} </Typography>
            <Typography> Տարեթիվը: {item?.year} </Typography>
            <Typography> Թափքը: </Typography>
            <Typography> Վազքը: </Typography>
            <Typography> Փոխանցման տուփը: </Typography>
            <Typography> Ղեկը: </Typography>
            <Typography> Շարժիչը: </Typography>
            <Typography> Գույնը: </Typography>
            <Typography> Ձիաուժը: </Typography>
            <Typography> Դռների քանակը: </Typography>
            <Typography> Անվահեծը: </Typography>
          </CardContent>
        </div>
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
        <CardActions disableSpacing>
          <IconButton onClick={handleExpandClick}>
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
        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <Typography paragraph> Լրացուցիչ: </Typography>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
