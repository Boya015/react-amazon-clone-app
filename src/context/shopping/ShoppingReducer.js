export const ShoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
