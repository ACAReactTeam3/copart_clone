import { Button } from "@mui/material";
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

const SellPage = (props) => {
  let [img, setImg] = useState(null);
  let [url, setUrl] = useState([]);
  const [cId, setCId] = useState("");
  const [per, setPer] = useState(null);

  const getData = useSelector(function (state) {
    return state;
  });
  const [catAndType, setCategory] = useState({
    category: "Մարդատար",
    categoryType: "",
  });

  const [carDescription, setCarDescription] = useState({
    selectedBrand: "x",
    model: "x",
    year: "x",
    carBodyType: "x",
    carMileage: "x",
    mileageType: "",
    selGearbox: "x",
    selSteeringWheel: "x",
    selFuel: "x",
    selColor: "x",
    selTires: "x",
    selDoors: "x",
    selDrive: "",
    selCylinders: "",
    power: "x",
    selEngineType: "",
    selSalonColor: "",
  });

  const [priceList, setPriceList] = useState({
    price: "x",
    currency: "",
    sellCustomsCleared: "",
    saleConditions: { Պայմ: false, Փոխանակում: false, ՄասՄասվճարում: false },
    sellCarState: "",
    sellVinCode: "",
  });

  const [options, setOptions] = useState(initialOptions);
  console.log(options);

  const [location, setLocation] = useState({
    country: "",
    citySettlement: "",
    region: "",
    onWayAtAuction: { Ճանապարհին: false, Աճուրդում: false },
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    addInfo: "",
    phoneNum: "",
  });

  const [post, setPost] = useState({
    //photos
    photos: {},
  });

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
        price: priceList.price,
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
        additionalInfo: additionalInfo.addInfo,

        // :carDescription.,
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
  //const storage = getStorage();
  console.log(post, "post");
  // add post
  const add = async () => {
    const newPost = await addDoc(collection(dbStore, "post"), post);
    console.log(newPost.id);
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
  //console.log(cId);
  // const addPhoto = (id) => {
  //   const imageRef = ref(
  //     storage,
  //     `image/${auth.currentUser.email}/1aMIrTdlZNEupeP4g19p/${img.name}`
  //   ); // id ??
  //   uploadBytes(imageRef, img)
  //     .then(() => {
  //       getDownloadURL(imageRef)
  //         .then((url) => {
  //           setUrl(url);
  //         })
  //         .catch((error) => {
  //           console.log("img error", error.message);
  //         });
  //       setImg(null);
  //     })
  //     .catch((error) => {
  //       console.log("err", error.message);
  //     });
  //   alert(id);
  // };
  return (
    <Container maxWidth="md" sx={{ ml: 16, margin: [0, "auto"] }}>
      <Toolbar id="back-to-top-anchor" />
      <Category catAndType={catAndType} setCategory={setCategory} />
      <SellDescription
        carDescription={carDescription}
        setCarDescription={setCarDescription}
        priceList={priceList}
        setPriceList={setPriceList}
      />
      <AdditionalOptions options={options} setOptions={setOptions} />
      <Location location={location} setLocation={setLocation} />
      <AdditionalInformation
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
      <Photos />
      <Button
        disabled={per !== null && per < 100}
        onClick={add}
        sx={{ width: 350, mt: 5, ml: 5 }}
        variant="contained"
      >
        Տեղադրել հայտարարությունը
      </Button>
      {/* <Button variant="outlined" type="file" onClick={addPhoto}>
        Upload image
      </Button> */}
      <input
        multiple
        type="file"
        onChange={(e) => {
          return setUrl(url), setImg(e.target.files[0]);
        }}
      />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default SellPage;
