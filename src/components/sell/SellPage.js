import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType } from "./forSellCar&Filter";
import { Location } from "./sellComponents/location/Location";
import { AdditionalOptions } from "./sellComponents/additionalOptions/AdditionalOptions ";
import SellDescription from "./sellComponents/sellDescription/SellDescription";
import { Photos } from "./sellComponents/photos/Photos";
import { AdditionalInformation } from "./sellComponents/additionalInformation/AdditionalInformation";
import Category from "./sellComponents/category/Category";

const SellPage = () => {
  const [carName, setCarName] = useState([]);
  const [brand, setBrand] = useState("");
  const [modelName, setModelName] = useState([]);

  const [value, setValue] = useState(false);

  return (
    <Container maxWidth="md" sx={{ ml: 16 }}>
      <Category />
      <SellDescription />
      <AdditionalOptions />
      <Location />
      <AdditionalInformation />
      <Photos />
      <Button sx={{ width: 350, mt: 5, ml: 5 }} variant="contained">
        Տեղադրել հայտարարությունը
      </Button>
    </Container>
  );
};

export default SellPage;
