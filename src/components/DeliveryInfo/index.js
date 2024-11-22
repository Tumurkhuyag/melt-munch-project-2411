import React, { useState } from "react";

import css from "./style.module.css";
import { Button } from "../General/Button";

export const DeliveryInfo = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(null);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "Enkhlen",
    phoneNumber1: "80903345",
    phoneNumber2: "66102233",
    country: "Mongolia",
    city: "Ulaanbaatar",
    district: "Bayangol",
    khoroo: "26 khoroo",
    khoroolol: "Yusun Erdene",
    building: "29-1",
    doorNumber: "35",
    note: "Орцны код 1323# гэж бичээрэй",
  });

  return (
    <div className={css.DeliveryInfo}>
      <div>
        <input type="text" name="phoneNumber1" placeholder="Утас #1"></input>
        <input type="text" name="phoneNumber2" placeholder="Утас #2"></input>
      </div>

      <div>
        <input type="text" name="district" placeholder="Дүүрэг"></input>
        <input type="text" name="khoroo" placeholder="Хороо"></input>
      </div>
      <div>
        <input type="text" name="building" placeholder="Байр"></input>
        <input type="text" name="doorNumber" placeholder="Хаалга"></input>
      </div>
      {/* <input
        type="text"
        name="khoroolol"
        placeholder="Хотхон / Хороолол"></input> */}

      <textarea
        name="note"
        placeholder="Нэмэлт мэдээлэл"
        className={css.Notes}></textarea>
      {/* <div>
        <input type="text" name="country" placeholder="Улс"></input>
        <input type="text" name="city" placeholder="Хот"></input>
      </div>
      <input type="text" name="name" placeholder="Таны нэр"></input> */}
      <Button type="Primary" label="Захиалга илгээх" />
    </div>
  );
};
