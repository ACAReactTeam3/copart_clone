import React from "react";
import { additOpt, initialOptions } from "../../forSellCar&Filter";

export default function sellAdditionalOptionsReducer(state = {}, action) {
  if (action.type === "add-options") {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
}

export function selectAdditionalOptions(state) {
  return state.sellAdditionalOptions;
}

export function addOptions(newValue) {
  return {
    type: "add-options",
    payload: newValue,
  };
}

export const initialSellAditionalOptions = initialOptions;
