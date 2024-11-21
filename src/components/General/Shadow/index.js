import React from "react";

import css from "./style.module.css";

export const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.onClick} className={css.Shadow}></div>
  ) : null;
};
