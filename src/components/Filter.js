import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { createUseStyles } from "react-jss";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { prodTYear } from "./sell/forSellCar&Filter";
import { price } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const useStyle = createUseStyles({
  box: {
    position: "relative",
  },
  inputSearch: {
    width: "75%",
    display: "flex",
    flexWrap: "wrap",
    margin: [0, "auto"],
  },
  button: {
    position: "relative",
    margin: "auto",
  },
  advancedSearch: {
    display: "none",
  },
  checkSearch: {
    width: "100%",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default function Filter(props) {
  let classes = useStyle();
  let navigate = useNavigate();
  let [carName, setCarName] = useState([]);
  let [brand, setBrand] = useState("");
  let [modelName, setModelName] = useState([]);
  let [model, setModel] = useState("");

  let [minYear, setMinYear] = useState("2000");
  let [maxYear, setMaxYear] = useState("2024");
  let [minPrice, setMinPrice] = useState("3000");
  let [maxPrice, setMaxPrice] = useState("30000");
  let bodyType = [
    "Սեդան",
    "Հետչբեք",
    "ՈՒնիվերսալ",
    "Կուպե",
    "Կաբրիոլետ / Ռոդսթեր",
    "Ամենագնաց",
    "Պիկապ",
    "Մինիվեն / Միկրոավտոբուս",
    "Ֆուրգոն",
    "Լիմուզին",
  ];
  let [body, setBody] = useState("Սեդան");
  let [steeringWheel, setSteeringWheel] = useState("");
  let [gearbox, setGearbox] = useState("");
  let [engine, setEngine] = useState("");
  const [isShow, setIsShow] = useState(false);
  let year = prodTYear.reverse();

  const handleChangeBodyType = (event) => {
    setBody(event.target.value);
  };
  const handleChangeSteeringWheelType = (event) => {
    setSteeringWheel(event.target.value);
  };
  const handleChangeGearboxType = (event) => {
    setGearbox(event.target.value);
  };

  const handleChangeEngineType = (event) => {
    setEngine(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setCarName(result);
      });
  }, []);

  useEffect(() => {
    if (brand) {
      setModelName(carName.find((obj) => obj?.brand == brand).models);
      props.setSelectFilter(() => {
        return [
          {
            brand: brand,
            model: "",
            minYear: minYear,
            maxYear: maxYear,
            minPrice: minPrice,
            maxPrice: maxPrice,
            body: body,
          },
        ];
      });
    }
  }, [brand]);

  useEffect(() => {
    props.setSelectFilter(() => {
      return [
        {
          brand: brand,
          model: model,
          minYear: minYear,
          maxYear: maxYear,
          minPrice: minPrice,
          maxPrice: maxPrice,
          body: body,
        },
      ];
    });
  }, [brand, model, minYear, maxYear, minPrice, maxPrice]);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={classes.inputSearch}>
          <FormControl sx={{ m: 1, mt: 1, mb: 1, minWidth: 120, left: 30 }}>
            <InputLabel id="demo-dialog-select-label"> Մակնիշը </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              input={<OutlinedInput label="Brand" />}
            >
              {carName.map((item) => {
                return (
                  <MenuItem value={item.brand} key={uuid()}>
                    {item.brand}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, mt: 1, mb: 1, minWidth: 120, left: 30 }}>
            <InputLabel id="demo-dialog-select-label"> Մոդելը </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
              input={<OutlinedInput label="Model" />}
            >
              {modelName.map((item) => {
                return (
                  <MenuItem value={item} key={uuid()}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, mt: 1, mb: 2, minWidth: 120, left: 30 }}>
            <InputLabel id="demo-dialog-select-label"> Տարին, սկս. </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={minYear}
              onChange={(e) => {
                setMinYear(e.target.value);
              }}
              input={<OutlinedInput label="minYear" />}
            >
              {year.reverse().map((item) => {
                return (
                  <MenuItem key={uuid()} value={item}>
                    {" "}
                    {item}{" "}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, mt: 1, mb: 2, minWidth: 120, left: 30 }}>
            <InputLabel id="demo-dialog-select-label"> Մինչև </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={maxYear}
              onChange={(e) => {
                setMaxYear(e.target.value);
              }}
              input={<OutlinedInput label="maxYear" />}
            >
              {year.map((item) => {
                return (
                  <MenuItem key={uuid()} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label"> Գինը, սկս. </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
              input={<OutlinedInput label="minPrice" />}
            >
              {price.map((item) => {
                return (
                  <MenuItem key={uuid()} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label"> Մինչև </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              input={<OutlinedInput label="maxPrice" />}
            >
              {price.map((item) => {
                return (
                  <MenuItem key={uuid()} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl> */}
          <div className={!isShow ? classes.advancedSearch : null}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Թափքը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={body}
                onChange={handleChangeBodyType}
                input={<OutlinedInput label="Body" />}
              >
                {bodyType.map((item) => {
                  return (
                    <MenuItem value={item} key={uuid()}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> Ղեկը </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={steeringWheel}
                onChange={handleChangeSteeringWheelType}
                input={<OutlinedInput label="Ղեկը" />}
              >
                <MenuItem value="Ձախ">Ձախ</MenuItem>
                <MenuItem value="Աջ">Աջ</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">
                Փոխանցման տուփը
              </InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={gearbox}
                onChange={handleChangeGearboxType}
                input={<OutlinedInput label="Gearbox" />}
              >
                <MenuItem value="Մեխանիկական">Մեխանիկական</MenuItem>
                <MenuItem value="Ավտոմատ">Ավտոմատ</MenuItem>
                <MenuItem value="Manual">Կիսաավտոմատ</MenuItem>
                <MenuItem value="Manual">Վարիատոր</MenuItem>
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
                <MenuItem value="Բենզին">Բենզին</MenuItem>
                <MenuItem value="Գազ">Գազ</MenuItem>
                <MenuItem value="Դիզել">Դիզել</MenuItem>
                <MenuItem value="Հիբրիդ">Հիբրիդ</MenuItem>
                <MenuItem value="Էլեկտրական">Էլեկտրական</MenuItem>
                <MenuItem value="Ջրածին">Ջրածին</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/*  <div className={classes.checkSearch}>
            <label>
              <input type="checkbox" />
              Մաքսազերծված
            </label>
            <label>
              <input type="checkbox" />
              Մաս-մաս վճարում
            </label>
            <label>
              <input type="checkbox" />
              Փոխանակում
            </label>
            <label>
              <input type="checkbox" />
              Դիլերներ
            </label>
            <Button
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              {isShow ? "հասարակ որոնում" : "Ընդլայնված որոնում"}
            </Button>
          </div> */}
          <Button
            variant="contained"
            style={{ margin: "auto" }}
            onClick={() => {
              return navigate("/filteredPage");
            }}
          >
            Բոլոր առաջարկները
          </Button>
        </div>
      </Box>
    </>
  );
}
