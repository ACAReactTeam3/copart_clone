import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { v4 as uuid } from "uuid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { auth, dbStore } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Link } from "react-router-dom";

let useStyle = createUseStyles({
  parent: {
    backgroundColor: "white",
  },

  inputParent: {
    width: "70%",
    margin: [0, "auto"],
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  buttonParent: {
    width: "50%",
    height: 100,
    margin: [0, "auto"],
    backgroundColor: "#ffff99",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

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
    marginTop: "30px",
    width: "100%",
    height: "300px",
    display: "flex",
  },
});

export default function MyOffers() {
  let classes = useStyle();
  let sort = [
    "Ամենաթարմերը",
    "Գին՝ թանկից - էժան",
    "Գին՝ էժանից-թանկ",
    "Տարեթվերը՝ ամենահները",
    "Տարեթվերը՝ ամենանորերը",
  ];
  let [selectedSort, setSelectedSort] = useState("");
  const handleChangeselectedType = (event) => {
    setSelectedSort(event.target.value);
  };
  let [post, setPost] = useState([]);
  const email = auth?.currentUser?.email;
  // my posts
  useEffect(() => {
    (async () => {
      const colRef = collection(dbStore, "post");
      const filterUser = query(colRef, where("userEmail", "==", email));
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
    <div className={classes.parent}>
      <div className={classes.inputParent}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-dialog-select-label"> Տեսակը </InputLabel>
          <Select
            labelId="demo-dialog-select-label"
            id="demo-dialog-select"
            value={selectedSort}
            onChange={handleChangeselectedType}
            input={<OutlinedInput label="Sort" />}
          >
            {sort.map((item) => {
              return (
                <MenuItem value={item} key={uuid()}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <label>
          <input type="checkbox" />
          Ակտիվները
        </label>
        <label>
          <input type="checkbox" />
          Ոչ ակտիվները
        </label>
      </div>
      <div className={classes.buttonParent}>
        {!post.length ? (
          <p>
            <ErrorOutlineIcon /> Դուք դեռևս չունեք հայտարարություններ:{" "}
          </p>
        ) : (
          <p> Դուք ունեք {post.length} հայտարարություն։ </p>
        )}
        <Link to="../../sell" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ margin: "auto" }}>
            Տեղադրել հայտարարություն
          </Button>
        </Link>
      </div>
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
                <Link
                  key={uuid()}
                  style={{ textDecoration: "none" }}
                  to={`../../${item.id}`}
                >
                  <div className={classes.childDiv}>
                    {/* <IconButton aria-label="delete" sx={{ ml: 20, mt: 0 }}>
                      <DeleteIcon />
                    </IconButton> */}
                    <div>
                      <img
                        src={item.img}
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
          );
        })}
      </Swiper>
    </div>
  );
}
