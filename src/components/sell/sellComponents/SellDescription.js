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
} from "../forSellCar&Filter";
import { CustomizedAlert, trueQuantity } from "./customized";
import { PriceList } from "./PriceList";

const SellDescription = ({
  isMessageOpen,
  carDescription,
  setCarDescription,
  priceList,
  setPriceList,
}) => {
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
  } = carDescription;

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
          height:
            btnMore === "- Ավելին"
              ? `${
                  213 + (isMessageOpen ? trueQuantity(carDescription) : 0) * 7.2
                }vh`
              : `${
                  128 + (isMessageOpen ? trueQuantity(carDescription) : 0) * 6.5
                }vh`,

          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) => {
                setCarDescription((prev) => ({
                  ...prev,
                  model: "",
                  selectedBrand: newValue,
                }));
              }}
              id={"combo-box-demo"}
              options={brands}
              renderInput={(params) => (
                <TextField {...params} label={description[0]} />
              )}
            />
            {isMessageOpen && !selectedBrand && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              disabled={selectedBrand ? false : true}
              // value={model}
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  model: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={modelList ? modelList : []}
              renderInput={(params) => (
                <TextField {...params} label={description[1]} />
              )}
            />
            {isMessageOpen && !model && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  year: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={prodTYear}
              renderInput={(params) => (
                <TextField {...params} label={description[2]} />
              )}
            />
            {isMessageOpen && !year && <CustomizedAlert />}
            <Autocomplete
              size="small"
              type="number"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  carBodyType: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={bodyType}
              renderInput={(params) => (
                <TextField {...params} label={description[3]} />
              )}
            />
            {isMessageOpen && !carBodyType && <CustomizedAlert />}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 0 }}
            >
              <TextField
                size="small"
                sx={{ width: 204, mt: 5, ml: 5 }}
                type="number"
                label={description[4]}
                variant="outlined"
                onChange={(e) =>
                  setCarDescription((prev) => ({
                    ...prev,
                    carMileage: e.target.value,
                  }))
                }
              />
              <Autocomplete
                size="small"
                sx={{ width: 104, mt: 5 }}
                disablePortal
                value={mileageType}
                onChange={(e, newValue) =>
                  setCarDescription((prev) => ({
                    ...prev,
                    mileageType: newValue,
                  }))
                }
                id={"combo-box-demo"}
                options={carMileageType}
                renderInput={(params) => (
                  <TextField {...params} label={description[5]} />
                )}
              />
              {isMessageOpen && (!carMileage || !mileageType) && (
                <CustomizedAlert />
              )}
            </Grid>
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selGearbox: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={transmission}
              renderInput={(params) => (
                <TextField {...params} label={description[6]} />
              )}
            />
            {isMessageOpen && !selGearbox && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selSteeringWheel: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={steeringWheel}
              renderInput={(params) => (
                <TextField {...params} label={description[7]} />
              )}
            />
            {isMessageOpen && !selSteeringWheel && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selFuel: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={fuel}
              renderInput={(params) => (
                <TextField {...params} label={description[8]} />
              )}
            />
            {isMessageOpen && !selFuel && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selColor: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[9]} />
              )}
            />
            {isMessageOpen && !selColor && <CustomizedAlert />}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selSalonColor: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={color}
              renderInput={(params) => (
                <TextField {...params} label={description[10]} />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selEngineType: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={engineType}
              renderInput={(params) => (
                <TextField {...params} label={description[11]} />
              )}
            />
            {!btnMoreHide(btnMore) && (
              <TextField
                size="small"
                sx={{ width: 310, mt: 5, ml: 5 }}
                type="text"
                label={description[12]}
                variant="outlined"
                onChange={(e) =>
                  setCarDescription((prev) => ({
                    ...prev,
                    power: e.target.value,
                  }))
                }
              />
            )}
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selCylinders: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={cylinders}
              renderInput={(params) => (
                <TextField {...params} label={description[13]} />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selDrive: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={drive}
              renderInput={(params) => (
                <TextField {...params} label={description[14]} />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selDoors: newValue,
                }))
              }
              id={"combo-box-demo"}
              options={doors}
              renderInput={(params) => (
                <TextField {...params} label={description[15]} />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: 310, mt: 5, ml: 5 }}
              hidden={btnMoreHide(btnMore)}
              disablePortal
              onChange={(e, newValue) =>
                setCarDescription((prev) => ({
                  ...prev,
                  selTires: newValue,
                }))
              }
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
              sx={{ width: 120, mt: 5, ml: 5, mb: 5 }}
              variant="contained"
            >
              {btnMore}
            </Button>
          </Grid>
          <PriceList
            priceList={priceList}
            setPriceList={setPriceList}
            isMessageOpen={isMessageOpen}
          />
        </Grid>
      </Box>
    </>
  );
};

export default SellDescription;
