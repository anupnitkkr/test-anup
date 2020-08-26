import React from "react";
import classes from "./Logo.css";
const logoSvg =
  "https://uploads.codesandbox.io/uploads/user/b9ec71bd-ca7d-447a-b62a-99b4bf90b068/n3du-burger.74672e0d.svg";

const logo = () => {
  console.log("Class--- :", classes.Logo);
  return <img className="Logo" src={logoSvg} alt="burger logo" />;
};

export default logo;
