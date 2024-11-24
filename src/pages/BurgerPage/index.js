import React, { useState } from "react";
import { connect } from "react-redux";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";
import { Spinner } from "../../components/General/Spinner";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/burgerActions";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const deliveryCost = 5000;
  const navigate = useNavigate();

  const continueOrder = () => {
    // const order = {
    //   ingredients: this.state.ingredients,
    //   totalPrice: this.state.totalPrice,
    //   deliveryCost: this.state.deliveryCost,
    //   deliveryAddress: {
    //     name: "Enkhlen",
    //     country: "Mongolia",
    //     city: "Ulaanbaatar",
    //     district: "Bayangol",
    //     khoroo: "26 khoroo",
    //     khoroolol: "Yusun Erdene",
    //     building: "29-1",
    //     number: "35",
    //   },
    // };

    // this.setState({ loading: true });
    // axios
    //   .post("/orders.json", order)
    //   .then((repspone) => {})
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
    // console.log("Захиалгыг баталгаажууллаа");

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

  const disabledIngredients = { ...props.ingredients };
  Object.keys(props.ingredients).forEach((key) => {
    disabledIngredients[key] = props.ingredients[key].count <= 0;
  });

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            closeConfirmModal={closeConfirmModal}
            onConfirm={continueOrder}
            deliveryCost={deliveryCost}
            totalPrice={props.totalPrice}
            ingredientsInfo={props.ingredientsInfo}
            ingredients={props.ingredients}
          />
        )}
      </Modal>

      <Burger ingredients={props.ingredients} />
      <BuildControls
        showConfirmModal={showConfirmModal}
        ingredientsInfo={props.ingredientsInfo}
        ingredientsCount={props.ingredients}
        totalPrice={props.totalPrice}
        disabledIngredients={disabledIngredients}
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
