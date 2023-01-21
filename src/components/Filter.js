import React, { useState } from "react";
import { v4 as uuid } from 'uuid'
import Box from "@mui/material/Box";
import { Stack, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { createUseStyles } from "react-jss";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useEffect } from "react";

const useStyle = createUseStyles({
  box: {
    position: "relative",
  },
  input: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  button: {
    position: "relative",
    margin: 'auto'
  },
});

export default function Filter() {
  let classes = useStyle();
  let [carName, setCarName] = useState([])
  let [brand, setBrand] = useState('')
  let [modelName, setModelName] = useState([])
  let [model, setModel] = useState('')
  let [color, setColor] = useState("#000");
  let [price, setPrice] = useState("");
  let [mileage, setMileage] = useState("");
  let [distanceType, setDistanceType] = useState('ԿՄ')

  let [moneyType, setMoneyType] = useState('USD $');
  let bodyType = ['SEDAN', 'COUPE', 'SPORTS','STATION WAGON','HATCHBACK', 'CONVERTIBLE', 'SPORT-UTILITY VEHICLE (SUV)', 'MINIVAN', 'PICKUP TRUCK'];
  let [body, setBody] = useState('')
  let [gearbox, setGearbox ] = useState('')
  let [engine, setEngine] = useState('')

  const handleChangeMoneyType = (event) => {
    setMoneyType(event.target.value) ;
  };
  const handleChangeDistanceType = (event) => {
    setDistanceType(event.target.value) ;
  };
  const handleChangeBodyType = (event) => {
    setBody(event.target.value) ;
  };
  const handleChangeGearboxType = (event) => {
    setGearbox(event.target.value) ;
  };

  const handleChangeEngineType = (event) => {
    setEngine(event.target.value) ;
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json')
        .then(function(response) {
            return response.json()
        }).then(function(result) {
            setCarName(result)
        })
  }, [])

  useEffect(() => {
    if(brand) {
      setModelName(carName.find(obj => obj.brand == brand).models)
    }
}, [brand])

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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className={classes.input}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Մակնիշը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={brand}
                onChange={(e) => {
                    setBrand(e.target.value)
                }}
                input={<OutlinedInput label="Brand" />}
              >
                {
                  carName.map(item => {
                   return <MenuItem value={item.brand} key={uuid()}> {item.brand} </MenuItem>
                  })
                }
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Մոդելը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value)
                }}
                input={<OutlinedInput label="Model" />}
              >
                {
                    modelName.map(item => {
                        return <MenuItem value={item} key={uuid()}> {item} </MenuItem>
                    })
                } 
              </Select>
            </FormControl>
              <TextField
                label="Գույնը"
                value={color}
                type='color'                
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />           
              <TextField
                label="Արժեքը"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value.replace(/[^0-9,]/g,''));
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
                <MenuItem value='AMD ֏' >AMD ֏</MenuItem>
                <MenuItem value='USD $' >USD $</MenuItem>
                <MenuItem value='EUR €' >EUR €</MenuItem>
              </Select>
            </FormControl>           
              <TextField
                label="Վազքը"
                value={mileage}
                onChange={(e) => {
                  setMileage(e.target.value.replace(/[^0-9,]/g,''));
                }}
              />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Միավորը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={distanceType}
                onChange={handleChangeDistanceType}
                input={<OutlinedInput label="Միավորը" />}
              >
                <MenuItem value='ԿՄ' >ԿՄ</MenuItem>
                <MenuItem value='ՄՂՈՆ' >ՄՂՈՆ</MenuItem>
              </Select>
            </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Թափքը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={body}
                onChange={handleChangeBodyType}
                input={<OutlinedInput label="Body" />}
              >
                {
                  bodyType.map(item => {
                    return <MenuItem value={item} key={uuid()}> {item} </MenuItem>
                  })
                }
              </Select>
            </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Փոխանցման տուփը  </InputLabel>
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
              <InputLabel id="demo-dialog-select-label"> Շարժիչը </InputLabel>
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
            <Stack direction="row" spacing={2}>
              <Button className={classes.button} variant="primary" endIcon={<ManageSearchIcon />}
              /*  onClick={() => {
                 return onFilter(brand, color, price, moneyType, mileage, body, gearbox, handDrive, engine)
               }} */>
                Փնտրել 
              </Button>
            </Stack>
          </Box>
      </Box>
    </div>
  );
}