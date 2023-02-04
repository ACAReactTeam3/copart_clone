import { Image } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries, provincesOfArmenia } from "../../forSellCar&Filter";
import {
  addCitySettlement,
  addCountry,
  addOnWayAtAuction,
  addRegion,
  selectSellLocation,
} from "./locationSlice";

export const Location = () => {
  const dispatch = useDispatch();
  const { country, citySettlement, region, onWayAtAuction } =
    useSelector(selectSellLocation);

  const handleChange = (event) => {
    dispatch(
      addOnWayAtAuction({
        ...onWayAtAuction,
        [event.target.name]: event.target.checked,
      })
    );
  };
  const { Ճանապարհին, Աճուրդում } = onWayAtAuction;

  //console.log(useSelector(selectSellLocation));

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Գտնվելու վայրը
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: "40vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2, ml: 5 }}>
              Եիկիրը*
            </Typography>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 310, mt: 1, ml: 5 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              onChange={(e, newValue) => dispatch(addCountry(newValue))}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <Box>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                  </Box>

                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ընտրել"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
              Մարզը
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              onChange={(e, newValue) => dispatch(addRegion(newValue))}
              options={provincesOfArmenia}
              sx={{ width: 310, mt: 1 }}
              renderInput={(params) => <TextField {...params} label="Ընտրել" />}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2, ml: 5 }}>
              Շիջան, քաղաք, բնակավայր
            </Typography>
            <TextField
              sx={{ width: 300, mt: 1, ml: 5 }}
              type="text"
              label={"Շիջան, քաղաք, բնակավայր"}
              variant="outlined"
              onChange={(e) => dispatch(addCitySettlement(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              sx={{ mt: 3.5 }}
              component="fieldset"
              variant="standard"
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Ճանապարհին}
                      onChange={handleChange}
                      name="Ճանապարհին"
                    />
                  }
                  label="Ճանապարհին է"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Աճուրդում}
                      onChange={handleChange}
                      name="Աճուրդում"
                    />
                  }
                  label="Աճուրդում է"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
