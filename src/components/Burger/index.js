import React from "react";
import { BurgerIngredient } from "../BurgerIngredient";

import css from "./style.module.css";

export const Burger = (props) => {
  let content = [];

  const items = Object.entries(props.ingredients);

  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0) {
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу</p>;
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      {/* <BurgerIngredient type="salad" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bacon" /> */}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
