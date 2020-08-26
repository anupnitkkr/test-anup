import React from "react";
import classes from "./Backdrop.css";

const backdrop = props => {
  return props.show ? (
    <div onClick={props.closeModal} className={"Backdrop"} />
  ) : null;
};
export default backdrop;

// WEBPACK FOOTER //
// ./src/components/Backdrop/Backdrop.js
