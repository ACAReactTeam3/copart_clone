export function sellLocationReducer(state = {}, action) {
  if (action.type === "add-sell-country") {
    return {
      ...state,
      country: action.payload,
    };
  }
  if (action.type === "add-sell-citySettlement") {
    return {
      ...state,
      citySettlement: action.payload,
    };
  }
  if (action.type === "add-sell-region") {
    return {
      ...state,
      region: action.payload,
    };
  }
  if (action.type === "add-sell-onWayAtAuction") {
    return {
      ...state,
      onWayAtAuction: action.payload,
    };
  }
  return state;
}
export function selectSellLocation(state) {
  return state.sellLocation;
}

export const initialSellLocation = {
  country: "",
  citySettlement: "",
  region: "",
  onWayAtAuction: { Ճանապարհին: false, Աճուրդում: false },
};

export function addCountry(newValue) {
  return {
    type: "add-sell-country",
    payload: newValue,
  };
}
export function addCitySettlement(newValue) {
  return {
    type: "add-sell-citySettlement",
    payload: newValue,
  };
}
export function addRegion(newValue) {
  return {
    type: "add-sell-region",
    payload: newValue,
  };
}
export function addOnWayAtAuction(newValue) {
  return {
    type: "add-sell-onWayAtAuction",
    payload: newValue,
  };
}
