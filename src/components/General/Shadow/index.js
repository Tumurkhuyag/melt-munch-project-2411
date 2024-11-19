import React from "react";

import css from "./style.module.css";

export const Shadow = (props) => {
  return props.show ? (
    <div className={css.Shadow} onClick={props.closeConfirmModal}></div>
  ) : null;
};
