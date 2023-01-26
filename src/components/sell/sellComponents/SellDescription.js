import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType } from "../forSellCar&Filter";

const SellDescription = () => {
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

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setCarName(result);
      });
  }, []);

  useEffect(() => {
    if (brand) {
      setModelName(carName.find((obj) => obj.brand == brand).models);
    }
  }, [brand]);

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Նկարագրություն
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: "260vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            {description.map((item, index) => (
              <Autocomplete
                key={index}
                disablePortal
                // id={"combo-box-demo"}
                options={brand}
                sx={{ width: 300, mt: 5, ml: 5 }}
                renderInput={(params) => <TextField {...params} label={item} />}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SellDescription;

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
