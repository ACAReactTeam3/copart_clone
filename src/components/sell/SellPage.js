import { Autocomplete, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType } from "./forSellCar&Filter";
import Category from "./sellComponents/Category";
import SellDescription from "./sellComponents/SellDescription";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import ScrollTop from "./ScrollTop";

const SellPage = (props) => {
  const [carName, setCarName] = useState([]);
  const [brand, setBrand] = useState("");
  const [modelName, setModelName] = useState([]);
  // [model, setModel] = useState(""),
  // let [selectMinYear, setSelectMinYear] = useState([])
  // let [selectMaxYear, setSelectMaxYear] = useState([])
  //   [minYear, setMinYear] = useState(""),
  //   [maxYear, setMaxYear] = useState(""),
  //   [minPrice, setMinPrice] = useState(""),
  //   [maxPrice, setMaxPrice] = useState(""),
  //   bodyType = [
  //     "Սեդան",
  //     "Հետչբեք",
  //     "ՈՒնիվերսալ",
  //     "Կուպե",
  //     "Կաբրիոլետ / Ռոդսթեր",
  //     "Ամենագնաց",
  //     "Պիկապ",
  //     "Մինիվեն / Միկրոավտոբուս",
  //     "Ֆուրգոն",
  //     "Լիմուզին",
  //   ],
  //   [body, setBody] = useState(""),
  //   [steeringWheel, setSteeringWheel] = useState(""),
  //   [gearbox, setGearbox] = useState(""),
  //   [engine, setEngine] = useState("");
  // const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState(false);

  // const handleChangeBodyType = (event) => {
  //   setBody(event.target.value);
  // };
  // const handleChangeSteeringWheelType = (event) => {
  //   setSteeringWheel(event.target.value);
  // };
  // const handleChangeGearboxType = (event) => {
  //   setGearbox(event.target.value);
  // };

  // const handleChangeEngineType = (event) => {
  //   setEngine(event.target.value);
  // };

  return (
    <Container maxWidth="md" sx={{ ml: 16 }}>
      <Toolbar id="back-to-top-anchor" />
      <Category />
      <SellDescription />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
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
