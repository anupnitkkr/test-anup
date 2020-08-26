//import { ADD_INCREDIENT, REMOVE_INCREDIENT } from "./../actions/actionType";
import intialState from "../store/initialState";
export default function ordersDetailsReducer(
  state = intialState.allOrdersPage,
  action
) {
  switch (action.type) {
    case "FETCHING_ORDER":
      return {};
    case "FETCH_ORDERS_SUCCESS":
      return action.payload;
      break;
    default:
      return state;
  }
}
