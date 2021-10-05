import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { ProductActions } from "redux/product/slice";

function* createProductSaga({
    payload: {
        data: { name },
        historyPush
    }
}: ReturnType<typeof ProductActions.createProductRequest>) {
    try {
        yield call(serverApi.post, "/product", { name });

        yield put(ProductActions.createProductSuccess());
        yield put(ProductActions.loadProductsRequest());
        historyPush("/products");
    } catch (e) {
        //TODO ERROR
        yield put(ProductActions.createProductFailure({ error: "error" }));
    }
}

export default createProductSaga;
