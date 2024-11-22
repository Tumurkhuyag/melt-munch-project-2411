import React from "react";
import { Button } from "../General/Button";

import css from "./style.module.css";

export const OrderSummary = (props) => {
  // console.log(props.deliveryCost);

  return (
    <div className={css.SummaryContainer}>
      <div>
        <h2>Сагслах уу?</h2>
        <p>Дараах орцоос бүрдсэн бүргерийг сагсанд нэмэх гэж байна.</p>
      </div>

      <div>
        <div>
          <ul>
            {Object.entries(props.ingredients).map((el) => (
              <li key={el[0]}>
                <div>{props.ingredientsInfo[el[0]].name}:</div>
                <div className={css.Count}>({el[1].count}ш)</div>
                <div className={css.Amount}>
                  <strong>{el[1].cost}₮</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={css.DeliveryCost}>
          <div>Хүргэлт:</div>
          <div className={css.Value}>
            <strong>{props.deliveryCost}₮</strong>
          </div>
        </div>
      </div>

      <p className={css.TotalPrice}>
        Нийт үнэ: <strong>{props.totalPrice + props.deliveryCost}₮</strong>
      </p>
      <div className={css.ButtonContainer}>
        <Button
          clicked={props.closeConfirmModal}
          type="Secondary"
          label="Болих"
        />
        <Button clicked={props.onConfirm} type="Primary" label="Тийм" />
      </div>
    </div>
  );
};
