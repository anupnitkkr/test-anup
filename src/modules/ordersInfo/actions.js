import axios from "axios";
import * as type from "./actionType";

export function ComleteAjaxCall(payload) {
  return { type: type.AJAX_COMPLETE, payload };
}

export function startAjaxCall() {
  return { type: type.AJAX_START };
}

export function orderNowActionSuccess(payload) {
  return { type: type.FETCH_ORDERS_SUCCESS, payload };
}
export function getAllOrders() {
  return { type: type.FETCHING_ORDER };
}
