import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { collection, getDocs, where } from "firebase/firestore";
import { query } from "firebase/database";
import { v4 as uuid } from "uuid";
import { dbStore } from "../firebase/firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { createUseStyles } from "react-jss";

let useStyles = createUseStyles({
  parentDiv: {
    marginTop: "30px",
    width: "80%",
    margin: [0, "auto"],
    display: "flex",
  },

  img: {
    width: 270,
    height: 155,
    objectFit: "cover",
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
  },
  text: {
    color: "black",
    fontSize: "15px",
  },
  childDiv: {
    padding: "50px 0",
  },
  swiper: {
    width: "80%",
    height: "300px",
    display: "flex",
  },
});

export default function CategoryPage(props) {
  const { category } = props;
  const classes = useStyles();
  let [post, setPost] = useState([]);

  // category
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const filterUser = query(colRef, where("category", "==", category));
      const snapshots = await getDocs(filterUser);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, []);

  return (
    <div>
      <h2> {category} </h2>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        speed={500}
      >
        {post.map((item) => {
          return (
            <div key={uuid()} className={classes.parentDiv}>
              <SwiperSlide key={uuid()} className={classes.swiperSlide}>
                <Link key={uuid()} style={{ textDecoration: "none" }} to="hi">
                  <div className={classes.childDiv}>
                    <div>
                      <img src={item.img} alt="Car" className={classes.img} />
                    </div>
                    <div>
                      <h3 className={classes.header}> {item.brand} </h3>
                      <h4 className={classes.text}>Price: {item.price} $</h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
