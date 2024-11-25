import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./style.module.css";
import { Button } from "../General/Button";
import { Spinner } from "../General/Spinner";
import * as actions from "../../redux/actions/orderActions";

const DeliveryInfo = (props) => {
  const navigate = useNavigate();
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phoneNumber1: "",
    phoneNumber2: "",
    country: "Монгол",
    city: "Улаанбаатар",
    district: "",
    khoroo: "",
    khoroolol: "",
    building: "",
    doorNumber: "",
    notes: "",
  });

  useEffect(() => {
    if (
      props.newOrderStatus.finished === true &&
      props.newOrderStatus.error === null
    ) {
      navigate("/orders", { replace: true });
    }
  }, [props.newOrderStatus.finished, props.newOrderStatus.error, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target; // Extract `name` and `value` from the input
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
    // Update the specific field based on `name`
  };

  const saveOrder = () => {
    const newOrder = {
      ingredients: props.ingredients,
      totalPrice: props.totalPrice,
      deliveryCost: props.deliveryCost,
      deliveryInfo: {
        name: deliveryInfo.name,
        phoneNumber1: deliveryInfo.phoneNumber1,
        phoneNumber2: deliveryInfo.phoneNumber2,
        country: deliveryInfo.country,
        city: deliveryInfo.city,
        district: deliveryInfo.district,
        khoroo: deliveryInfo.khoroo,
        khoroolol: deliveryInfo.khoroolol,
        building: deliveryInfo.building,
        number: deliveryInfo.doorNumber,
        notes: deliveryInfo.notes,
      },
    };

    props.saveOrderAction(newOrder);
  };

  return (
    <div>
      <div>
        <div>
          {props.newOrderStatus.error &&
            `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
        </div>
        {props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div className={css.DeliveryInfo}>
            <input
              type="text"
              name="name"
              value={deliveryInfo.name}
              onChange={handleInputChange}
              placeholder="Таны нэр"></input>
            <div>
              <input
                type="tel"
                pattern="[0-9]{4}-[0-9]{4}"
                name="phoneNumber1"
                value={deliveryInfo.phoneNumber1}
                onChange={handleInputChange}
                placeholder="Утас #1"></input>
              <input
                type="tel"
                name="phoneNumber2"
                value={deliveryInfo.phoneNumber2}
                onChange={handleInputChange}
                placeholder="Утас #2"></input>
            </div>
            <div>
              <input
                type="text"
                name="district"
                value={deliveryInfo.district}
                onChange={handleInputChange}
                placeholder="Дүүрэг"></input>
              <input
                type="text"
                name="khoroo"
                value={deliveryInfo.khoroo}
                onChange={handleInputChange}
                placeholder="Хороо"></input>
            </div>
            <div>
              <input
                type="text"
                name="building"
                value={deliveryInfo.building}
                onChange={handleInputChange}
                placeholder="Байр"></input>
              <input
                type="text"
                name="doorNumber"
                value={deliveryInfo.doorNumber}
                onChange={handleInputChange}
                placeholder="Хаалга"></input>
            </div>
            {/* <input
        type="text"
        name="khoroolol"
        placeholder="Хотхон / Хороолол"></input> */}
            <textarea
              type="text"
              name="notes"
              value={deliveryInfo.notes}
              onChange={handleInputChange}
              placeholder="Нэмэлт мэдээлэл"
              className={css.Notes}></textarea>
            <div>
              <input
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={handleInputChange}
                placeholder="Хот"></input>
              <input
                type="text"
                name="country"
                value={deliveryInfo.country}
                onChange={handleInputChange}
                placeholder="Улс"></input>
            </div>
            <Button type="Primary" label="Захиалах" clicked={saveOrder} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    deliveryCost: state.burgerReducer.deliveryCost,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryInfo);
