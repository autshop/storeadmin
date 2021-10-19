import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { VariantActions } from "redux/variant/slice";

function* createVariantSizeSaga({
    payload: { variantId }
}: ReturnType<typeof VariantActions.createVariantSizeRequest>) {
    try {
        yield call(serverApi.post, `/variant/${variantId}/sizes`, [{ measurement: "", quantity: 0 }]);

        yield put(VariantActions.createVariantSizeSuccess());
        yield put(VariantActions.loadVariantsRequest());
    } catch (e) {
        yield put(VariantActions.createVariantSizeFailure({ error: "error" }));
    }
}

export default createVariantSizeSaga;
