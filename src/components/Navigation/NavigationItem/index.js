import React from "react";
import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  return (
    <NavLink
      to={props.routeName}
      exact
      className="NavigationItem"
      activeStyle={{
        backgroundColor: "#b35900",
        borderBottom: "4px solid black"
      }}
    >
      {props.text}
    </NavLink>
  );
};

export default navigationItem;
