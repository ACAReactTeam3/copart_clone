export default function selCategoryReducer(state = {}, action) {
  if (action.type === "add-category") {
    return {
      ...state,
      category: action.payload.category,
    };
  }
  if (action.type === "add-categoryType") {
    return {
      ...state,
      categoryType: action.payload.categoryType,
    };
  }
  return state;
}

export const initialSelCategory = {
  category: "Մարդատար",
  categoryType: "",
};

export function selectSelCategory(state) {
  return state.selCategory;
}

export function selectCategoryType(state) {
  return state.category.categoryType;
}

export function addCategory(newCategory) {
  return {
    type: "add-category",
    payload: {
      category: newCategory,
    },
  };
}

export function addCategoryType(newCategoryType) {
  return {
    type: "add-categoryType",
    payload: {
      categoryType: newCategoryType,
    },
  };
}
