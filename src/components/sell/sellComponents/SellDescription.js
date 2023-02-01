import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  bodyType,
  carBrandModels,
  carMileageType,
  color,
  cylinders,
  description,
  drive,
  fuel,
  engineVolume,
  transmission,
  prodTYear,
  steeringWheel,
  engineType,
  doօrs,
  tires,
} from "../forSellCar&Filter";
// import thunk from "redux-thunk";
import { red } from "@mui/material/colors";
import { PiceList } from "./PiceList";

const SellDescription = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [carBodyType, setCarBodyType] = useState("");
  const [carMileage, setCarMileage] = useState(0);
  const [mileageType, setMileageType] = useState("");
  const [selGearbox, setSelGearbox] = useState("");
  const [selSteeringWheel, setSelSteeringWheel] = useState("");
  const [selFuel, setSelFuel] = useState("");
  const [selColor, setSelColor] = useState("");
  const [selTires, setSelTires] = useState("");
  const [selDoօrs, setSelDoօrs] = useState("");
  const [selDrive, setSelDrive] = useState("");
  const [selCylinders, setSelCylinders] = useState("");
  const [power, setPower] = useState("");
  const [selEngineType, setSelEngineType] = useState("");
  const [selSalonColor, setSelSalonColor] = useState("");
  const [pice, setPice] = useState("");

  console.log(pice, "pice");

  // console.log(handleOptions(null), "handleOptions");
  // console.log(selectedBrand, "selectedBrand");
  console.log(model, "model");
  // console.log(modelList, "modelList");
  // console.log(prodTYear, "prodTYear");
  // console.log(brands, "brands");
  // console.log(carBodyType, "carBodyType");
  // console.log(carMileage, "carMileage");

  const [btnMore, setBtnMore] = useState("+ Ավելին");

  const createNewPost = () => {
    return {
      year: year,
      carName: "",
      brand: selectedBrand,
      modelName: "",
      model: model,
      color: selColor,
      price: "",
      mileage: mileageType,
      distanceType: mileageType,
      horsepower: "",
      moneyType: "",
      bodyType: carBodyType,
      gearbox: selGearbox,
      handDrive: selSteeringWheel,
      engine: selFuel,
      additionalInfo: "",
    };
  };

  const brands = carBrandModels.map((item) => item.brand);

  const sellBranMmodList = (selectedBrand, carBrandModels) => {
    return carBrandModels
      .filter((item) => item.brand === selectedBrand)[0]
      ?.models.map((item) => {
        return item;
      });
    return "";
  };

  const btnMoreHide = (btnMore) => (btnMore === "+ Ավելին" ? true : false);
  const modelList = sellBranMmodList(selectedBrand, carBrandModels);

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
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, brand) => {
                setModel("");
                setSelectedBrand(brand);
              }}
              id={"combo-box-demo"}
              options={brands}
              renderInput={(params) => (
                <TextField {...params} label={description[0]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              disabled={selectedBrand ? false : true}
              value={model}
              onChange={(e, model) => setModel(model)}
              id={"combo-box-demo"}
              options={modelList ? modelList : []}
              renderInput={(params) => (
                <TextField {...params} label={description[1]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, year) => setYear(year)}
              id={"combo-box-demo"}
              options={prodTYear}
              renderInput={(params) => (
                <TextField {...params} label={description[2]} />
              )}
            />
            <Autocomplete
              type="number"
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, carBodyType) => setCarBodyType(carBodyType)}
              id={"combo-box-demo"}
              options={bodyType}
              renderInput={(params) => (
                <TextField {...params} label={description[3]} />
              )}
            />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 0 }}
            >
              <TextField
                sx={{ width: 199, mt: 5, ml: 5 }}
                type="number"
                label={description[4]}
                variant="outlined"
                onChange={(e) => setCarMileage(e.target.value)}
              />

              <Autocomplete
                sx={{ width: 99, mt: 5 }}
                disablePortal
                onChange={(e, mileageType) => setMileageType(mileageType)}
                id={"combo-box-demo"}
                options={carMileageType}
                renderInput={(params) => (
                  <TextField {...params} label={description[5]} />
                )}
              />
            </Grid>
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selGearbox) => setSelGearbox(selGearbox)}
              id={"combo-box-demo"}
              options={transmission}
              renderInput={(params) => (
                <TextField {...params} label={description[6]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selSteeringWheel) =>
                setSelSteeringWheel(selSteeringWheel)
              }
              id={"combo-box-demo"}
              options={steeringWheel}
              renderInput={(params) => (
                <TextField {...params} label={description[7]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selFuel) => setSelFuel(selFuel)}
              id={"combo-box-demo"}
              options={fuel}
              renderInput={(params) => (
                <TextField {...params} label={description[8]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selColor) => setSelColor(selColor)}
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[9]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selSalonColor) => setSelSalonColor(selSalonColor)}
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[10]} />
              )}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selEngineType) => setSelEngineType(selEngineType)}
              id={"combo-box-demo"}
              options={engineType}
              renderInput={(params) => (
                <TextField {...params} label={description[11]} />
              )}
            />{" "}
            <TextField
              sx={{ width: 300, mt: 5, ml: 5 }}
              type="text"
              label={description[12]}
              variant="outlined"
              onChange={(e) => setPower(e.target.value)}
            />
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selCylinders) => setSelCylinders(selCylinders)}
              id={"combo-box-demo"}
              options={cylinders}
              renderInput={(params) => (
                <TextField {...params} label={description[13]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selDrive) => setSelDrive(selDrive)}
              id={"combo-box-demo"}
              options={drive}
              renderInput={(params) => (
                <TextField {...params} label={description[14]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selDoօrs) => setSelDoօrs(selDoօrs)}
              id={"combo-box-demo"}
              options={doօrs}
              renderInput={(params) => (
                <TextField {...params} label={description[15]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 300, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selTires) => setSelTires(selTires)}
              id={"combo-box-demo"}
              options={tires}
              renderInput={(params) => (
                <TextField {...params} label={description[16]} />
              )}
            />
            <Button
              onClick={() =>
                btnMore === "+ Ավելին"
                  ? setBtnMore("- Ավելին")
                  : setBtnMore("+ Ավելին")
              }
              sx={{ width: 120, mt: 5, ml: 5 }}
              variant="contained"
            >
              {btnMore}
            </Button>
            <Button sx={{ width: 350, mt: 5, ml: 5 }} variant="contained">
              Տեղադրել հայտարարությունը
            </Button>
          </Grid>
          <PiceList pice={pice} setPice={setPice} />
        </Grid>
      </Box>
    </>
  );
};

export default SellDescription;
