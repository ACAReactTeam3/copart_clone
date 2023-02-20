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
import { Link, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

let useStyles = createUseStyles({
  parentDiv: {
    marginTop: "30px",
    width: "80%",
    margin: [0, "auto"],
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
    textAlign: "left",
    marginLeft: "40px",
  },
  text: {
    color: "black",
    fontSize: "15px",
    textAlign: "left",
    marginLeft: "40px",
  },
  childDiv: {
    padding: "50px 0",
  },
  swiper: {
    height: "300px",
  },
});

export default function FilteredPage(props) {
  let [post, setPost] = useState([]);
  let [filteredPost, setFilteredPost] = useState([]);
  const classes = useStyles();
  const { selectFilter } = props;
  useEffect(() => {
    (async () => {
      console.log("selectFilter", selectFilter);
      const colRef = await collection(dbStore, "post");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        setPost(data);
        if (selectFilter[0]?.minYear) {
          post?.filter((item) => {
            if (item.year >= selectFilter[0]?.minYear) {
              return setFilteredPost(...filteredPost, item);
            }
          });
        }
        // console.log(filteredPost)
        return data, filteredPost;
      });

      //console.log(filteredPost)
      setPost(docs);
      setPost(filteredPost);
      setPost(() => {
        return docs.filter((item) => {
          return (
            selectFilter[0]?.minYear == ""
              ? null
              : item.year >= selectFilter[0]?.minYear,
            selectFilter[0]?.maxYear
              ? item.year <= selectFilter[0]?.maxYear
              : null,
            !selectFilter[0]?.brand
              ? null
              : item.brand == selectFilter[0]?.brand
          );
        });
      });
    })();
  }, [selectFilter[0]]);

  useEffect(() => {
    if (selectFilter[0]?.minYear) {
      post?.filter(async (item) => {
        if (item.year >= selectFilter[0]?.minYear) {
          return setFilteredPost([...filteredPost, item]);
        }
      });
    }
    //console.log(filteredPost)
    setPost([filteredPost]);
  }, [selectFilter[0], selectFilter[0]?.minYear, filteredPost]);

  //console.log(post);
  return (
    <div>
      FilteredPage
      <div className={classes.parentDiv}>
        <Swiper
          className={classes.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={post?.length > 4 ? 4 : post?.length}
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
                      to={item.id}
                    >
                      <div className={classes.childDiv}>
                        <div>
                          <img
                            //src="https://firebasestorage.googleapis.com/v0/b/copartclone-b2247.appspot.com/o/image%2Faadd%40gmail.com%2F4fdhIwDPs3UB9JnmrWXJ%2FMazda%20%20CX-7.jpeg?alt=media&token=3a3bade8-34e3-4977-bbe9-4d4dd630ab42"
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
      </div>
    </div>
  );
}
