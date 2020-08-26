import React from "react";
import { withRouter } from "react-router-dom";
import Ingredient from "../Ingredient/index";

const orderSummary = props => {
  let state = props;
  let style = {
    transform: "translate(0px)",
    opacity: 0,
    display: "none"
  };
  if (state.order) {
    style.opacity = 1;
    style.display = "";
  }
  return (
    <div className="Modal__Modal -a" style={style}>
      <h4>Your order summay is : </h4>
      <ul className="list-group mt-1 mb-1">
        <Ingredient ingredients={state.ingredients} />
      </ul>
      <p>
        <strong>Total Price : {state.price}</strong>
      </p>
      <p>Continue to checkout ?</p>
      <button className="btn btn-success mr-3" onClick={props.continueOrder}>
        CONTINUE
      </button>
      <button className="btn btn-danger" onClick={props.cancelOrder}>
        CANCEL
      </button>
    </div>
  );
};
export default orderSummary;
