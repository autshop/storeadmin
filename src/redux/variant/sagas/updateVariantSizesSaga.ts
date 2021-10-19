import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { VariantActions } from "redux/variant/slice";

function* updateVariantSizesSaga({
    payload: { sizes, variantId }
}: ReturnType<typeof VariantActions.updateVariantSizesRequest>) {
    try {
        yield call(serverApi.put, `/variant/${variantId}/sizes`, sizes);

        yield put(VariantActions.updateVariantSizesSuccess());
        yield put(VariantActions.loadVariantsRequest());
    } catch (e) {
        yield put(VariantActions.updateVariantSizesFailure({ error: "error" }));
    }
}

export default updateVariantSizesSaga;
