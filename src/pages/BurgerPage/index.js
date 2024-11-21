import React, { Component } from "react";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";
import axios from "../../axios-orders";

const ingredientsInfo = {
  salad: { price: 1500, name: "Салад" },
  meat: { price: 2500, name: "Үхрийн мах" },
  cheese: { price: 2200, name: "Бяслаг" },
  bacon: { price: 1800, name: "Гахайн мах" },
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: { count: 0, cost: 0 },
      meat: { count: 0, cost: 0 },
      cheese: { count: 0, cost: 0 },
      bacon: { count: 0, cost: 0 },
    },

    totalPrice: 0,
    confirmOrder: false,
    deliveryCost: 5000,
  };

  continueOrder = () => {
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      deliveryCost: this.state.deliveryCost,
      deliveryAddress: {
        name: "Uno",
        country: "Mongolia",
        city: "Ulaanbaatar",
        district: "Bayangol",
        khoroo: "26 khoroo",
        khoroolol: "Yusun Erdene",
        building: "29-1",
        number: "35",
      },
    };

    axios
      .post("/orders.json", order)
      .then((repspone) => alert("Захиалга хүлээн авлаа"));
    console.log("Захиалгыг баталгаажууллаа");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true }); //state merge
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type].count++;
    // console.log(type, newIngredients[type].count);
    newIngredients[type].cost =
      newIngredients[type].count * ingredientsInfo[type].price;

    const newTotalPrice = this.state.totalPrice + ingredientsInfo[type].price;

    this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });
  };

  deleteIngredient = (type) => {
    if (this.state.ingredients[type].count > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type].count--;
      newIngredients[type].cost =
        newIngredients[type].count * ingredientsInfo[type].price;

      const newTotalPrice = this.state.totalPrice - ingredientsInfo[type].price;

      this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });
    }
  };

  render() {
    const disabledIngredients = {};

    Object.keys(this.state.ingredients).forEach((key) => {
      disabledIngredients[key] = this.state.ingredients[key].count <= 0;
    });

    // console.log(continueOrder);

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}>
          <OrderSummary
            closeConfirmModal={this.closeConfirmModal}
            onConfirm={this.continueOrder}
            deliveryCost={this.state.deliveryCost}
            totalPrice={this.state.totalPrice}
            ingredientsInfo={ingredientsInfo}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsInfo={ingredientsInfo}
          ingredientsCount={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          deleteIngredient={this.deleteIngredient}
        />
      </div>
    );
  }
}

export default BurgerPage;
