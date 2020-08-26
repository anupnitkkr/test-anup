import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutPage from "./checkout";

function mapStateToProps(state, ownProps) {
  return {
    ingredients: state.ingredientsInfo.ingredients,
    pricing: state.ingredientsInfo.pricing,
    price: state.price
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: {} };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckoutPage)
);
