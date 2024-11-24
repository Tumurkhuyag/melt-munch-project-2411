import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = (props) => {
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
            isDisabled={props.isDisabled}
            type={el}
            ingredientsInfo={props.ingredientsInfo}
            ingredients={props.ingredients}
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
          disabled={props.isDisabled}
          className={css.OrderButton}>
          Сагслах
        </button>
      </div>
    </div>
  );
};
