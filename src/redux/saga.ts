import { all } from "redux-saga/effects";
//
import productSaga from "redux/product/saga";
import authSaga from "redux/auth/saga";
import appSaga from "redux/app/saga";
import orderSaga from "redux/order/saga";
import variantSaga from "redux/variant/saga";

function* rootSaga() {
    yield all([productSaga(), authSaga(), appSaga(), orderSaga(), variantSaga()]);
}

export default rootSaga;
