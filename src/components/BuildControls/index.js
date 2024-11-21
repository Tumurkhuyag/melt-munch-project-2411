import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = (props) => {
  // console.log(props.ingredientsInfo);
  // console.log(props.showConfirmModal);

  return (
    <div className={css.BuildControls}>
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
            label={`${props.ingredientsInfo[el].name} (${props.ingredientsCount[el].count}ш, ${props.ingredientsCount[el].cost}₮) `}
          />
        );
      })}
      <div className={css.Footer}>
        <div className={css.Summary}>
          <div className={css.Label}>Нийт үнэ:</div>
          <div className={css.Value}>{props.totalPrice}₮</div>
        </div>

        <button
          onClick={props.showConfirmModal}
          disabled={props.totalPrice <= 0}
          className={css.OrderButton}>
          Захиалах
        </button>
      </div>
    </div>
  );
};
