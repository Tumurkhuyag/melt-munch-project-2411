import React, { useState, useEffect } from "react";
import {
  replace,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Burger } from "../../components/Burger";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import { DeliveryInfo } from "../../components/DeliveryInfo";
import { Order } from "../../components/Order";

export const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState({
    salad: { count: 0, cost: 0 },
    meat: { count: 0, cost: 0 },
    cheese: { count: 1, cost: 0 },
    bacon: { count: 1, cost: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const [deliveryAddress, setDeliveryAddress] = useState({
    name: "",
    building: "",
    city: "",
    country: "",
    district: "",
    khoroo: "",
    khoroolol: "",
    number: "",
  });

  const [deliveryCost, setDeliveryCost] = useState(5000);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const caughtParams = {};

    for (let [key, value] of query.entries()) {
      caughtParams[key] = parseInt(value, 10); // Parse the value as a number
    }

    // console.log(caughtParams) => {salad: 1, meat: 1, cheese: 0, bacon: 0, totalPrice: 0}

    const updatedIngredients = { ...ingredients };
    let caughtPrice = 0;

    for (let key in caughtParams) {
      if (updatedIngredients[key]) {
        updatedIngredients[key].count = caughtParams[key];
      } else if (key === "totalPrice") {
        caughtPrice = caughtParams[key];
      }
    }

    setIngredients(updatedIngredients);
    setTotalPrice(caughtPrice);
  }, [location.search]);

  const cancelOrder = () => navigate(-1);

  const showContactData = () => {
    navigate("/ship/contact", { replace: true });
  };

  return (
    <div className={css.ShippingPage}>
      <div className={css.Title}>
        <h2>Таны сагсанд</h2>
        <p>Захиалгыг үргэлжлүүлж хаяг, байршлаа оруулна уу.</p>
      </div>
      {/* <div>Захиалгын дүн:</div>
        <div>{totalPrice}₮</div> */}
      <Order
        deliveryCost={deliveryCost}
        deliveryAddress={deliveryAddress}
        totalPrice={totalPrice}
        ingredients={ingredients}
      />
      {/* <Burger ingredients={ingredients} /> */}
      <div className={css.Buttons}>
        <Button clicked={cancelOrder} type="Secondary" label="Цуцлах" />
        <Button clicked={showContactData} type="Primary" label="Үргэлжлүүлэх" />
      </div>
      <Routes>
        <Route path="contact" element={<DeliveryInfo />} />
      </Routes>
    </div>
  );
};
