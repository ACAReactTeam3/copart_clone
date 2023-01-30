import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import React from "react";
import { condition, customsCleared } from "../forSellCar&Filter";

export const PiceList = ({ pice, setPice }) => {
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [alignment, setAlignment] = React.useState("left");
  console.log(alignment);

  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box
      sx={{
        mt: 6,
        width: 300,
        height: 535,
        backgroundColor: "lightskyblue",
      }}
    >
      <Typography variant="body1" component="h2" sx={{ mt: 4, mb: 1, ml: 3 }}>
        Գինը*
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <TextField
          sx={{
            width: 120,
            mt: 1,
            ml: 3,
            backgroundColor: "white",
          }}
          type="number"
          variant="outlined"
          onChange={(e) => setPice(e.target.value)}
        />
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="left"
            aria-label="left aligned"
          >
            <CurrencyPoundIcon />
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="center"
            aria-label="centered"
          >
            <AttachMoneyIcon />
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="right"
            aria-label="right aligned"
          >
            <CurrencyRubleIcon />
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="justify"
            aria-label="justified"
          >
            <CurrencyYuanIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography
          variant="body2"
          component="h2"
          sx={{ mt: 4, mb: 1, ml: 3, color: "gray" }}
        >
          Խորհուրդ ենք տալիս ավտոմեքենայի գինը նշել ՀՀ դրամով` «Արժութային
          կարգավորման եւ արժութային վերահսկողության մասին» օրենքի համաձայն
        </Typography>
      </Grid>
      <Typography variant="body1" component="h2" sx={{ mt: 12, mb: 1, ml: 3 }}>
        Մաքսազերծված է*
      </Typography>

      <Autocomplete
        sx={{ width: 200, mt: 2, ml: 3, backgroundColor: "white" }}
        disablePortal
        //onChange={(e, mileageType) => setMileageType(mileageType)}
        id={"combo-box-demo"}
        options={customsCleared}
        renderInput={(params) => <TextField {...params} />}
      />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Պայմ․"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Փոխանակում"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Մաս-Մաս վճարում"
          />
        </FormGroup>
      </FormControl>
      <Typography variant="body1" component="h2" sx={{ mt: 4, mb: 1 }}>
        Վիճակը*
      </Typography>
      <Autocomplete
        sx={{ width: 300, mt: 1, backgroundColor: "white" }}
        disablePortal
        //onChange={(e, mileageType) => setMileageType(mileageType)}
        id={"combo-box-demo"}
        options={condition}
        renderInput={(params) => <TextField {...params} />}
      />
      <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
        VIN / Թափքի համարը
      </Typography>
      <TextField
        sx={{ width: 300, mt: 1 }}
        type="text"
        label={"JTHCK262665001465"}
        variant="outlined"
        //onChange={(e) => setPower(e.target.value)}
      />
      <Typography variant="body2" component="h2" sx={{ mt: 2, color: "gray" }}>
        Այստեղ կարող եք նշել ավտոմեքենայի VIN կոդը կամ թափքի համարը
      </Typography>
    </Box>
  );
};
