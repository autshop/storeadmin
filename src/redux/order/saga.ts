import { all, takeLeading } from "redux-saga/effects";
//
import loadOrdersSaga from "redux/order/sagas/loadOrdersSaga";
import { OrderActions } from "redux/order/slice";

function* orderSaga() {
    yield all([takeLeading(OrderActions.loadOrdersRequest.type, loadOrdersSaga)]);
}

export default orderSaga;
