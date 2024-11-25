import React from "react";
import { connect } from "react-redux";
import { BuildControl } from "../BuildControl";
import * as actions from "../../redux/actions/burgerActions";
import css from "./style.module.css";

const BuildControls = (props) => {
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

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    ingredientsInfo: state.burgerReducer.ingredientsInfo,
    isDisabled: state.burgerReducer.isDisabled,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredientName) =>
      dispatch(actions.addIngredient(ingredientName)),
    deleteIngredient: (ingredientName) =>
      dispatch(actions.deleteIngredient(ingredientName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
