import React from "react";

import css from "./style.module.css";
import { Logo } from "../Logo";

export const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>...</div>
      <Logo />
      <div>menu</div>
    </header>
  );
};
