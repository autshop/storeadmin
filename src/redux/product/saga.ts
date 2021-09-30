import { all, takeLeading } from "redux-saga/effects";
//
import { ProductActions } from "redux/product/slice";
import loadProductsSaga from "redux/product/sagas/loadProductsSaga";
import createProductSaga from "redux/product/sagas/createProductSaga";
import deleteProductSaga from "redux/product/sagas/deleteProductSaga";
import updateProductSaga from "redux/product/sagas/updateProductSaga";

function* productSaga() {
    yield all([
        takeLeading(ProductActions.loadProductsRequest.type, loadProductsSaga),
        takeLeading(ProductActions.createProductRequest.type, createProductSaga),
        takeLeading(ProductActions.deleteProductRequest.type, deleteProductSaga),
        takeLeading(ProductActions.updateProductRequest.type, updateProductSaga)
    ]);
}

export default productSaga;
