import { all, takeLeading } from "redux-saga/effects";
//
import { ProductActions } from "redux/product/slice";
import loadProductsSaga from "redux/product/sagas/loadProductsSaga";
import createProductSaga from "redux/product/sagas/createProductSaga";

function* productSaga() {
    yield all([
        takeLeading(ProductActions.loadProductsRequest.type, loadProductsSaga),
        takeLeading(ProductActions.createProductRequest.type, createProductSaga)
    ]);
}

export default productSaga;
