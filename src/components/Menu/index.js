import React from "react";

import css from "./style.module.css";
import { MenuItem } from "../MenuItem";

export const Menu = () => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.Menu}>
        <MenuItem active link="/">
          Захиалах
        </MenuItem>
        <MenuItem link="/orders">Захиалгын түүх</MenuItem>
      </ul>
    </div>
  );
};
