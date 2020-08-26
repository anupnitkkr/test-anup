import React from "react";
import classes from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation";
import Ionicon from "react-ionicons";

const toolbar = props => {
  if (props.sideDrawerOpen) return null;

  return (
    <header className="Toolbar">
      <div className="Home">Welcome !!</div>
      <Ionicon
        icon="ios-menu"
        fontSize="3rem"
        color="white"
        className="Toolbar__BugerIcon sc-bdVaJa fUuvxv"
        onClick={props.openSideDrawerHandler}
      />
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;

// WEBPACK FOOTER //
// ./src/components/Toolbar/Toolbar.js
