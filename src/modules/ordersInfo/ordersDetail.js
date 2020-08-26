import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/index";
import Header from "../../../src/components/Header/index";
import OrderItem from "../../../src/components/OrderIngredient/index";
class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getAllOrders();
  }

  render() {
    const newProps = { ...this.props, ...this.state };

    const info = this.props.loading ? (
      <Loader />
    ) : (
      <div className="Layout__Content">
        <div className="Orders__Orders">
          <div className="OrderItem__Order">
            {Object.keys(this.props.orders).map((key, index) => {
              let order = this.props.orders[key];
              return (
                <a
                  className="list-group-item list-group-item-action flex-column align-items-start mb-2 "
                  style={{
                    display: "inline-block",
                    paddingBottom: "0"
                  }}
                  key={index}
                >
                  <div className="d-flex w-100 justify-content-between mb-2">
                    <h4 className="mb-1">Order Number : {index + 1}</h4>
                  </div>
                  {Object.keys(order.order).map((ingredient, index) => {
                    return (
                      <OrderItem
                        ingredient={ingredient}
                        order={order.order}
                        key={index}
                      />
                    );
                  })}
                  <p>
                    Total Price:<strong>{order.price} INR</strong>
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
    return <React.Fragment>{info}</React.Fragment>;
  }
}
OrdersPage.propTypes = {
  orders: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
export default OrdersPage;
