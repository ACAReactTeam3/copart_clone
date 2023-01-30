import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { carsType, carsTypeSort } from "../forSellCar&Filter";

const Category = () => {
  const [catValue, setCatValue] = useState("Մարդատար");
  const [categryType, setCategryType] = useState("");

  const catHandleSort = ((value) => {
    if (value === "Բեռնատար") {
      return carsTypeSort.truckSort;
    }
    if (value === "Մոտոտեխնիկա") {
      return carsTypeSort.motoTechSort;
    }
    if (value === "Հատուկ տեխնիկա") {
      return carsTypeSort.specTechSort;
    }
    if (value === "Ջրային տեխնիկա") {
      return carsTypeSort.hidroTechSort;
    }
    return [];
  })(catValue);
  //console.log(categryType, "categryType");

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
                setCategryType("");
                setCatValue(newValue);
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
              hidden={
                ["Մարդատար", "Ավտոբուս", "Կցասայլ"].includes(catValue)
                  ? true
                  : false
              }
              disablePortal
              value={categryType}
              onChange={(e, newValue) => {
                setCategryType(newValue);
              }}
              id="combo-box-demo"
              options={catHandleSort}
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
