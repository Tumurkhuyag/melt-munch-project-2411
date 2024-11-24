import React, { startTransition, useState } from "react";
import { connect } from "react-redux";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/burgerActions";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const deliveryCost = 5000;
  const navigate = useNavigate();

  const continueOrder = () => {
    const params = [];

    for (let ingredient in props.ingredients) {
      params.push(ingredient + "=" + props.ingredients[ingredient].count);
    }

    params.push("totalPrice=" + props.totalPrice);

    navigate({ pathname: "/ship", search: params.join("&") });
    closeConfirmModal();
  };

  const showConfirmModal = () => setConfirmOrder(true); //state merge
  const closeConfirmModal = () => setConfirmOrder(false);

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary
          closeConfirmModal={closeConfirmModal}
          onConfirm={continueOrder}
          deliveryCost={deliveryCost}
          totalPrice={props.totalPrice}
          ingredientsInfo={props.ingredientsInfo}
          ingredients={props.ingredients}
        />
      </Modal>

      <Burger ingredients={props.ingredients} />
      <BuildControls
        showConfirmModal={showConfirmModal}
        ingredientsInfo={props.ingredientsInfo}
        ingredients={props.ingredients}
        totalPrice={props.totalPrice}
        isDisabled={props.isDisabled}
        addIngredient={props.addIngredientCount}
        deleteIngredient={props.reduceIngredientCount}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    ingredientsInfo: state.ingredientsInfo,
    isDisabled: state.isDisabled,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientCount: (ingredientName) =>
      dispatch(actions.addIngredient(ingredientName)),
    reduceIngredientCount: (ingredientName) =>
      dispatch(actions.reduceIngredient(ingredientName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
