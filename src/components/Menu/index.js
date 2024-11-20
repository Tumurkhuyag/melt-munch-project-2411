import React from "react";

import css from "./style.module.css";
import { MenuItem } from "../MenuItem";

export const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem active link="/">
          Бургер
        </MenuItem>
        <MenuItem link="/">Төлбөр</MenuItem>
      </ul>
    </div>
  );
};
