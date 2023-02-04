import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsType, carsTypeSort } from "../../forSellCar&Filter";
import {
  addCategory,
  addCategoryType,
  selectSelCategory,
} from "./categorySlice";

const Category = () => {
  // const [category, setCategory] = useState("Մարդատար");
  // const [categoryType, setCategoryType] = useState("");

  const { category, categoryType } = useSelector(selectSelCategory);
  const dispatch = useDispatch();

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
  })(category);
  // console.log(category, "category");
  // console.log(categoryType, "categoryType");

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
                dispatch(addCategoryType(""));
                dispatch(addCategory(newValue));
              }}
              disablePortal
              options={carsType}
              sx={{ width: 310, mt: 5, ml: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Կատեգորիա*" />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              hidden={
                ["Մարդատար", "Ավտոբուս", "Կցասայլ"].includes(category)
                  ? true
                  : false
              }
              disablePortal
              value={categoryType}
              onChange={(e, newValue) => {
                dispatch(addCategoryType(newValue));
              }}
              id="combo-box-demo"
              options={catHandleSort}
              sx={{ width: 310, mt: 5 }}
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
