import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Toolbar";
import SideDrawer from "../Sidedrawer";

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };

  closeSideDrawerHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  openSideDrawerHandler = () => {
    this.setState({
      sideDrawerOpen: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <SideDrawer
          closeSideDrawer={this.closeSideDrawerHandler}
          sideDrawerOpen={this.state.sideDrawerOpen}
        />
        <Toolbar
          sideDrawerOpen={this.state.sideDrawerOpen}
          openSideDrawerHandler={this.openSideDrawerHandler}
        />
        <div className={classes.Content}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
