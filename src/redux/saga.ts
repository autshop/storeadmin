import { all } from "redux-saga/effects";
//
import productSaga from "redux/product/saga";
import authSaga from "redux/auth/saga";

function* rootSaga() {
    yield all([productSaga(), authSaga()]);
}

export default rootSaga;
