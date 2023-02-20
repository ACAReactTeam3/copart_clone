import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth, dbStore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export let actionType = {
  userSignIn: "user-signIn",
  userSignUp: "user-signUp",
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signUp = async (email, password, name, surname) => {
  let db = getDatabase();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(dbStore, "user", email), {
        name: name,
        surname: surname,
        posts: [],
        saved: [],
        messages: [],
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setDoc(doc(dbStore, "user", auth.currentUser.email), {
        posts: [],
        saved: [],
        messages: [],
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      setDoc(doc(dbStore, "user", user), {
        posts: [],
        saved: [],
        messages: [],
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const price = (() => {
  const x = [];
  let i = 3000;
  while (i <= 100000) {
    x.push(`${i}`);
    i += 1000;
  }
  return x;
})();

export const carDealers = [
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/abarth.png",
    name: "Abarth",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ac-cars.png",
    name: "AC",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/acura.png",
    name: "Acura",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/aixam.png",
    name: "Aixam",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/alfa_romeo.png",
    name: "Alfa Romeo",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ariel.png",
    name: "Ariel",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/aston_martin.png",
    name: "Aston Martin",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/audi.png",
    name: "Audi",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/bentley.png",
    name: "Bentley",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/bmw.png",
    name: "BMW",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/bugatti.png",
    name: "Bugatti",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/buick.png",
    name: "Buick",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/cadillac.png",
    name: "Cadillac",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/caterham.png",
    name: "Caterham",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/chevrolet.png",
    name: "Chevrolet",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/chrysler.png",
    name: "Chrysler",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/citroen.png",
    name: "Citroën",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/corvette.png",
    name: "Corvette",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/dacia.png",
    name: "Dacia",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/daf.png",
    name: "Daf",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/daihat.png",
    name: "Daihatsu",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/dodge.png",
    name: "Dodge",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/elfin.png",
    name: "Elfin",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ferrari.png",
    name: "Ferrari",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/fiat.png",
    name: "Fiat",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ford.png",
    name: "Ford",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/gaz.png",
    name: "Gaz",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/geely.png",
    name: "Geely",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/gillet.png",
    name: "Gillet",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ginetta.png",
    name: "Ginetta",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/gm.png",
    name: "General Motors",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/gmc.png",
    name: "GMC",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/gumpert.png",
    name: "Gumpert",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/honda.png",
    name: "Honda",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/hummer.png",
    name: "Hummer",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/hyundai.png",
    name: "Hyundai",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/inf.png",
    name: "Infiniti",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/isuzu.png",
    name: "Isuzu",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/jagu.png",
    name: "Jaguar",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/jeep.png",
    name: "Jeep",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/joss.png",
    name: "Joss",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/kia.png",
    name: "Kia",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/koenigsegg.png",
    name: "Koenigsegg",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/lada.png",
    name: "Lada",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/lamb.png",
    name: "Lamborghini",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/lancia.png",
    name: "Lancia",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/land-rover.png",
    name: "Land Rover",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/lexus.png",
    name: "Lexus",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/linc.png",
    name: "Lincoln",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/lotus.png",
    name: "Lotus",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mase.png",
    name: "Maserati",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/maybach.png",
    name: "Maybach",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mazda.png",
    name: "Mazda",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mclaren.png",
    name: "Mclaren",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/marchedrs.png",
    name: "Mercedes",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mg.png",
    name: "MG",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mini.png",
    name: "Mini",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mitub.png",
    name: "Mitsubishi",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/morgan.png",
    name: "Morgan Motor",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/mustang.png",
    name: "Mustang logo",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/nissan.png",
    name: "Nissan",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/noble.png",
    name: "Noble",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/opel.png",
    name: "Opel",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/pagani.png",
    name: "Pagani",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/panoz.png",
    name: "Panoz",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/perodua.png",
    name: "Perodua",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/peug.png",
    name: "Peugeot",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/piaggio.png",
    name: "Piaggio",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/pininfarina.png",
    name: "Pininfarina",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/porsche.png",
    name: "Porsche",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/proton.png",
    name: "Proton",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/renault.png",
    name: "Renault",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/reva.png",
    name: "Reva",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/rolls-royce.png",
    name: "Rolls Royce",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ruf.png",
    name: "Ruf logo",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/saab.png",
    name: "Saab",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/scania.png",
    name: "Scania",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/scion.png",
    name: "Scion",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/seat.png",
    name: "Seat",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/skoda.png",
    name: "Skoda",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/smart.png",
    name: "Smart",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/spyker.png",
    name: "Spyker",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/ssangyong.png",
    name: "Ssangyong",
  },

  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/subaru.png",
    name: "Subaru",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/suzuki.png",
    name: "Suzuki",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/tata.png",
    name: "Tata",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/tatra.png",
    name: "Tatra",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/tesla.png",
    name: "Tesla",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/toyota.png",
    name: "Toyota",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/1176359_187686584745478_1792749640_n.jpg",
    name: "Tramontana",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/troller.png",
    name: "Troller",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/tvr.png",
    name: "TVR",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/uaz.png",
    name: "UAZ",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/vandenbrink_design.png",
    name: "Vandenbrink",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/vauxhall.png",
    name: "Vauxhall",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/vector_motors.png",
    name: "Vector Motors",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/venturi.png",
    name: "Venturi",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/volkswagen.png",
    name: "Volkswagen",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/volvo.png",
    name: "Volvo",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/wiesmann.png",
    name: "Wiesmann",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/zagato.png",
    name: "Zagato",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/zaz.png",
    name: "Zaz",
  },
  {
    logo: "https://car-logos.org/wp-content/uploads/2022/08/zil.png",
    name: "Zil",
  },
];
