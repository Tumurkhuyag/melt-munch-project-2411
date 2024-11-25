export const addIngredient = (ingredientName) => {
  return {
    type: "ADD_INGREDIENT",
    ingredientName,
  };
};

export const deleteIngredient = (ingredientName) => {
  return {
    type: "REMOVE_INGREDIENT",
    ingredientName,
  };
};
