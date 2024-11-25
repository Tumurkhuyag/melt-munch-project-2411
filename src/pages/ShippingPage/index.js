import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import DeliveryInfo from "../../components/DeliveryInfo";
import Order from "../../components/Order";

const ShippingPage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigating = useRef(false);

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
        deliveryCost={props.deliveryCost}
        deliveryInfo={deliveryInfo}
        totalPrice={props.totalPrice}
        ingredients={props.ingredients}
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
        <Route path="contact" element={<DeliveryInfo />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
    deliveryCost: state.burgerReducer.deliveryCost,
    totalPrice: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(ShippingPage);
