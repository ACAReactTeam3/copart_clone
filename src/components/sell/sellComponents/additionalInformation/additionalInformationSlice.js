import React from "react";

export function sellAdditionalInfoReducer(state = {}, action) {
  if (action.type === "add-additional-addInfo") {
    return {
      ...state,
      addInfo: action.payload,
    };
  }
  if (action.type === "add-additional-phoneNum") {
    return {
      ...state,
      phoneNum: action.payload,
    };
  }
  return state;
}

export const initialSellAdditionalInfo = {
  addInfo: "",
  phoneNum: "",
};

export function selectAdditionalInfo(state) {
  return state.sellAdditionalInfo;
}

export function AddAddInfo(newValue) {
  return {
    type: "add-additional-addInfo",
    payload: newValue,
  };
}

export function AddPhoneNum(newValue) {
  return {
    type: "add-additional-phoneNum",
    payload: newValue,
  };
}
