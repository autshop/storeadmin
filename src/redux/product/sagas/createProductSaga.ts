import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Product } from "redux/product/types";
import { ProductActions } from "redux/product/slice";

function* createProductSaga({
    payload: {
        data: { name },
        historyPush
    }
}: ReturnType<typeof ProductActions.createProductRequest>) {
    try {
        type ResponseType = { products: Product[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.post, "/product", { name });
        const products = parseStandardResponse<ResponseType>(response);

        yield put(ProductActions.createProductSuccess({ products }));
        historyPush("/products");
    } catch (e) {
        //TODO ERROR
        yield put(ProductActions.createProductFailure({ error: "error" }));
    }
}

export default createProductSaga;
