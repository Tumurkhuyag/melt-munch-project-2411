const initialState = {
  ingredientsInfo: {
    salad: { price: 1000, name: "Салад" },
    meat: { price: 2500, name: "Үхрийн мах" },
    cheese: { price: 2000, name: "Бяслаг" },
    bacon: { price: 1800, name: "Гахайн мах" },
    egg: { price: 1200, name: "Өндөг" },
  },

  ingredients: {
    salad: { count: 0, cost: 0 },
    meat: { count: 0, cost: 0 },
    cheese: { count: 0, cost: 0 },
    bacon: { count: 0, cost: 0 },
    egg: { count: 0, cost: 0 },
  },

  totalPrice: 0,
};

export const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    console.log(state.ingredients[action.ingredientName].count);
    const newCount = state.ingredients[action.ingredientName].count + 1;
    const ingredientPrice = state.ingredientsInfo[action.ingredientName].price;

    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: {
          count: newCount,
          cost: newCount * ingredientPrice,
        },
      },
      totalPrice: state.totalPrice + ingredientPrice,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    // Check if count is already 0
    if (state.ingredients[action.ingredientName].count === 0) {
      return state;
    }

    const newCount = state.ingredients[action.ingredientName].count - 1;
    const ingredientPrice = state.ingredientsInfo[action.ingredientName].price;

    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: {
          count: newCount,
          cost: newCount * ingredientPrice,
        },
      },

      totalPrice: state.totalPrice - ingredientPrice,
    };
  }

  return state;
};
