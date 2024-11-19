import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="salad"
        label="Салад"
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="meat"
        label="Үхрийн мах"
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="cheese"
        label="Бяслаг"
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="bacon"
        label="Гахайн мах"
      />
    </div>
  );
};
