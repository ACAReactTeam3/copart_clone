import { combineReducers, legacy_createStore as createStore } from "redux";
import { v4 as uuid } from "uuid";
import {
  initialSellAdditionalInfo,
  sellAdditionalInfoReducer,
} from "../components/sell/sellComponents/additionalInformation/additionalInformationSlice";
import sellAdditionalOptionsReducer, {
  initialSellAditionalOptions,
} from "../components/sell/sellComponents/additionalOptions/additionalOptionsSlice";
import addAitionalOptionsReducer from "../components/sell/sellComponents/additionalOptions/additionalOptionsSlice";
import selCategoryReducer, {
  initialSelCategory,
} from "../components/sell/sellComponents/category/categorySlice";
import {
  initialSellLocation,
  sellLocationReducer,
} from "../components/sell/sellComponents/location/locationSlice";
import {
  initialSellPhotos,
  sellPhotosReducer,
} from "../components/sell/sellComponents/photos/photosSlice";
import sellPriceListReducer, {
  initialSellPriceList,
} from "../components/sell/sellComponents/piceList/priceListSlice";
import {
  initialSellDescription,
  sellDescriptionReducer,
} from "../components/sell/sellComponents/sellDescription/sellDescriptionSlice";

export const store = createStore(
  combineReducers({
    selCategory: selCategoryReducer,
    sellDescription: sellDescriptionReducer,
    sellPriceList: sellPriceListReducer,
    sellAdditionalOptions: sellAdditionalOptionsReducer,
    sellLocation: sellLocationReducer,
    sellAdditionalInfo: sellAdditionalInfoReducer,
    sellPhotos: sellPhotosReducer,
  }),
  {
    selCategory: initialSelCategory,
    sellDescription: initialSellDescription,
    sellPriceList: initialSellPriceList,
    sellAdditionalOptions: initialSellAditionalOptions,
    sellLocation: initialSellLocation,
    sellAdditionalInfo: initialSellAdditionalInfo,
    sellPhotos: initialSellPhotos,
  }
);

// export let store = createStore(
//   function (state, action) {
//     if (action.type == actionType.userSignUp) {
//       return [
//         ...state,
//         {
//           nickname: action.payload.nickname,
//           name: action.payload.name,
//           surname: action.payload.surname,
//           password: action.payload.password,
//           loggedIn: false,
//           id: uuid(),
//           posts: [],
//           favorite: [],
//         },
//       ];
//     }
//     if (action.type == "added-user-post") {
//       return state.map((item) => {
//         return {
//           ...item,
//           posts: [
//             {
//               brand: action.payload.brand,
//               model: action.payload.model,
//               color: action.payload.color,
//               price: action.payload.price,
//               moneyType: action.payload.moneyType,
//               mileage: action.payload.mileage,
//               distanceType: action.payload.distanceType,
//               horsepower: action.payload.horsepower,
//               body: action.payload.body,
//               gearbox: action.payload.gearbox,
//               handDrive: action.payload.handDrive,
//               engine: action.payload.engine,
//               additionalInfo: action.payload.additionalInfo,
//             },
//           ],
//         };
//       });
//     }
//     return state;
//   },
//   [
//     {
//       nickname: "Tigran",
//       name: "Tigran",
//       surname: "Yeritsyan",
//       password: 123,
//       loggedIn: false,
//       id: uuid(),
//       posts: [],
//       favorite: [],
//     },
//     {
//       nickname: "Armen",
//       name: "Armen",
//       surname: "Vardanyan",
//       password: 123,
//       loggedIn: false,
//       id: uuid(),
//       posts: [],
//       favorite: [],
//     },
//   ]
// );
