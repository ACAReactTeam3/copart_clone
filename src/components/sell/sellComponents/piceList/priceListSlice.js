export default function sellPriceListReducer(state = {}, action) {
  if (action.type === "add-price") {
    return {
      ...state,
      price: action.payload.price,
    };
  }
  if (action.type === "add-currency") {
    return {
      ...state,
      currency: action.payload.currency,
    };
  }
  if (action.type === "add-sellCustomsCleared") {
    return {
      ...state,
      sellCustomsCleared: action.payload.sellCustomsCleared,
    };
  }
  if (action.type === "add-saleConditions") {
    return {
      ...state,
      saleConditions: action.payload.saleConditions,
    };
  }
  if (action.type === "add-sellCarState") {
    return {
      ...state,
      sellCarState: action.payload.sellCarState,
    };
  }
  if (action.type === "add-sellVinCode") {
    return {
      ...state,
      sellVinCode: action.payload.sellVinCode,
    };
  }
  return state;
}

export const initialSellPriceList = {
  price: "",
  currency: "",
  sellCustomsCleared: "",
  saleConditions: { Պայմ: false, Փոխանակում: false, ՄասՄասվճարում: false },
  sellCarState: "",
  sellVinCode: "",
};

export function selectSellPriceList(state) {
  return state.sellPriceList;
}
export function addSellVinCode(value) {
  return {
    type: "add-sellVinCode",
    payload: {
      sellVinCode: value,
    },
  };
}
export function addSellCarState(value) {
  return {
    type: "add-sellCarState",
    payload: {
      sellCarState: value,
    },
  };
}
export function addSaleConditions(value) {
  return {
    type: "add-saleConditions",
    payload: {
      saleConditions: value,
    },
  };
}
export function addSellCustomsCleared(value) {
  return {
    type: "add-sellCustomsCleared",
    payload: {
      sellCustomsCleared: value,
    },
  };
}
export function addCurrency(value) {
  return {
    type: "add-currency",
    payload: {
      currency: value,
    },
  };
}

export function addPrice(value) {
  return {
    type: "add-price",
    payload: {
      price: value,
    },
  };
}
