import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Burger } from "../../components/Burger";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";

export const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState({
    salad: { count: 0, cost: 0 },
    meat: { count: 0, cost: 0 },
    cheese: { count: 1, cost: 0 },
    bacon: { count: 1, cost: 0 },
  });

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const caughtIngredients = {};

    for (let [key, value] of query.entries()) {
      caughtIngredients[key] = parseInt(value, 10); // Parse the value as a number
    }

    // console.log(caughtIngredients) => {salad: 1, meat: 1, cheese: 0, bacon: 0}

    const updatedIngredients = { ...ingredients };

    for (let key in caughtIngredients) {
      if (updatedIngredients[key]) {
        updatedIngredients[key].count = caughtIngredients[key];
      }
    }

    setIngredients(updatedIngredients);
  }, [location.search]);

  const goBack = () => navigate(-1);

  return (
    <div className={css.ShippingPage}>
      <Burger ingredients={ingredients} />
      <Button clicked={goBack} type="Secondary" label="Захиалгыг цуцлах" />
    </div>
  );
};
