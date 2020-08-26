import * as type from "./actionType";
import axios from "axios";

export function ComleteAjaxCall(payload) {
  return { type: type.AJAX_COMPLETE, payload };
}

export function startAjaxCall() {
  return { type: type.AJAX_START };
}

export function fetchingIngredient(payload) {
  return { type: type.FETCHING_INGREDIENTS };
}
export function fetchIngredientsActionsSuccess(payload) {
  return { type: type.FETCH_INGREDIENTS_ACTIONS_SUCCESS, payload };
}
export function addIngredientActions(name) {
  return { type: type.ADD_INGREDIENT, name };
}
export function removeIngredientActions(name) {
  return { type: type.REMOVE_INGREDIENT, name };
}
export function addPriceActions(name, price) {
  return { type: type.ADD_PRICE, name, price };
}
export function removePriceActions(name, price) {
  return { type: type.REMOVE_PRICE, name, price };
}
