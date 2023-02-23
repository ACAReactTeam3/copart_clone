import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, dbStore, storage } from "../../firebase/firebase";
//import { ref } from "firebase/database";
//import { getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initialOptions } from "./forSellCar&Filter";
import Category from "./sellComponents/Category";
import SellDescription from "./sellComponents/SellDescription";
import { AdditionalOptions } from "./sellComponents/AdditionalOptions ";
import { Location } from "./sellComponents/Location";
import { AdditionalInformation } from "./sellComponents/AdditionalInformation";
import { Photos } from "./sellComponents/Photos";
import { useNavigate } from "react-router-dom";
import { checkEmptyFilds } from "./sellComponents/customized";
import { Stack } from "@mui/system";
import defaultPhoto from "../../images/defaultPhoto.jpg";

const SellPage = (props) => {
  let [img, setImg] = useState(null);
  console.log(img, "img");
  let [url, setUrl] = useState([]);
  const [cId, setCId] = useState("");
  const [per, setPer] = useState(null);
  //console.log(defaultPhoto);
  const getData = useSelector(function (state) {
    return state;
  });
  const [catAndType, setCategory] = useState({
    category: "Մարդատար",
    categoryType: "",
  });

  const [carDescription, setCarDescription] = useState({
    selectedBrand: "",
    model: "",
    year: "",
    carBodyType: "",
    carMileage: "",
    mileageType: "",
    selGearbox: "",
    selSteeringWheel: "",
    selFuel: "",
    selColor: "",
    selTires: "x",
    selDoors: "x",
    selDrive: "",
    selCylinders: "x",
    power: "x",
    selEngineType: "x",
    selSalonColor: "x",
  });
  //console.log(carDescription.carMileage, "mill");
  const [priceList, setPriceList] = useState({
    price: "",
    currency: "",
    sellCustomsCleared: "",
    saleConditions: { Պայմ: false, Փոխանակում: false, ՄասՄասվճարում: false },
    sellCarState: "",
    sellVinCode: "",
  });
  //console.log(priceList, "priceList");
  const [options, setOptions] = useState(initialOptions);
  //console.log(options);

  const [location, setLocation] = useState({
    country: "",
    citySettlement: "",
    region: "",
    onWayAtAuction: { Ճանապարհին: false, Աճուրդում: false },
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    addInfo: "",
    phoneNum: "",
    phone: [],
  });

  const [post, setPost] = useState({});
  const [isActive, setIsActive] = useState(false);

  const filterOptions = (obj) => {
    const keys = Object.keys(obj);
    const option = [];
    keys.forEach((key) => {
      if (obj[key] == true) {
        option.push(key);
      }
    });
    return option;
  };

  useEffect(
    () =>
      setPost((prev) => ({
        ...prev,
        userEmail: auth?.currentUser?.email,
        brand: carDescription.selectedBrand,
        carBodyType: carDescription.carBodyType,
        color: carDescription.selColor,
        model: carDescription.model,
        year: carDescription.year,
        carMileage:
          carDescription.carMileage + " " + carDescription.mileageType,
        price: priceList.price + " " + priceList.currency,
        category: catAndType.category,
        timeStamp: serverTimestamp(),
        selGearbox: carDescription.selGearbox,
        selSteeringWheel: carDescription.selSteeringWheel,
        selFuel: carDescription.selFuel,
        selTires: carDescription.selTires,
        selDoors: carDescription.selDoors,
        selDrive: carDescription.selDrive,
        selCylinders: carDescription.selCylinders,
        power: carDescription.power,
        selEngineType: carDescription.selEngineType,
        selSalonColor: carDescription.selSalonColor,
        options: filterOptions(options),
        phoneNum: additionalInfo.phoneNum,
        phone: additionalInfo.phone,
        additionalInfo: additionalInfo.addInfo,
        saved: [],
        isActive: !isActive,
      })),
    [
      getData,
      auth,
      carDescription,
      priceList,
      catAndType,
      options,
      additionalInfo,
    ]
  );
  console.log(additionalInfo.phoneNum.length);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const isEmptyMess = checkEmptyFilds(
    catAndType,
    carDescription,
    priceList,
    location,
    additionalInfo
  );

  const navigate = useNavigate();
  // add post

  const add = async () => {
    const newPost = await addDoc(collection(dbStore, "post"), post);
    console.log(newPost.id);
    navigate("/personalinfo/myOffers", { replace: true });
  };

  useEffect(() => {
    const uploadImg = () => {
      const name = new Date().getTime() + img.name;

      const storageRef = ref(
        storage,
        `image/${auth.currentUser.email}/${cId}/${name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPer(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setPost((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    img && uploadImg();
    setCId(new Date().getTime());
    setPost((prev) => ({ ...prev, imgFolderId: cId }));
  }, [img]);

  return (
    <Container maxWidth="md" sx={{ ml: 16, margin: [0, "auto"] }}>
      <Toolbar id="back-to-top-anchor" />
      <Category
        isMessageOpen={isMessageOpen}
        catAndType={catAndType}
        setCategory={setCategory}
      />
      <SellDescription
        isMessageOpen={isMessageOpen}
        carDescription={carDescription}
        setCarDescription={setCarDescription}
        priceList={priceList}
        setPriceList={setPriceList}
      />
      <AdditionalOptions options={options} setOptions={setOptions} />
      <Location
        isMessageOpen={isMessageOpen}
        location={location}
        setLocation={setLocation}
      />
      <AdditionalInformation
        isMessageOpen={isMessageOpen}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
      <Photos setImg={setImg} />
      <Box>
        <Stack direction="row" spacing={47}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                name="activ"
              />
            }
            label="Պահպանել, բայց չհրապարակել"
          />
          <Typography
            textAlign={"center"}
            variant="body2"
            component="h2"
            sx={{ color: "gray" }}
          >
            Տեղադրման ժամկետը 60 օր
          </Typography>
        </Stack>
        <Typography variant="body2" component="h2">
          Սեղմելով Տեղադրել հայտարարություն կոճակը՝ Դուք հաստատում եք, որ
          ընդունում եք AUTO.am-ի Օգտագործման կանոնները
        </Typography>
      </Box>
      <Button
        disabled={per !== null && per < 100}
        onClick={() => {
          setIsMessageOpen(true);
          isEmptyMess && add();
        }}
        sx={{ width: 350, height: 50, mt: 5, mb: 10 }}
        variant="contained"
      >
        Տեղադրել հայտարարությունը
      </Button>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default SellPage;
