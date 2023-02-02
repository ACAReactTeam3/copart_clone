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
  doors,
  tires,
} from "../../forSellCar&Filter";
import thunk from "redux-thunk";
import { red } from "@mui/material/colors";
import { PriceList } from "../piceList/PriceList";
import { AdditionalOptions } from "../additionalOptions/AdditionalOptions ";
import {
  addCarBodyType,
  addCarMileage,
  addMileageType,
  addModel,
  addPower,
  addSelColor,
  addSelCylinders,
  addSelDoors,
  addSelDrive,
  addSelectedBrand,
  addSelEngineType,
  addSelFuel,
  addSelGearbox,
  addSelSalonColor,
  addSelSteeringWheel,
  addSelTires,
  addYear,
  selectSellDescription,
} from "./sellDescriptionSlice";
import { useDispatch, useSelector } from "react-redux";

const SellDescription = () => {
  const dispatch = useDispatch();
  const {
    selectedBrand,
    model,
    year,
    carBodyType,
    carMileage,
    mileageType,
    selGearbox,
    selSteeringWheel,
    selFuel,
    selColor,
    selTires,
    selDoors,
    selDrive,
    selCylinders,
    power,
    selEngineType,
    selSalonColor,
  } = useSelector(selectSellDescription);

  console.log(useSelector((state) => state));

  // console.log(handleOptions(null), "handleOptions");
  console.log(selectedBrand, "selectedBrand");
  //console.log(model, "model");
  // console.log(modelList, "modelList");
  // console.log(prodTYear, "prodTYear");
  console.log(power, "power");
  // console.log(carBodyType, "carBodyType");
  // console.log(carMileage, "carMileage");

  const [btnMore, setBtnMore] = useState("+ Ավելին");

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
          height: btnMore === "- Ավելին" ? "250vh" : "165vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, brand) => {
                dispatch(addModel(""));
                dispatch(addSelectedBrand(brand));
              }}
              id={"combo-box-demo"}
              options={brands}
              renderInput={(params) => (
                <TextField {...params} label={description[0]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              disabled={selectedBrand ? false : true}
              value={model}
              onChange={(e, model) => dispatch(addModel(model))}
              id={"combo-box-demo"}
              options={modelList ? modelList : []}
              renderInput={(params) => (
                <TextField {...params} label={description[1]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, year) => dispatch(addYear(year))}
              id={"combo-box-demo"}
              options={prodTYear}
              renderInput={(params) => (
                <TextField {...params} label={description[2]} />
              )}
            />
            <Autocomplete
              type="number"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, carBodyType) =>
                dispatch(addCarBodyType(carBodyType))
              }
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
                sx={{ width: 204, mt: 5, ml: 5 }}
                type="number"
                label={description[4]}
                variant="outlined"
                onChange={(e) => dispatch(addCarMileage(e.target.value))}
              />

              <Autocomplete
                sx={{ width: 104, mt: 5 }}
                disablePortal
                onChange={(e, mileageType) =>
                  dispatch(addMileageType(mileageType))
                }
                id={"combo-box-demo"}
                options={carMileageType}
                renderInput={(params) => (
                  <TextField {...params} label={description[5]} />
                )}
              />
            </Grid>
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selGearbox) => dispatch(addSelGearbox(selGearbox))}
              id={"combo-box-demo"}
              options={transmission}
              renderInput={(params) => (
                <TextField {...params} label={description[6]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selSteeringWheel) =>
                dispatch(addSelSteeringWheel(selSteeringWheel))
              }
              id={"combo-box-demo"}
              options={steeringWheel}
              renderInput={(params) => (
                <TextField {...params} label={description[7]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selFuel) => dispatch(addSelFuel(selFuel))}
              id={"combo-box-demo"}
              options={fuel}
              renderInput={(params) => (
                <TextField {...params} label={description[8]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, selColor) => dispatch(addSelColor(selColor))}
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[9]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selSalonColor) =>
                dispatch(addSelSalonColor(selSalonColor))
              }
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[10]} />
              )}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selEngineType) =>
                dispatch(addSelEngineType(selEngineType))
              }
              id={"combo-box-demo"}
              options={engineType}
              renderInput={(params) => (
                <TextField {...params} label={description[11]} />
              )}
            />{" "}
            <TextField
              sx={{ width: 310, mt: 5, ml: 5 }}
              type="text"
              label={description[12]}
              variant="outlined"
              onChange={(e) => dispatch(addPower(e.target.value))}
            />
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selCylinders) =>
                dispatch(addSelCylinders(selCylinders))
              }
              id={"combo-box-demo"}
              options={cylinders}
              renderInput={(params) => (
                <TextField {...params} label={description[13]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selDrive) => dispatch(addSelDrive(selDrive))}
              id={"combo-box-demo"}
              options={drive}
              renderInput={(params) => (
                <TextField {...params} label={description[14]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selDoors) => dispatch(addSelDoors(selDoors))}
              id={"combo-box-demo"}
              options={doors}
              renderInput={(params) => (
                <TextField {...params} label={description[15]} />
              )}
            />{" "}
            <Autocomplete
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, selTires) => dispatch(addSelTires(selTires))}
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
          </Grid>
          <PriceList />
        </Grid>
      </Box>
    </>
  );
};

export default SellDescription;

// dispatch({
//   type: "add-sell-sellDescription",
//   payload: {
//     selectedBrand: selectedBrand,
//     model: model,
//     year: year,
//     carBodyType: carBodyType,
//     carMileage: carMileage,
//     mileageType: mileageType,
//     selGearbox: selGearbox,
//     selSteeringWheel: selSteeringWheel,
//     selFuel: selFuel,
//     selColor: selColor,
//     selTires: selTires,
//     selDoors: selDoors,
//     selDrive: selDrive,
//     selCylinders: selCylinders,
//     power: power,
//     selEngineType: selEngineType,
//     selSalonColor: selSalonColor,
//     price: price,
//   },
// });
// const [selectedBrand, setSelectedBrand] = useState("");
// const [model, setModel] = useState("");
// const [year, setYear] = useState("");
// const [carBodyType, setCarBodyType] = useState("");
// const [carMileage, setCarMileage] = useState(0);
// const [mileageType, setMileageType] = useState("");
// const [selGearbox, setSelGearbox] = useState("");
// const [selSteeringWheel, setSelSteeringWheel] = useState("");
// const [selFuel, setSelFuel] = useState("");
// const [selColor, setSelColor] = useState("");
// const [selTires, setSelTires] = useState("");
// const [selDoors, setSelDoors] = useState("");
// const [selDrive, setSelDrive] = useState("");
// const [selCylinders, setSelCylinders] = useState("");
// const [power, setPower] = useState("");
// const [selEngineType, setSelEngineType] = useState("");
// const [selSalonColor, setSelSalonColor] = useState("");
// const [price, setPrice] = useState("");
