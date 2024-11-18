import React from "react";
import { BurgerIngredient } from "../BurgerIngredient";

import css from "./style.module.css";

export const Burger = () => {
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
