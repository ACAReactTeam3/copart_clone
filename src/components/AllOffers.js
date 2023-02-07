import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, dbStore } from "../firebase/firebase";
import { createUseStyles } from "react-jss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
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
    height: "300px",
    display: "flex",
  },
});

export default function AllOffers() {
  const classes = useStyles();
  const storage = getStorage();
  const listRef = ref(storage, `image`);
  let [post, setPost] = useState([]);
  let [img, setImg] = useState(null);
  let [url, setUrl] = useState([]);

  // all posts
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPost(docs);
    })();
  }, []);

  // img list
  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          listAll(folderRef).then((res) => {
            res.prefixes.forEach((folderRefSecond) => {
              listAll(folderRefSecond).then((res) => {
                res.items.forEach((itemRef) => {
                  getDownloadURL(itemRef)
                    .then((urll) => {
                      //      console.log(folderRefSecond.name)
                      setUrl(() => {
                        return [
                          ...url,
                          {
                            pathName: folderRefSecond.name,
                            url: urll,
                          },
                        ];
                      }).catch((error) => {
                        //   console.log('img error', error.message)
                      });
                      setImg(null);
                    })
                    .catch((error) => {
                      //  console.log('err', error.message)
                    });
                });
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      >
        {post?.map((item) => {
          return (
            <React.Fragment key={uuidv4()}>
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
                          src="https://firebasestorage.googleapis.com/v0/b/copartclone-b2247.appspot.com/o/image%2Faadd%40gmail.com%2F4fdhIwDPs3UB9JnmrWXJ%2FMazda%20%20CX-7.jpeg?alt=media&token=3a3bade8-34e3-4977-bbe9-4d4dd630ab42"
                          alt={item.id}
                          className={classes.img}
                        />
                      </div>
                      <div>
                        <h3 className={classes.header}> {item.brand} </h3>
                        <h4 className={classes.text}>Price: {item.price} $</h4>
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
  );
}
