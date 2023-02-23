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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

let useStyles = createUseStyles({
  parentDiv: {
    marginTop: "30px",
    margin: [0, "auto"],
    display: "flex",
    backgroundColor: "#D0D0D0",
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
  h2: {
    color: "#1976d2",
    fontSize: "30px",
    marginLeft: "15px",
    margin: "auto",
  },
  arrow: {
    color: "#1172b6",
    "& :hover": {
      backgroundColor: "white",
      color: "#C0C0C0",
    },
  },
});

export default function CategoryPage(props) {
  const { category, search } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  let [post, setPost] = useState([]);

  // category
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const filterUser = query(
        colRef,
        search
          ? where("category", "==", category) &&
              where("brand".toLowerCase(), "==", search)
          : where("category", "==", category)
      );
      const snapshots = await getDocs(filterUser);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, [search]);

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
    <div className={classes.parentDiv}>
      <div className={classes.arrow}>
        <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>
      </div>
      <h2 className={classes.h2}> {category} </h2>
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
        {post.map((item) => {
          return (
            <div key={uuid()}>
              <SwiperSlide key={uuid()} className={classes.swiperSlide}>
                <Link
                  key={uuid()}
                  style={{ textDecoration: "none" }}
                  to={`/${item.id}`}
                >
                  <div className={classes.childDiv}>
                    <div>
                      <img src={item.img} alt="Car" className={classes.img} />
                    </div>
                    <div>
                      <h3 className={classes.header}> {item.brand} </h3>
                      <h4 className={classes.text}>Price: {item.price}</h4>
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
