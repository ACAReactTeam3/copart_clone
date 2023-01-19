import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper, Stack, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createUseStyles } from "react-jss";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

const useStyle = createUseStyles({
    '@global': {
        body: {
            backgroundColor: 'brown', 
        }
    },
  box: {
    position: "relative",
  },
  contentTitle: {
    height: 'auto',
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  select: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 15,
  },
  button: {
    position: "relative",
    left: "40%",
  },
});

export default function CreatePost(props) {
  
  const { addedPost } = props;
  let classes = useStyle();
  let [model, setModel] = useState("");
  let [color, setColor] = useState("");
  let [price, setPrice] = useState("");
  let [mileage, setMileage] = useState("");
  let [horsepower, setHorsepower] = useState("");

  let [moneyType, setMoneyType] = useState('');
  let [body, setBody] = useState('')
  let [gearbox, setGearbox ] = useState('')
  let [handDrive, setHandDrive] = useState('')
  let [engine, setEngine] = useState('')
  let [additionalInfo, setAdditionalInfo] = useState('')

  const handleChangeMoneyType = (event) => {
    setMoneyType(event.target.value) ;
  };
  const handleChangeBodyType = (event) => {
    setBody(event.target.value) ;
  };
  const handleChangeGearboxType = (event) => {
    setGearbox(event.target.value) ;
  };
  const handleChangeHandDrive = (event) => {
    setHandDrive(event.target.value) ;
  };
  const handleChangeEngineType = (event) => {
    setEngine(event.target.value) ;
  };

  return (
    <div className={classes.box}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'center',
          "& > :not(style)": {
            m: 1,
            minWidth: 400,
            height: 'auto'
          },
        }}
      >
        <Paper elevation={3}>
          <h2 className={classes.contentTitle}> Create Post </h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Model"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
              <TextField
                label="Color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>

            <div>
              <TextField
                label="Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
       
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Value </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={moneyType}
                onChange={handleChangeMoneyType}
                input={<OutlinedInput label="Value" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='AMD ЦЏ' >AMD ֏</MenuItem>
                <MenuItem value='USD $' >USD $</MenuItem>
                <MenuItem value='EUR в‚¬' >EUR €</MenuItem>
              </Select>
            </FormControl>
           
            </div>
            <div>
              <TextField
                label="Mileage"
                value={mileage}
                onChange={(e) => {
                  setMileage(e.target.value);
                }}
              />
              <TextField
                label="Horsepower"
                value={horsepower}
                onChange={(e) => {
                  setHorsepower(e.target.value);
                }}
              />
            </div>
            <div className={classes.select}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Body </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={body}
                
                onChange={handleChangeBodyType}
                input={<OutlinedInput label="Body" />}
              >
                  <MenuItem value=''> <em>None</em> </MenuItem>
                  <MenuItem value='SEDAN'> SEDAN </MenuItem>
                  <MenuItem value='COUPE'> COUPE</MenuItem>
                  <MenuItem value='SPORTS CAR'> SPORTS CAR </MenuItem>
                  <MenuItem value='STATION WAGON'> STATION WAGON </MenuItem>
                  <MenuItem value='HATCHBACK'> HATCHBACK </MenuItem>
                  <MenuItem value='CONVERTIBLE'> CONVERTIBLE </MenuItem>
                  <MenuItem value='SPORT-UTILITY VEHICLE (SUV)'> SPORT-UTILITY VEHICLE (SUV) </MenuItem>
                  <MenuItem value=' MINIVAN'>  MINIVAN </MenuItem>
                  <MenuItem value='PICKUP TRUCK'> PICKUP TRUCK </MenuItem>
              </Select>
            </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Gearbox </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={gearbox}
                onChange={handleChangeGearboxType}
                input={<OutlinedInput label="Gearbox" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Automatic' >Automatic</MenuItem>
                <MenuItem value='Manual' >Manual</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Hand Drive </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={handDrive}
                onChange={handleChangeHandDrive}
                input={<OutlinedInput label="Hand Drive" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Left' >Left</MenuItem>
                <MenuItem value='Right' >Right</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Engine </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={engine}
                onChange={handleChangeEngineType}
                input={<OutlinedInput label="Engine" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Diesel' >Diesel</MenuItem>
                <MenuItem value='Petrol' >Petrol</MenuItem>
                <MenuItem value='Electric' >Electric</MenuItem>
                <MenuItem value='Hybrid' >Hybrid</MenuItem>
                <MenuItem value='Gas' >Gas</MenuItem>
              </Select>
            </FormControl>
            </div>
            <Box
              sx={{ "& .MuiTextField-root": { m: 1, width: 450 },}}
            >
              <div>
                <TextField id="fullWidth" label="Additional" multiline value={additionalInfo} onChange={(e) => {setAdditionalInfo(e.target.value)}} />
              </div>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button className={classes.button} variant="primary" endIcon={<SendIcon />}
               onClick={() => {
                 return addedPost(model, color, price, moneyType, mileage, horsepower, body, gearbox, handDrive, engine, additionalInfo)
               }}>
                Send 
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}