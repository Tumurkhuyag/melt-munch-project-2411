import React, { Component } from "react";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";

const ingredientsPrice = { salad: 2000, meat: 2500, cheese: 2000, bacon: 1500 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },

    totalPrice: 1000,
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newTotalPrice = this.state.totalPrice + ingredientsPrice[type];

    this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });
  };

  deleteIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;

      const newTotalPrice = this.state.totalPrice - ingredientsPrice[type];

      this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    const showIngredientUpdate = Object.keys(this.state.ingredients).reduce(
      (acc, key) => {
        acc[key] = {
          count: this.state.ingredients[key],
          price: ingredientsPrice[key],
        };
        return acc;
      },
      {}
    );

    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showIngredientUpdate={showIngredientUpdate}
          totalPrice={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          deleteIngredient={this.deleteIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
