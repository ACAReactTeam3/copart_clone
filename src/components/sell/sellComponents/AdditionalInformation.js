import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CustomizedAlert } from "./customized";

export const AdditionalInformation = ({
  additionalInfo,
  setAdditionalInfo,
  isMessageOpen,
}) => {
  const { addInfo, phoneNum } = additionalInfo;
  const [additPhoneNum, setAdditPhoneNum] = useState("");
  useEffect(() => {
    setAdditionalInfo((prev) => ({
      ...prev,
      phoneNum: "(+374) " + additPhoneNum,
      phone: ["(+374) " + additPhoneNum],
    }));
  }, [additPhoneNum]);

  console.log(additPhoneNum, "add");

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
              onChange={(e) =>
                setAdditPhoneNum((prev) => ({
                  ...prev,
                  addInfo: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
              Հիմնական հեռախոսահամար
            </Typography>
            <TextField
              type={"number"}
              size="small"
              id="outlined-start-adornment"
              value={additPhoneNum}
              sx={{ m: 0, width: 310, mt: 1 }}
              onChange={(e) => {
                e.target.value.length < 9 && setAdditPhoneNum(e.target.value);
              }}
              placeholder="91 123456"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+374</InputAdornment>
                ),
              }}
            />
            {isMessageOpen && (!phoneNum || phoneNum.length < 15) && (
              <CustomizedAlert sx={{ ml: 5, width: 238 }} />
            )}
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
