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
import { CustomizedAlert } from "./customized";

export const PriceList = ({ priceList, setPriceList, isMessageOpen }) => {
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
        height:
          isMessageOpen && (!price || !currency) && !sellCustomsCleared
            ? 570
            : (isMessageOpen && (!price || !currency)) ||
              (isMessageOpen && !sellCustomsCleared)
            ? 525
            : 480,
        backgroundColor: "lightskyblue",
      }}
    >
      <Typography variant="body1" component="h2" sx={{ mt: 3, mb: 1, ml: 3 }}>
        Գինը*
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <TextField
          size="small"
          sx={{
            width: 145,
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
              height: 40,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="֏"
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
              height: 40,
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="$"
          >
            <AttachMoneyIcon fontSize="medium" />
          </ToggleButton>
          <ToggleButton
            sx={{
              height: 40,
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="€"
          >
            <EuroSymbolIcon />
          </ToggleButton>
          <ToggleButton
            sx={{
              height: 40,
              width: 5,
              mt: 1,
              ml: 3,
              backgroundColor: "white",
              color: "inherit",
            }}
            value="₽"
          >
            <CurrencyRubleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        {isMessageOpen && (!price || !currency) && (
          <CustomizedAlert sx={{ width: 233, ml: 3, mb: 0 }} />
        )}
        <Typography
          variant="body2"
          component="h2"
          sx={{ mt: 2, mb: 1, ml: 3, color: "gray" }}
        >
          Խորհուրդ ենք տալիս ավտոմեքենայի գինը նշել ՀՀ դրամով` «Արժութային
          կարգավորման եւ արժութային վերահսկողության մասին» օրենքի համաձայն
        </Typography>
      </Grid>
      <Typography variant="body1" component="h2" sx={{ mt: 12, mb: 1, ml: 3 }}>
        Մաքսազերծված է*
      </Typography>

      <Autocomplete
        size="small"
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
      {isMessageOpen && !sellCustomsCleared && (
        <CustomizedAlert sx={{ width: 233, ml: 3, mb: 0 }} />
      )}
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
        size="small"
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
      {isMessageOpen && !sellCarState && (
        <CustomizedAlert sx={{ width: 235, ml: 5, mb: 0 }} />
      )}
      <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
        VIN / Թափքի համարը
      </Typography>
      <TextField
        size="small"
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
