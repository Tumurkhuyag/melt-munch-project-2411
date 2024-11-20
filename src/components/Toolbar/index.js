import React from "react";

import css from "./style.module.css";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

export const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>...</div>
      <Logo />
      <nav>
        <Menu />
      </nav>
    </header>
  );
};
