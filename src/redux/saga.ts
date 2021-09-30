import { all } from "redux-saga/effects";
//
import productSaga from "redux/product/saga";
import authSaga from "redux/auth/saga";
import appSaga from "redux/app/saga";

function* rootSaga() {
    yield all([productSaga(), authSaga(), appSaga()]);
}

export default rootSaga;
