import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { ProductActions } from "redux/product/slice";
import { VariantActions } from "../slice";

function* createVariantSaga({
    payload: {
        data: { name, description },
        historyPush,
        productId
    }
}: ReturnType<typeof VariantActions.createVariantRequest>) {
    try {
        yield call(serverApi.post, "/variant", {
            name,
            description,
            sku: 1,
            status: "active",
            imageSrc: "",
            productId
        });

        yield put(VariantActions.createVariantSuccess());
        yield put(ProductActions.loadProductsRequest());
        yield put(VariantActions.loadVariantsRequest());
        historyPush(`/products/${productId}`);
    } catch (e) {
        yield put(VariantActions.createVariantFailure({ error: "error" }));
    }
}

export default createVariantSaga;
