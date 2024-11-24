export const addIngredient = (ingredientName) => {
  return {
    type: "ADD_INGREDIENT",
    ingredientName,
  };
};

export const reduceIngredient = (ingredientName) => {
  return {
    type: "REMOVE_INGREDIENT",
    ingredientName,
  };
};
