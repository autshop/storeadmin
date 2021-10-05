import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { VariantActions } from "redux/variant/slice";

function* updateVariantSizePositionsSaga({
    payload: { sizeIds, variantId }
}: ReturnType<typeof VariantActions.updateVariantSizePositionsRequest>) {
    try {
        yield call(serverApi.put, `/variant/${variantId}/sizes/position`, sizeIds);

        yield put(VariantActions.updateVariantSizePositionsSuccess());
        yield put(VariantActions.loadVariantsRequest());
    } catch (e) {
        yield put(VariantActions.updateVariantSizePositionsFailure({ error: "error" }));
    }
}

export default updateVariantSizePositionsSaga;
