import React from "react";

import css from "./style.module.css";

export const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.label}</div>
      <button
        onClick={() => {
          props.addIngredient(props.type);
        }}
        className={css.More}>
        Нэмэх
      </button>
      <button
        disabled={props.disabledIngredients[props.type]}
        onClick={() => {
          props.deleteIngredient(props.type);
        }}
        className={css.Less}>
        Хасах
      </button>
    </div>
  );
};
