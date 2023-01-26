import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType, carsTypeSort } from "../forSellCar&Filter";

const Category = () => {
  const [carName, setCarName] = useState([]);
  const [brand, setBrand] = useState("");
  const [modelName, setModelName] = useState([]);

  const [value, setValue] = useState("");
  const [sortHid, setSortHid] = useState(true);

  const handleSortHid = (cat) => {
    if (["Մարդատար", "Ավտոբուս", "Կցասայլ"].includes(cat)) {
      setSortHid(true);
      console.log(cat);
    } else {
      setSortHid(false);
    }
  };

  const handleSortLabel = (value) => {
    if (value.label === "Բեռնատար") {
      return carsTypeSort.truckSort;
    }
    if (value.label === "Մոտոտեխնիկա") {
      return carsTypeSort.motoTechSort;
    }
    if (value.label === "Հատուկ տեխնիկա") {
      return carsTypeSort.specTechSort;
    }
    if (value.label === "Ջրային տեխնիկա") {
      return carsTypeSort.hidroTechSort;
    }
    return [];
  };

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Կատեգորիա
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: "30vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Autocomplete
              //value={brand}
              //id="combo-box-demo"
              onChange={(e, newValue) => {
                setValue(newValue);
                handleSortHid(newValue.label);
              }}
              disablePortal
              options={carsType}
              sx={{ width: 300, mt: 5, ml: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Կատեգորիա*" />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              hidden={sortHid}
              disablePortal
              id="combo-box-demo"
              options={handleSortLabel(value)}
              sx={{ width: 300, mt: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Տեսակը*" />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Category;
