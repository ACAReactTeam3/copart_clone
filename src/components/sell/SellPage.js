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

const SellPage = (props) => {
  const [carName, setCarName] = useState([]);
  const [brand, setBrand] = useState("");
  const [modelName, setModelName] = useState([]);

  const [value, setValue] = useState(false);

  return (
    <Container maxWidth="md" sx={{ ml: 16, margin: [0, "auto"] }}>
      <Toolbar id="back-to-top-anchor" />
      <Category />
      <SellDescription />
      <AdditionalOptions />
      <Location />
      <AdditionalInformation />
      <Photos />
      <Button sx={{ width: 350, mt: 5, ml: 5 }} variant="contained">
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
