import React from "react";

import css from "./style.module.css";

export const HamburgerMenu = (props) => {
  return (
    <div onClick={props.toggleSidebar} className={css.HamburgerMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
