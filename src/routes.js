import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./modules/home/container";
import Layout from "../src/components/Layout/index";
import CheckoutContainer from "./modules/checkout/container";
import OrdersContainer from "./modules/ordersInfo/container";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={CheckoutContainer} />
            <Route path="/" exact component={HomeContainer} />
            <Route path="/orders" exact component={OrdersContainer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
