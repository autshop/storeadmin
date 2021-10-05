import { all, takeLeading } from "redux-saga/effects";
//
import loadVariantsSaga from "redux/variant/sagas/loadVariantsSaga";
import { VariantActions } from "redux/variant/slice";
import createVariantSaga from "redux/variant/sagas/createVariantSaga";

function* variantSaga() {
    yield all([
        takeLeading(VariantActions.loadVariantsRequest.type, loadVariantsSaga),
        takeLeading(VariantActions.createVariantRequest.type, createVariantSaga)
    ]);
}

export default variantSaga;
