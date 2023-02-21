import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { dbStore } from "./firebase/firebase";
import { v4 as uuid } from "uuid";

import { createUseStyles } from "react-jss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

let useStyles = createUseStyles({
  parent: {
    height: "85vh",
  },
  parentDiv: {
    marginTop: "30px",
    width: "80%",
    margin: [0, "auto"],
  },
  img: {
    maxWidth: 270,
    height: 155,
    objectFit: "contain",
    transform: "scale(.7)",
    transition: "1s",
    cursor: "pointer",
  },
  swiperSlide: {
    background: "#fff",
    lineHeight: "30px",
    textAlign: "center",
    fontSize: "20px",
    boxSizing: "border-box",
    border: [1, "solid", "#ccc"],
    "& :hover": {
      transform: "scale(1)",
    },
  },
  header: {
    color: "#1172b6",
    textAlign: "left",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: "15px",
    textAlign: "left",
    textAlign: "center",
  },
  childDiv: {
    padding: "50px 0",
  },
  swiper: {
    height: "300px",
  },
  noOffer: {
    width: "50%",
    height: 120,
    margin: "auto",
    padding: [0, 10],
    backgroundColor: "#ffff99",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default function FilteredPage(props) {
  let [post, setPost] = useState([]);
  const classes = useStyles();
  const { selectFilter } = props;
  useEffect(() => {
    (async () => {
      const colRef = await collection(dbStore, "post");
      const filterUser = selectFilter[0]?.model
        ? await query(
            colRef,
            where("year", ">", selectFilter[0]?.minYear) &&
              where("year", "<", selectFilter[0]?.maxYear) &&
              where("brand", "==", selectFilter[0]?.brand) &&
              where("model", "==", selectFilter[0]?.model)
          )
        : selectFilter[0]?.brand.length
        ? await query(
            colRef,
            where("year", ">", selectFilter[0]?.minYear) &&
              where("year", "<", selectFilter[0]?.maxYear) &&
              where("brand", "==", selectFilter[0]?.brand)
          )
        : await query(
            colRef,
            where("year", ">=", selectFilter[0]?.minYear),
            where("year", "<=", selectFilter[0]?.maxYear)
          );

      const snapshots = await getDocs(filterUser);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setPost(docs);
    })();
  }, [
    selectFilter[0]?.brand,
    selectFilter[0]?.model,
    selectFilter[0]?.minYear,
    selectFilter[0]?.maxYear,
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <div className={classes.parent}>
      <div className={classes.parentDiv}>
        {post?.length ? (
          <Swiper
            className={classes.swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={
              windowWidth < 650 ? 2 : post.length > 4 ? 4 : post.length
            }
            navigation
            speed={500}
          >
            {post?.map((item) => {
              const curr =
                item.price?.slice(-1) === "€" ||
                item.price?.slice(-1) === "₽" ||
                item.price?.slice(-1) === "$" ||
                item.price?.slice(-1) === "֏";
              return (
                <React.Fragment key={uuidv4()}>
                  <div key={uuidv4()} className={classes.parentDiv}>
                    <SwiperSlide key={uuidv4()} className={classes.swiperSlide}>
                      <Link
                        key={uuidv4()}
                        style={{ textDecoration: "none" }}
                        to={`/${item.id}`}
                      >
                        <div className={classes.childDiv}>
                          <div>
                            <img
                              src={item.img}
                              alt={item.id}
                              className={classes.img}
                            />
                          </div>
                          <div>
                            <h3 className={classes.header}> {item.brand} </h3>
                            <h4 className={classes.text}>
                              Price: {curr ? item.price : item.price + "$"}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </div>
                </React.Fragment>
              );
            })}
          </Swiper>
        ) : (
          <p className={classes.noOffer}>
            <ErrorOutlineIcon /> Ներողություն, որոնմանը համապատասխան արդյունքներ
            չկան: Խնդրում ենք փոփոխել որոնման չափանիշները:{" "}
          </p>
        )}
      </div>
    </div>
  );
}
