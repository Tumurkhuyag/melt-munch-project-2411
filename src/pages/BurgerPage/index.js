import React, { useState } from "react";
import { Burger } from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";
import axios from "../../axios-orders";
import { Spinner } from "../../components/General/Spinner";
import { useNavigate, useLocation, withNavigate } from "react-router-dom";

const ingredientsInfo = {
  salad: { price: 1500, name: "Салад" },
  meat: { price: 2500, name: "Үхрийн мах" },
  cheese: { price: 2200, name: "Бяслаг" },
  bacon: { price: 1800, name: "Гахайн мах" },
};

const BurgerPage = () => {
  const [ingredients, setIngredients] = useState({
    salad: { count: 0, cost: 0 },
    meat: { count: 0, cost: 0 },
    cheese: { count: 0, cost: 0 },
    bacon: { count: 0, cost: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(0);
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

    for (let ingredient in ingredients) {
      params.push(ingredient + "=" + ingredients[ingredient].count);
    }

    const query = params.join("&");
    console.log(query);

    navigate({ pathname: "/ship", search: query });
    closeConfirmModal();
  };

  const showConfirmModal = () => setConfirmOrder(true); //state merge
  const closeConfirmModal = () => setConfirmOrder(false);

  const addIngredient = (type) => {
    const newIngredients = { ...ingredients };
    newIngredients[type].count++;
    // console.log(type, newIngredients[type].count);
    newIngredients[type].cost =
      newIngredients[type].count * ingredientsInfo[type].price;

    const newTotalPrice = totalPrice + ingredientsInfo[type].price;
    console.log(newTotalPrice);
    setTotalPrice(newTotalPrice);
    setIngredients(newIngredients);
  };

  const deleteIngredient = (type) => {
    if (ingredients[type].count > 0) {
      const newIngredients = { ...ingredients };
      newIngredients[type].count--;
      newIngredients[type].cost =
        newIngredients[type].count * ingredientsInfo[type].price;

      const newTotalPrice = totalPrice - ingredientsInfo[type].price;
      setTotalPrice(newTotalPrice);
      setIngredients(newIngredients);
    }
  };

  const disabledIngredients = { ...ingredients };
  Object.keys(ingredients).forEach((key) => {
    disabledIngredients[key] = ingredients[key].count <= 0;
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
            totalPrice={totalPrice}
            ingredientsInfo={ingredientsInfo}
            ingredients={ingredients}
          />
        )}
      </Modal>

      <Burger ingredients={ingredients} />
      <BuildControls
        showConfirmModal={showConfirmModal}
        ingredientsInfo={ingredientsInfo}
        ingredientsCount={ingredients}
        totalPrice={totalPrice}
        disabledIngredients={disabledIngredients}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
      />
    </div>
  );
};

export default BurgerPage;
