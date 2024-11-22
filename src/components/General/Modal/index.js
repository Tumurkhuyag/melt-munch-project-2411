import React from "react";
import { Shadow } from "../Shadow";

import css from "./style.module.css";

export const Modal = (props) => {
  //   console.log(props.show);
  return (
    <div>
      <Shadow show={props.show} onClick={props.closeConfirmModal} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(+100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={css.Modal}>
        {props.children}
      </div>
    </div>
  );
};
