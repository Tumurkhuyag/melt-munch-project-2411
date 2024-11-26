import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";

import { MenuItem } from "../MenuItem";

const Menu = (props) => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.Menu}>
        {props.userId ? (
          <Fragment>
            <MenuItem active link="/">
              Захиалах
            </MenuItem>
            <MenuItem link="/orders">Захиалгын түүх</MenuItem>
            <MenuItem link="logout">Гарах</MenuItem>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem link="/login">Нэвтрэх</MenuItem>
            <MenuItem link="/signup">Бүртгүүлэх</MenuItem>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
