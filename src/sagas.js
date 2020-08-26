import { fork } from "redux-saga/effects";
import { homeSaga } from "../src/modules/home/sagas";
import { orderSaga } from "../src/modules/ordersInfo/sagas";
export default function* rootSaga() {
  yield [fork(homeSaga), fork(orderSaga)];
}
