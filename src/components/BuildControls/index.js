import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>Бүргэрийн үнэ: {props.totalPrice}</p>
      <BuildControl
        ingredients={props.ingredients}
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="salad"
        label={`Салад ${props.showIngredientUpdate.salad.price}₮ (${
          props.showIngredientUpdate.salad.count
        } ш, ${
          props.showIngredientUpdate.salad.price *
          props.showIngredientUpdate.salad.count
        }₮) `}
        showIngredientUpdate={props.showIngredientUpdate}
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="meat"
        label={`Үхрийн мах ${props.showIngredientUpdate.meat.price}₮ (${
          props.showIngredientUpdate.meat.count
        } ш, ${
          props.showIngredientUpdate.meat.price *
          props.showIngredientUpdate.meat.count
        }₮)`}
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="cheese"
        label={`Бяслаг ${props.showIngredientUpdate.cheese.price}₮ (${
          props.showIngredientUpdate.cheese.count
        } ш, ${
          props.showIngredientUpdate.cheese.price *
          props.showIngredientUpdate.cheese.count
        }₮)`}
      />
      <BuildControl
        addIngredient={props.addIngredient}
        deleteIngredient={props.deleteIngredient}
        disabledIngredients={props.disabledIngredients}
        type="bacon"
        label={`Гахайн мах ${props.showIngredientUpdate.bacon.price}₮ (${
          props.showIngredientUpdate.bacon.count
        } ш, ${
          props.showIngredientUpdate.bacon.price *
          props.showIngredientUpdate.bacon.count
        }₮)`}
      />
    </div>
  );
};
