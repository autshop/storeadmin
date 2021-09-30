import { all, takeLeading } from "redux-saga/effects";
//
import { ProductActions } from "redux/product/slice";
import loadProductsSaga from "redux/product/sagas/loadProductsSaga";

function* productSaga() {
    yield all([takeLeading(ProductActions.loadProductsRequest.type, loadProductsSaga)]);
}

export default productSaga;
