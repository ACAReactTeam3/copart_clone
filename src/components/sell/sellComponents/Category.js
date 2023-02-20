import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { carsType, carsTypeSort } from "../forSellCar&Filter";
import { CustomizedAlert } from "./customized";

const Category = ({ catAndType, setCategory, isMessageOpen }) => {
  const { category, categoryType } = catAndType;
  // const [category, setCategory] = useState("Մարդատար");
  // const [categoryType, setCategoryType] = useState("");

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

  const customHidden = ["Մարդատար", "Ավտոբուս", "Կցասայլ"].includes(category)
    ? true
    : false;
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
          height:
            (isMessageOpen && !category) ||
            (isMessageOpen && !customHidden && !categoryType)
              ? "25vh"
              : "15vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Autocomplete
              size="small"
              value={category}
              onChange={(e, newValue) => {
                setCategory((prev) => ({
                  ...prev,
                  categoryType: "",
                  category: newValue,
                }));
              }}
              disablePortal
              options={carsType}
              sx={{ width: 310, mt: 3, ml: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Կատեգորիա*" />
              )}
            />
            {isMessageOpen && !category && <CustomizedAlert />}
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              size="small"
              hidden={customHidden}
              disablePortal
              value={categoryType}
              onChange={(e, newValue) => {
                setCategory((prev) => ({
                  ...prev,
                  categoryType: newValue,
                }));
              }}
              id="combo-box-demo"
              options={catHandleSort}
              sx={{ width: 310, mt: 3 }}
              renderInput={(params) => (
                <TextField {...params} label="Տեսակը*" />
              )}
            />
            {isMessageOpen && !customHidden && !categoryType && (
              <CustomizedAlert />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Category;
