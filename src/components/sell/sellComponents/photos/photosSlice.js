export function sellPhotosReducer(state = {}, action) {
  if (action.type === "add-sell-photos") {
    return action.payload;
  }
  return state;
}

export const initialSellPhotos = {};

export function selectSellPhotos(state) {
  return state.sellPhotos;
}

export function addPhotos(newPhotos) {
  return {
    type: "add-sell-photos",
    payload: newPhotos,
  };
}
