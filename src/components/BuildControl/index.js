import React from "react";

import css from "./style.module.css";

export const BuildControl = (props) => {
  const ingredientName = props.ingredientsInfo[props.type].name;
  const ingredientCount = props.ingredients[props.type].count;
  const ingredientCost = props.ingredients[props.type].cost;

  return (
    <div className={css.BuildControl}>
      <button
        disabled={props.ingredients[props.type].isDisabled}
        onClick={() => {
          props.deleteIngredient(props.type);
        }}
        className={css.Less}>
        -
      </button>
      <div
        className={
          css.Label
        }>{`${ingredientName} (${ingredientCount}ш, ${ingredientCost}₮)`}</div>
      <button
        onClick={() => {
          props.addIngredient(props.type);
        }}
        className={css.More}>
        +
      </button>
    </div>
  );
};
