import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Product } from "redux/product/types";
import { ProductActions } from "redux/product/slice";

function* loadProductsSaga() {
    try {
        type ResponseType = { products: Product[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/product");
        const products = parseStandardResponse<ResponseType>(response);

        yield put(ProductActions.loadProductsSuccess({ products }));
    } catch (e) {
        yield put(ProductActions.loadProductsFailure({ error: "error" }));
    }
}

export default loadProductsSaga;
