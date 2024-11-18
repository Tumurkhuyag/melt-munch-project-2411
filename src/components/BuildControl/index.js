import React from "react";

import css from "./style.module.css";

export const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.label}</div>
      <button className={css.More}>Нэмэх</button>
      <button className={css.Less}>Хасах</button>
    </div>
  );
};
