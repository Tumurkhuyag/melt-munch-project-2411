import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = (props) => {
  // console.log(props.ingredientsInfo);

  return (
    <div className={css.BuildControls}>
      <p>
        Бүргэрийн үнэ: <strong>{props.totalPrice}</strong>{" "}
      </p>

      {Object.keys(props.ingredientsInfo).map((el) => {
        // console.log(el);
        // console.log(props.ingredientsCount[el]);
        return (
          <BuildControl
            key={el}
            addIngredient={props.addIngredient}
            deleteIngredient={props.deleteIngredient}
            disabledIngredients={props.disabledIngredients}
            type={el}
            label={`${props.ingredientsInfo[el].name} (${
              props.ingredientsCount[el].count
            }ш, ${
              props.ingredientsInfo[el].price * props.ingredientsCount[el].count
            }₮) `}
          />
        );
      })}

      <button className={css.OrderButton}>Захиалах</button>
    </div>
  );
};
