import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Burger } from "../../components/Burger";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import { DeliveryInfo } from "../../components/DeliveryInfo";

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

  const showContactData = () => navigate("/ship/contact");

  return (
    <div className={css.ShippingPage}>
      <Burger ingredients={ingredients} />
      <div className={css.Title}>
        <h2>Хүргүүлэх хаяг</h2>
        <p>Захиалгаа хүлээн авах хаяг, байршлаа оруулна уу.</p>
      </div>
      <div className={css.Buttons}>
        <Button clicked={goBack} type="Secondary" label="Цуцлах" />
        <Button clicked={showContactData} type="Primary" label="Төлбөр төлөх" />
      </div>
      <Routes>
        <Route path="contact" element={<DeliveryInfo />} />
      </Routes>
    </div>
  );
};
