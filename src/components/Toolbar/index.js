import React from "react";

import css from "./style.module.css";

export const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>...</div>
      <div>{props.logo}</div>
      <div>menu</div>
    </header>
  );
};
