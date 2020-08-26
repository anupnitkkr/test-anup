import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import OrdersPage from "./ordersDetail";
import * as ordersDetailsActions from "./actions";

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders,
    loading: state.loading > 0
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ordersDetailsActions, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrdersPage)
);
