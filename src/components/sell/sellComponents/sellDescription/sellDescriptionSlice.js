export function sellDescriptionReducer(state = {}, action) {
  if (action.type === "add-sell-selectedBrand") {
    return {
      ...state,
      selectedBrand: action.payload.selectedBrand,
    };
  }
  if (action.type === "add-sell-model") {
    return {
      ...state,
      model: action.payload.model,
    };
  }
  if (action.type === "add-sell-year") {
    return {
      ...state,
      year: action.payload.year,
    };
  }
  if (action.type === "add-sell-carBodyType") {
    return {
      ...state,
      carBodyType: action.payload.carBodyType,
    };
  }
  if (action.type === "add-sell-carMileage") {
    return {
      ...state,
      carMileage: action.payload.carMileage,
    };
  }
  if (action.type === "add-sell-mileageType") {
    return {
      ...state,
      mileageType: action.payload.mileageType,
    };
  }
  if (action.type === "add-sell-selGearbox") {
    return {
      ...state,
      selGearbox: action.payload.selGearbox,
    };
  }
  if (action.type === "add-sell-selSteeringWheel") {
    return {
      ...state,
      selSteeringWheel: action.payload.selSteeringWheel,
    };
  }
  if (action.type === "add-sell-selFuel") {
    return {
      ...state,
      selFuel: action.payload.selFuel,
    };
  }
  if (action.type === "add-sell-selColor") {
    return {
      ...state,
      selColor: action.payload.selColor,
    };
  }
  if (action.type === "add-sell-selTires") {
    return {
      ...state,
      selTires: action.payload.selTires,
    };
  }
  if (action.type === "add-sell-selDoօrs") {
    return {
      ...state,
      selDoօrs: action.payload.selDoօrs,
    };
  }
  if (action.type === "add-sell-selDrive") {
    return {
      ...state,
      selDrive: action.payload.selDrive,
    };
  }
  if (action.type === "add-sell-selCylinders") {
    return {
      ...state,
      selCylinders: action.payload.selCylinders,
    };
  }
  if (action.type === "add-sell-power") {
    return {
      ...state,
      power: action.payload.power,
    };
  }
  if (action.type === "add-sell-selEngineType") {
    return {
      ...state,
      selEngineType: action.payload.selEngineType,
    };
  }
  if (action.type === "add-sell-selSalonColor") {
    return {
      ...state,
      selSalonColor: action.payload.selSalonColor,
    };
  }
  if (action.type === "add-sell-price") {
    return {
      ...state,
      price: action.payload.price,
    };
  }

  return state;
}

export const initialSellDescription = {
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
  selTires: "",
  selDoօrs: "",
  selDrive: "",
  selCylinders: "",
  power: "",
  selEngineType: "",
  selSalonColor: "",
  price: "",
};
