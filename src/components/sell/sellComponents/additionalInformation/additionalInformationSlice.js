import React from "react";

export function additionalInfoReducer(state = {}, action) {
  if (action.type === "add-additional-Info") {
    return {
      ...state,
      additionalInfo: {
        addInfo: action.payload.addInfo,
        phoneNum374: action.payload.phoneNum374,
      },
    };
  }
  return state;
}

export const initialAdditionalInfo = {
  addInfo: "",
  phoneNum374: "",
};
