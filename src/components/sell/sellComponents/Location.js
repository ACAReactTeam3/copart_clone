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
import { countries, provincesOfArmenia } from "../forSellCar&Filter";
import { CustomizedAlert } from "./customized";

export const Location = ({ location, setLocation, isMessageOpen }) => {
  const { country, citySettlement, region, onWayAtAuction } = location;

  const handleChange = (event) => {
    setLocation((prev) => ({
      ...prev,
      onWayAtAuction: {
        ...onWayAtAuction,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  const { Ճանապարհին, Աճուրդում } = onWayAtAuction;

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Գտնվելու վայրը
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: isMessageOpen && !country ? "45vh" : "38vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2, ml: 5 }}>
              Եիկիրը*
            </Typography>
            <Autocomplete
              size="small"
              id="country-select-demo"
              sx={{ width: 310, mt: 1, ml: 5 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              onChange={(e, newValue) =>
                setLocation((prev) => ({
                  ...prev,
                  country: newValue,
                }))
              }
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
            {isMessageOpen && !country && <CustomizedAlert />}
          </Grid>

          <Grid item xs={6}>
            <Typography
              hidden={country?.label !== "Հայաստան"}
              variant="body1"
              component="h2"
              sx={{ mt: 2 }}
            >
              Մարզը
            </Typography>
            <Autocomplete
              size="small"
              hidden={country?.label !== "Հայաստան"}
              disablePortal
              id="combo-box-demo"
              onChange={(e, newValue) =>
                setLocation((prev) => ({
                  ...prev,
                  region: newValue,
                }))
              }
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
              size="small"
              sx={{ width: 300, mt: 1, ml: 5 }}
              type="text"
              label={"Շիջան, քաղաք, բնակավայր"}
              variant="outlined"
              onChange={(e) =>
                setLocation((prev) => ({
                  ...prev,
                  citySettlement: e.target.value,
                }))
              }
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
