import {
  Autocomplete,
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { carsType, carsTypeSort } from "../../forSellCar&Filter";

export const AdditionalInformation = () => {
  const [additPhoneNum, setAdditPhoneNum] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [phoneNum374, setPhoneNum374] = useState("");

  //console.log(additPhoneNum, "additPhoneNum");

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Լրացուցիչ տվյալներ
      </Typography>
      <Box
        sx={{
          mt: 5,
          mb: 1,
          bgcolor: "Window",
          height: "36vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              sx={{ mt: 2, ml: 5, width: 310 }}
              placeholder="Այս դաշտում արգելվում է տեղադրել․ հեռախոսահամարներ, կայքերի, էլ․ փոստի հասցեներ, գովազդային տեքստեր։ Առավելագույնը՝ 200 նիշ։"
              id="outlined-multiline-static"
              //label="Multiline"
              multiline
              rows={5}
              onChange={(e) => setAddInfo(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
              Լրացուցիչ հեռախոսահամար
            </Typography>
            <TextField
              type={"number"}
              size="small"
              id="outlined-start-adornment"
              value={additPhoneNum}
              sx={{ m: 0, width: 310, mt: 1 }}
              onChange={(e) => {
                additPhoneNum.length < 8
                  ? setAdditPhoneNum(e.target.value)
                  : setAdditPhoneNum(e.target.value.slice(0, 8));

                setPhoneNum374("(+374) " + additPhoneNum);
              }}
              placeholder="91 123456"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+374</InputAdornment>
                ),
              }}
            />
            <Typography
              variant="body2"
              component="h2"
              sx={{ mt: 2, color: "gray", width: 310 }}
            >
              Այստեղ կարող եք նշել հեռախոսահամար տվյալ հայտարարության համար։
              Լրացուցիչ հեռախոսահամար չնշելու դեպքում, կցուցադրվի գրանցման
              ժամանակ նշված հեռախոսահամարը։
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
