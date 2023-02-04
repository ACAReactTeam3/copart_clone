import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbStore } from "../firebase/firebase";
import { createUseStyles } from "react-jss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Post from "./Post";
import SellPage from "./sell/SellPage";
import { v4 as uuidv4 } from "uuid";
let useStyles = createUseStyles({
  //   mapParent: {
  //     display: "inline",
  //   },
  parentDiv: {
    marginTop: "30px",
    width: "80%",
    // border: [1, "black", "solid"],
    margin: [0, "auto"],
    display: "flex",
  },
  //   postBox: {
  //     width: "100%",
  //     height: 210,
  //     marginRight: 1,
  //     objectFit: "cover",
  //     position: "relative",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     border: [1, "black", "solid"],
  //     "& :hover": {
  //       transform: "scale(1)",
  //     },
  //   },
  img: {
    width: 270,
    height: 155,
    objectFit: "cover",
    transform: "scale(.7)",
    transition: "1s",
    cursor: "pointer",
  },
  //   priceDiv: {
  //     width: "100%",
  //     height: 55,
  //     position: "relative",
  //     textAlign: "center",
  //     backgroundColor: "grey",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //   },
  swiperSlide: {
    // objectFit: "cover",
    // position: "relative",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // maxWidth: "300px",
    background: "#fff",
    // height: "200px",
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
  },
  text: {
    color: "black",
    fontSize: "15px",
  },
  childDiv: {
    padding: "50px 0",
  },
  swiper: {
    height: "300px",
  },
});

export default function AllOffers() {
  const classes = useStyles();
  let [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "user");
      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, []);
  return (
    <div className={classes.parentDiv}>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        speed={500}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {post.map((item) => {
          return (
            <div key={uuidv4()} className={classes.parentDiv}>
              {item.posts.map((post) => {
                return (
                  <div key={uuidv4()} className={classes.parentDiv}>
                    <SwiperSlide key={uuidv4()} className={classes.swiperSlide}>
                      <Link
                        key={uuidv4()}
                        style={{ textDecoration: "none" }}
                        to="hi"
                      >
                        <div className={classes.childDiv}>
                          <div>
                            <img
                              src={post.img}
                              alt="Car"
                              className={classes.img}
                            />
                          </div>
                          <div>
                            <h3 className={classes.header}> {post.brand} </h3>
                            <h4 className={classes.text}>
                              {" "}
                              Price: {post.price} $
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
