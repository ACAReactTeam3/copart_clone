import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additOpt, initialOptions } from "../../forSellCar&Filter";
import { addOptions, selectAdditionalOptions } from "./additionalOptionsSlice";

export const AdditionalOptions = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectAdditionalOptions);
  const [btnMore, setBtnMore] = useState("+ Ավելին");
  const moreAdditOpt = ((btnMore) =>
    btnMore === "+ Ավելին" ? 12 : additOpt.length)(btnMore);

  //const [options, setOptions] = useState(initialOptions);

  const handleChange = (event) => {
    // setOptions({
    //   ...options,
    //   [event.target.name]: event.target.checked,
    // });
    dispatch(
      addOptions({
        ...options,
        [event.target.name]: event.target.checked,
      })
    );
  };
  //console.log(options);
  return (
    <Grid>
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
        Լրացուցիչ օպցիաներ
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: btnMore === "- Ավելին" ? "158vh" : "55vh",
          border: "ButtonFace",
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 0.1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {additOpt
            .filter((item, index) => index < moreAdditOpt)
            .map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <FormControl
                  sx={{ m: 1, mt: 1, ml: 5 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormGroup>
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={options[item]}
                          onChange={handleChange}
                          name={item}
                        />
                      }
                      label={item}
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            ))}
        </Grid>
        <Button
          onClick={() =>
            btnMore === "+ Ավելին"
              ? setBtnMore("- Ավելին")
              : setBtnMore("+ Ավելին")
          }
          sx={{ width: 120, mt: 5, ml: 5 }}
          variant="contained"
        >
          {btnMore}
        </Button>
      </Box>
    </Grid>
  );
};
