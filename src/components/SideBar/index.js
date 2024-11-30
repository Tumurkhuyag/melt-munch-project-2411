import React from "react";

import css from "./style.module.css";
import { Logo } from "../Logo";
import Menu from "../Menu";
import { Shadow } from "../General/Shadow";

export const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];

  if (props.showSidebar) {
    classes = [css.SideBar, css.Open];
  }

  console.log("toggleSidebar   ", props.toggleSidebar);
  console.log("showSidebar   ", props.showSidebar);

  return (
    <div>
      <Shadow show={props.showSidebar} onClick={props.toggleSidebar} />
      <div className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
