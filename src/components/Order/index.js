import React from "react";

import css from "./style.module.css";
import { Burger } from "../Burger";

export const Order = (props) => {
  return (
    <div className={css.Order}>
      <div className={css.ShrunkContainer}>
        <div className={css.Shrunk}>
          <Burger ingredients={props.ingredients} />
        </div>
      </div>

      <div className={css.OrderDetail}>
        <div className={css.TotalPrice}>
          <div className={css.Label}>Захиалгын дүн:</div>{" "}
          <div className={css.Value}>
            {props.totalPrice + props.deliveryCost}
          </div>
        </div>

        <div className={css.Burger}>
          <div className={css.Label}>Багц:</div>
          <div className={css.Ingredients}>
            <div className={css.Ingredient}>
              <div>{props.ingredients.bacon.count} ш</div>
              <div className={css.Label}>Гахайн мах</div>
            </div>
            <div className={css.Ingredient}>
              <div>{props.ingredients.cheese.count} ш</div>
              <div className={css.Label}>Бяслаг</div>
            </div>
            <div className={css.Ingredient}>
              <div>{props.ingredients.meat.count} ш</div>
              <div className={css.Label}>Үхрийн мах </div>
            </div>
            <div className={css.Ingredient}>
              <div>{props.ingredients.salad.count} ш</div>
              <div className={css.Label}>Салад</div>
            </div>
            <div className={css.Ingredient}>
              <div>{props.ingredients.egg.count} ш</div>
              <div className={css.Label}>Өндөг</div>
            </div>
          </div>
        </div>

        <div className={css.Address}>
          <div className={css.Line}></div>
          <div className={css.AddressText}>
            <div>{props.deliveryAddress.district}</div>
            <div>{props.deliveryAddress.khoroo}</div>
            <div>{props.deliveryAddress.khoroolol}</div>
            <div>{props.deliveryAddress.building}</div>
            <div>{props.deliveryAddress.number}</div>
            <div>{props.deliveryAddress.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
