import React from "react";

import css from "./style.module.css";
import { Logo } from "../Logo";
import Menu from "../Menu";
import { HamburgerMenu } from "../HamburgerMenu";

export const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <Logo />
      <nav className={css.HideWhenMobile}>
        <Menu />
      </nav>
      <div className={css.HideHamburgerMenu}>
        <HamburgerMenu toggleSidebar={props.toggleSidebar} />
      </div>
    </header>
  );
};
