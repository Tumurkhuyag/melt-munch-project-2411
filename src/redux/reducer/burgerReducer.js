const initialState = {
  ingredientsInfo: {
    salad: { price: 1000, name: "Салад" },
    meat: { price: 2500, name: "Үхрийн мах" },
    cheese: { price: 2000, name: "Бяслаг" },
    bacon: { price: 1800, name: "Гахайн мах" },
    egg: { price: 1200, name: "Өндөг" },
  },

  ingredients: {
    salad: { count: 0, cost: 0, isDisabled: true },
    meat: { count: 0, cost: 0, isDisabled: true },
    cheese: { count: 0, cost: 0, isDisabled: true },
    bacon: { count: 0, cost: 0, isDisabled: true },
    egg: { count: 0, cost: 0, isDisabled: true },
  },

  totalPrice: 0,
  isDisabled: true,

  deliveryCost: 3000,
};

export const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    const newCount = state.ingredients[action.ingredientName].count + 1;
    const ingredientPrice = state.ingredientsInfo[action.ingredientName].price;
    const newTotalPrice = state.totalPrice + ingredientPrice;

    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: {
          count: newCount,
          cost: newCount * ingredientPrice,
          isDisabled: false,
        },
      },
      totalPrice: newTotalPrice,
      isDisabled: false,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    // Check if count is already 0
    if (state.ingredients[action.ingredientName].count === 0) {
      return state;
    }

    const newCount = state.ingredients[action.ingredientName].count - 1;
    const ingredientPrice = state.ingredientsInfo[action.ingredientName].price;
    const newTotalPrice = state.totalPrice - ingredientPrice;

    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: {
          count: newCount,
          cost: newCount * ingredientPrice,
          isDisabled: newCount === 0,
        },
      },

      totalPrice: newTotalPrice,
      isDisabled: newTotalPrice === 0,
    };
  }

  return state;
};
