import React, { Component } from "react";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";
import axios from "../../axios-orders";
import { Spinner } from "../../components/General/Spinner";

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
    lastCustomerName: NaN,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    axios
      .get("/orders.json")
      .then((repspone) => {
        const arr = Object.entries(repspone.data);
        const lastOrder = arr[arr.length - 1][1];

        // Дэс дараалал өөрчлөгдөөд байсныг засахын тулд нэг бүрчлэн бичиж өгсөн
        const orderedIngredients = {
          salad: lastOrder.ingredients.salad,
          meat: lastOrder.ingredients.meat,
          cheese: lastOrder.ingredients.cheese,
          bacon: lastOrder.ingredients.bacon,
        };

        this.setState({
          ingredients: orderedIngredients,
          totalPrice: lastOrder.totalPrice,
          lastCustomerName: lastOrder.deliveryAddress.name,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  continueOrder = () => {
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      deliveryCost: this.state.deliveryCost,
      deliveryAddress: {
        name: "Enkhlen",
        country: "Mongolia",
        city: "Ulaanbaatar",
        district: "Bayangol",
        khoroo: "26 khoroo",
        khoroolol: "Yusun Erdene",
        building: "29-1",
        number: "35",
      },
    };

    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((repspone) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
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
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              closeConfirmModal={this.closeConfirmModal}
              onConfirm={this.continueOrder}
              deliveryCost={this.state.deliveryCost}
              totalPrice={this.state.totalPrice}
              ingredientsInfo={ingredientsInfo}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>
        {this.state.loading ? <Spinner /> : null}
        <p style={{ width: "100%", textAlign: "center", fontSize: "24px" }}>
          Сүүлчийн захиалагч: {this.state.lastCustomerName}
        </p>
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
