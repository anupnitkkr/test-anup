import React from "react";
import classes from "./Sidedrawer.css";
import Backdrop from "../Backdrop";
import { NavLink } from "react-router-dom";

const sideDrawer = props => {
  if (!props.sideDrawerOpen) return null;
  return (
    <React.Fragment>
      <Backdrop
        show={props.sideDrawerOpen}
        closeModal={props.closeSideDrawer}
      />
      <div className="SideDrawer">
        <ul className="list-group">
          <NavLink
            exact
            to="/"
            activeStyle={{ backgroundColor: "green", color: "brown" }}
          >
            <li className={"list-group-item"} onClick={props.closeSideDrawer}>
              Burger Builder
            </li>
          </NavLink>
          <NavLink
            to="/orders"
            activeStyle={{ backgroundColor: "yellow", color: "brown" }}
          >
            <li className={"list-group-item"} onClick={props.closeSideDrawer}>
              Orders
            </li>
          </NavLink>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
