import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import { DeliveryInfo } from "../../components/DeliveryInfo";
import { Order } from "../../components/Order";

export const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigating = useRef(false);

  const [ingredients, setIngredients] = useState({
    salad: { count: 0, cost: 0 },
    meat: { count: 0, cost: 0 },
    cheese: { count: 1, cost: 0 },
    bacon: { count: 1, cost: 0 },
    egg: { count: 1, cost: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(5000);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    building: "",
    city: "",
    country: "",
    district: "",
    khoroo: "",
    khoroolol: "",
    number: "",
  });

  // Store the parsed URL parameters
  const parsedParamsRef = useRef(null);

  useEffect(() => {
    // Only parse URL parameters if we're on the main shipping page
    if (!location.pathname.includes("/contact")) {
      const query = new URLSearchParams(location.search);
      const caughtParams = {};

      for (let [key, value] of query.entries()) {
        caughtParams[key] = parseInt(value, 10); // Parse the value as a number
      }

      // console.log(caughtParams) => {salad: 1, meat: 1, cheese: 0, bacon: 0, egg: 0, totalPrice: 0}

      if (Object.keys(caughtParams).length > 0) {
        parsedParamsRef.current = caughtParams;

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
      }
    }
  }, [location.search]);

  const cancelOrder = () => navigate(-1);

  const showContactData = () => {
    if (!isNavigating.current) {
      isNavigating.current = true;
      // Preserve the query parameters when navigating to contact
      navigate("/ship/contact", { replace: true });

      // Reset after a small delay
      setTimeout(() => {
        isNavigating.current = false;
      }, 500);
    }
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
        deliveryInfo={deliveryInfo}
        totalPrice={totalPrice}
        ingredients={ingredients}
      />
      {/* <Burger ingredients={ingredients} /> */}
      <div className={css.Buttons}>
        <Button clicked={cancelOrder} type="Secondary" label="Цуцлах" />
        <Button
          clicked={showContactData}
          type="Primary"
          label="Худалдаж авах"
        />
      </div>
      <Routes>
        <Route
          path="contact"
          element={
            <DeliveryInfo
              deliveryCost={deliveryCost}
              ingredients={ingredients}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </div>
  );
};
