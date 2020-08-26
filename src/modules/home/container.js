import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./home";
import * as homeActions from "./actions";
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(homeActions, dispatch) };
}
function mapStateToProps(state, ownProps) {
  return {
    ingredients: state.ingredientsInfo.ingredients,
    pricing: state.ingredientsInfo.pricing,
    price: state.price,
    loading: state.loading > 0
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
