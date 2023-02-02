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
  selDoors: "",
  selDrive: "",
  selCylinders: "",
  power: "",
  selEngineType: "",
  selSalonColor: "",
  price: "",
};
export function selectSellDescription(state) {
  return state.sellDescription;
}

export function addSelSalonColor(newValue) {
  return {
    type: "add-sell-selSalonColor",
    payload: {
      selSalonColor: newValue,
    },
  };
}
export function addSelEngineType(newValue) {
  return {
    type: "add-sell-selEngineType",
    payload: {
      selEngineType: newValue,
    },
  };
}
export function addPower(newValue) {
  return {
    type: "add-sell-power",
    payload: {
      power: newValue,
    },
  };
}
export function addSelCylinders(newValue) {
  return {
    type: "add-sell-selCylinders",
    payload: {
      selCylinders: newValue,
    },
  };
}
export function addSelDrive(newValue) {
  return {
    type: "add-sell-selDrive",
    payload: {
      selDrive: newValue,
    },
  };
}
export function addSelDoors(newValue) {
  return {
    type: "add-sell-selDoors",
    payload: {
      selDoors: newValue,
    },
  };
}
export function addSelTires(newValue) {
  return {
    type: "add-sell-selTires",
    payload: {
      selTires: newValue,
    },
  };
}
export function addSelColor(newValue) {
  return {
    type: "add-sell-selColor",
    payload: {
      selColor: newValue,
    },
  };
}
export function addSelFuel(newValue) {
  return {
    type: "add-sell-selFuel",
    payload: {
      selFuel: newValue,
    },
  };
}
export function addSelSteeringWheel(newValue) {
  return {
    type: "add-sell-selSteeringWheel",
    payload: {
      selSteeringWheel: newValue,
    },
  };
}
export function addSelGearbox(newValue) {
  return {
    type: "add-sell-selGearbox",
    payload: {
      selGearbox: newValue,
    },
  };
}
export function addMileageType(newValue) {
  return {
    type: "add-sell-mileageType",
    payload: {
      mileageType: newValue,
    },
  };
}
export function addCarMileage(newValue) {
  return {
    type: "add-sell-carMileage",
    payload: {
      carMileage: newValue,
    },
  };
}
export function addCarBodyType(newValue) {
  return {
    type: "add-sell-carBodyType",
    payload: {
      carBodyType: newValue,
    },
  };
}

export function addYear(newValue) {
  return {
    type: "add-sell-year",
    payload: {
      year: newValue,
    },
  };
}

export function addModel(newValue) {
  return {
    type: "add-sell-model",
    payload: {
      model: newValue,
    },
  };
}

export function addSelectedBrand(newCategory) {
  return {
    type: "add-sell-selectedBrand",
    payload: {
      selectedBrand: newCategory,
    },
  };
}

// export function sellDescriptionReducer(state = {}, action) {
//   if (action.type === "add-sell-sellDescription") {
//     return {
//       ...state,
//       sellDescription: {
//         selectedBrand: action.payload.selectedBrand,
//         model: action.payload.model,
//         year: action.payload.year,
//         carBodyType: action.payload.carBodyType,
//         carMileage: action.payload.carMileage,
//         mileageType: action.payload.mileageType,
//         selGearbox: action.payload.selGearbox,
//         selSteeringWheel: action.payload.selSteeringWheel,
//         selFuel: action.payload.selFuel,
//         selColor: action.payload.selColor,
//         selTires: action.payload.selTires,
//         selDoors: action.payload.selDoors,
//         selDrive: action.payload.selDrive,
//         selCylinders: action.payload.selCylinders,
//         power: action.payload.power,
//         selEngineType: action.payload.selEngineType,
//         selSalonColor: action.payload.selSalonColor,
//         price: action.payload.price,
//       },
//     };
//   }
//   return state;
// }

// export const initialSellDescription = {
//   selectedBrand: "",
//   model: "",
//   year: "",
//   carBodyType: "",
//   carMileage: "",
//   mileageType: "",
//   selGearbox: "",
//   selSteeringWheel: "",
//   selFuel: "",
//   selColor: "",
//   selTires: "",
//   selDoors: "",
//   selDrive: "",
//   selCylinders: "",
//   power: "",
//   selEngineType: "",
//   selSalonColor: "",
//   price: "",
// };

// export function selectSellDescription(state) {
//   return state.sellDescription;
// }
// export function addSellDescription(sellDescription) {
//   return {
//     type: "add-sell-sellDescription",
//     payload: {
//       sellDescription,
//     },
//   };
// }
