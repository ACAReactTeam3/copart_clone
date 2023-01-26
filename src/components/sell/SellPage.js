import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType } from "./forSellCar&Filter";
import Category from "./sellComponents/Category";
import SellDescription from "./sellComponents/SellDescription";

const SellPage = () => {
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
      <Category />
      <SellDescription />
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
