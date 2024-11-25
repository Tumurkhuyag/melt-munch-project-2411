import React from "react";
import { connect, useSelector } from "react-redux";
import { BurgerIngredient } from "../BurgerIngredient";

import css from "./style.module.css";

const Burger = (props) => {
  let content = [];

  const items = Object.entries(props.ingredients);

  // console.log(items);

  items.map((el) => {
    // console.log(el[0]);
    for (let i = 0; i < el[1].count; i++) {
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
    }
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

const mapStateToProps = (state) => {
  return { ingredients: state.burgerReducer.ingredients };
};

export default connect(mapStateToProps)(Burger);
