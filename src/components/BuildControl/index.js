import React from "react";

import css from "./style.module.css";

export const BuildControl = (props) => {
  // console.log(props.type);
  // console.log(props.disabledIngredients[props.type])

  return (
    <div className={css.BuildControl}>
      <button
        disabled={props.disabledIngredients[props.type]}
        onClick={() => {
          props.deleteIngredient(props.type);
        }}
        className={css.Less}>
        -
      </button>
      <div className={css.Label}>{props.label}</div>
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
