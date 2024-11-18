import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

export const BuildControls = () => {
  return (
    <div className={css.BuildControls}>
      <BuildControl type="salad" label="Салад" />
      <BuildControl type="meat" label="Үхрийн мах" />
      <BuildControl type="cheese" label="Бяслаг" />
      <BuildControl type="bacon" label="Гахайн мах" />
    </div>
  );
};
