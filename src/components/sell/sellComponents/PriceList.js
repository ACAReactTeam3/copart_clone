import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import { carState, customsCleared } from "../forSellCar&Filter";

export const PriceList = ({ priceList, setPriceList }) => {
  const {
    price,
    currency,
    sellCustomsCleared,
    saleConditions,
    sellCarState,
    sellVinCode,
  } = priceList;

  const { Պայմ, Փոխանակում, ՄասՄասվճարում } = saleConditions;

  const handleCurrency = (event, newValue) => {
    setPriceList((prev) => ({
      ...prev,
      currency: newValue,
    }));
  };

  const handleChange = (event) => {
    setPriceList((prev) => ({
      ...prev,
      saleConditions: {
        ...saleConditions,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  return (
    <Box
      sx={{
        mt: 6,
        width: 310,
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
          onChange={(e) =>
            setPriceList((prev) => ({
              ...prev,
              price: e.target.value,
            }))
          }
        />
        <ToggleButtonGroup value={currency} exclusive onChange={handleCurrency}>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="amd"
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                mb: 1.5,
              }}
            >
              ֏
            </Typography>
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="usd"
          >
            <AttachMoneyIcon fontSize="medium" />
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="eur"
          >
            <EuroSymbolIcon />
          </ToggleButton>
          <ToggleButton
            sx={{
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="rub"
          >
            <CurrencyRubleIcon />
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
        onChange={(e, newValue) =>
          setPriceList((prev) => ({
            ...prev,
            sellCustomsCleared: newValue,
          }))
        }
        id={"combo-box-demo"}
        options={customsCleared}
        renderInput={(params) => <TextField {...params} />}
      />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Պայմ} onChange={handleChange} name="Պայմ" />
            }
            label="Պայմ․"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Փոխանակում}
                onChange={handleChange}
                name="Փոխանակում"
              />
            }
            label="Փոխանակում"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ՄասՄասվճարում}
                onChange={handleChange}
                name="ՄասՄասվճարում"
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
        sx={{ width: 310, mt: 1, backgroundColor: "white" }}
        disablePortal
        onChange={(e, newValue) =>
          setPriceList((prev) => ({
            ...prev,
            sellCarState: newValue,
          }))
        }
        id={"combo-box-demo"}
        options={carState}
        renderInput={(params) => <TextField {...params} />}
      />
      <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
        VIN / Թափքի համարը
      </Typography>
      <TextField
        sx={{ width: 310, mt: 1 }}
        type="text"
        placeholder={"JTHCK262665001465"}
        variant="outlined"
        onChange={(e) =>
          setPriceList((prev) => ({
            ...prev,
            sellVinCode: e.target.value,
          }))
        }
      />
      <Typography variant="body2" component="h2" sx={{ mt: 2, color: "gray" }}>
        Այստեղ կարող եք նշել ավտոմեքենայի VIN կոդը կամ թափքի համարը
      </Typography>
    </Box>
  );
};