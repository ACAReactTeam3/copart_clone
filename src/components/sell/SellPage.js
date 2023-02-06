import { Autocomplete, Grid } from "@mui/material";

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType } from "./forSellCar&Filter";
import { Location } from "./sellComponents/location/Location";
import { AdditionalOptions } from "./sellComponents/additionalOptions/AdditionalOptions ";
import SellDescription from "./sellComponents/sellDescription/SellDescription";
import { Photos } from "./sellComponents/photos/Photos";
import { AdditionalInformation } from "./sellComponents/additionalInformation/AdditionalInformation";
import Category from "./sellComponents/category/Category";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import ScrollTop from "./ScrollTop";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { auth, dbStore } from "../../firebase/firebase";
import selCategoryReducer from "./sellComponents/category/categorySlice";
import { ref } from "firebase/database";
import { getDownloadURL, getStorage, uploadBytes } from "firebase/storage";

const SellPage = (props) => {
  const [carName, setCarName] = useState([]);
  const [brand, setBrand] = useState("");
  const [modelName, setModelName] = useState([]);

  const [value, setValue] = useState(false);
  let [img, setImg] = useState(null);
  let [url, setUrl] = useState([]);
  const storage = getStorage();
  const getData = useSelector(function (state) {
    return state;
  });
  // add post
  const add = async () => {
    const newPost = await addDoc(collection(dbStore, "post"), {
      userEmail: auth.currentUser.email,
      brand: getData.sellDescription.carBodyType,
      model: getData.sellDescription.model,
      year: getData.sellDescription.year,
      price: getData.sellPriceList.price,
      category: getData.selCategory.category,
    });
  };

  const addPhoto = (id) => {
    const imageRef = ref(
      storage,
      `image/${auth.currentUser.email}/1aMIrTdlZNEupeP4g19p/${img.name}`
    ); // id ??
    uploadBytes(imageRef, img)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log("img error", error.message);
          });
        setImg(null);
      })
      .catch((error) => {
        console.log("err", error.message);
      });
    alert(id);
  };
  return (
    <Container maxWidth="md" sx={{ ml: 16 }}>
      <Toolbar id="back-to-top-anchor" />
      <Category />
      <SellDescription />
      <AdditionalOptions />
      <Location />
      <AdditionalInformation />
      <Photos />
      <Button
        onClick={add}
        sx={{ width: 350, mt: 5, ml: 5 }}
        variant="contained"
      >
        Տեղադրել հայտարարությունը
      </Button>
      <Button variant="outlined" type="file" onClick={addPhoto}>
        Upload image
      </Button>
      <input
        type="file"
        onChange={(e) => {
          return setUrl(url), setImg(e.target.files[0]);
        }}
      />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default SellPage;
