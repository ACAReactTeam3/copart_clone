import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Location } from "./sellComponents/location/Location";
import { AdditionalOptions } from "./sellComponents/additionalOptions/AdditionalOptions ";
import SellDescription from "./sellComponents/sellDescription/SellDescription";
import { Photos } from "./sellComponents/photos/Photos";
import { AdditionalInformation } from "./sellComponents/additionalInformation/AdditionalInformation";
import Category from "./sellComponents/category/Category";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, dbStore } from "../../firebase/firebase";
import { useSelector } from "react-redux";

const SellPage = (props) => {
  const newPost = useSelector((state) => state);

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
        onClick={handleAdd}
        sx={{ width: 350, mt: 5, ml: 5 }}
        variant="contained"
      >
        Տեղադրել հայտարարությունը
      </Button>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default SellPage;
