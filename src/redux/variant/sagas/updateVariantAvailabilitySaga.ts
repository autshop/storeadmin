import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { VariantActions } from "redux/variant/slice";

function* updateVariantAvailabilitySaga({
    payload: { enabled, variantId }
}: ReturnType<typeof VariantActions.updateVariantAvailabilityRequest>) {
    try {
        yield call(serverApi.put, `/variant/${variantId}/enabled`, { enabled });

        yield put(VariantActions.updateVariantAvailabilitySuccess());
        yield put(VariantActions.loadVariantsRequest());
    } catch (e) {
        yield put(VariantActions.updateVariantAvailabilityFailure({ error: "error" }));
    }
}

export default updateVariantAvailabilitySaga;
