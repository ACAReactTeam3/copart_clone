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
import { Location } from "./sellComponents/Location";
import { AdditionalOptions } from "./sellComponents/AdditionalOptions ";
import Category from "./sellComponents/Category";
import SellDescription from "./sellComponents/SellDescription";
import { AdditionalInformation } from "./sellComponents/AdditionalInformation";
import { Photos } from "./sellComponents/Photos";

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

const sellCarsType = carsType.map((item) => ({
  label: item.name,
  selected: false,
}));

const description = [
  "Մակնիշը*",
  "Մոդիֆիկացիան",
  "Տարեթիվը*",
  "Թափքը*",
  "Վազքը*",
  "Փոխանցման տուփը*",
  "Ղեկը*",
  "Շարժիչը*",
  "Գույնը*",
  "Սրահի գույնը",
  "Շարժիչի ծավալը",
  "Ձիաուժը",
  "Մխոցների քանակը",
  "Քարշակը",
  "Դռների քանակը",
  "Անվահեծերը",
];
