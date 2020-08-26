import React from "react";
import NavigationItem from "./NavigationItem";
import classes from "./Navigation.css";

const navigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem text="Burger Builder" routeName="/" />
      <NavigationItem text="Orders" routeName="/orders" />
    </ul>
  );
};

export default navigationItems;
