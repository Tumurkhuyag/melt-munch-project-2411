import React from "react";
import { Button } from "../General/Button";

import css from "./style.module.css";

export const OrderSummary = (props) => {
  // console.log(props.deliveryCost);

  return (
    <div className={css.SummaryContainer}>
      <h2>Захиалга хянах</h2>
      <p>Сонгосон орцууд:</p>
      <ul>
        {Object.entries(props.ingredients).map((el) => (
          <li key={el[0]}>
            <div>{props.ingredientsInfo[el[0]].name}:</div>
            <div>{el[1].count}ш</div>
            <div>{el[1].cost}₮</div>
          </li>
        ))}
      </ul>
      <p>Хүргэлт: {props.deliveryCost}₮</p>
      <p className={css.TotalPrice}>
        Нийт үнэ: <strong>{props.totalPrice + props.deliveryCost}₮</strong>
      </p>
      <div className={css.ButtonContainer}>
        <Button
          clicked={props.closeConfirmModal}
          type="Secondary"
          label="Болих"
        />
        <Button clicked={props.onConfirm} type="Primary" label="Илгээх" />
      </div>
    </div>
  );
};
