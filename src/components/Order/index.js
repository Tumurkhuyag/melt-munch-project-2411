import React from "react";

import css from "./style.module.css";

export const Order = (props) => {
  return (
    <div className={css.Order}>
      <div className={css.TotalPrice}>
        <div className={css.Label}>Захиалгын дүн:</div>{" "}
        <div className={css.Value}>
          {props.order.totalPrice + props.order.deliveryCost}
        </div>
      </div>

      <div className={css.Burger}>
        <div className={css.Label}>Багц:</div>
        <div className={css.Ingredients}>
          <div className={css.Ingredient}>
            <div>{props.order.ingredients.bacon.count} ш</div>
            <div className={css.Label}>Гахайн мах</div>
          </div>
          <div className={css.Ingredient}>
            <div>{props.order.ingredients.cheese.count} ш</div>
            <div className={css.Label}>Бяслаг</div>
          </div>
          <div className={css.Ingredient}>
            <div>{props.order.ingredients.meat.count} ш</div>
            <div className={css.Label}>Үхрийн мах </div>
          </div>
          <div className={css.Ingredient}>
            <div>{props.order.ingredients.salad.count} ш</div>
            <div className={css.Label}>Салад</div>
          </div>
        </div>
      </div>

      <div className={css.Address}>
        <div className={css.Label}>Хаяг:</div>
        <div className={css.AddressText}>
          <div>{props.order.deliveryAddress.district},</div>
          <div>{props.order.deliveryAddress.khoroo},</div>
          <div>{props.order.deliveryAddress.khoroolol},</div>
          <div>{props.order.deliveryAddress.building},</div>
          <div>{props.order.deliveryAddress.number},</div>
        </div>
      </div>
    </div>
  );
};
