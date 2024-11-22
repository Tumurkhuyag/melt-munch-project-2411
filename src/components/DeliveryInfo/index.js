import React, { useEffect, useState } from "react";

import css from "./style.module.css";
import { Button } from "../General/Button";

export const DeliveryInfo = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(null);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target; // Extract `name` and `value` from the input
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value, // Update the specific field based on `name`
    }));
  };

  return (
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
      <Button type="Primary" label="Захиалах" />
    </div>
  );
};
