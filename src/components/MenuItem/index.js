import React from "react";

import css from "./style.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

export const MenuItem = (props) => {
  const location = useLocation(); //Get current location
  const navigate = useNavigate(); // Programmatic navigation

  const handleNavigation = () => {
    navigate(props.link); // Navigate programmatically
  };

  return (
    <li className={css.MenuItem}>
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          isActive ? `${css.MenuItem} ${css.active}` : css.MenuItem
        }>
        {props.children}
      </NavLink>
    </li>
  );
};
