import React from "react";

import css from "./style.module.css";
import { NavLink } from "react-router-dom";

export const MenuItem = (props) => {
  return (
    <li className={css.MenuItem}>
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          isActive ? `${css.MenuItem} ${css.active}` : css.MenuItem
        }>
        {props.children}
      </NavLink>
      {/* <a className={props.active ? css.active : null} href={props.link}>
        {props.children}
      </a> */}
    </li>
  );
};
