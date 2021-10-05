import { all, takeLeading } from "redux-saga/effects";
//
import loadVariantsSaga from "redux/variant/sagas/loadVariantsSaga";
import { VariantActions } from "redux/variant/slice";
import createVariantSaga from "redux/variant/sagas/createVariantSaga";
import createVariantSizeSaga from "redux/variant/sagas/createVariantSizeSaga";
import updateVariantSizePositionsSaga from "redux/variant/sagas/updateVariantSizePositionsSaga";

function* variantSaga() {
    yield all([
        takeLeading(VariantActions.loadVariantsRequest.type, loadVariantsSaga),
        takeLeading(VariantActions.createVariantRequest.type, createVariantSaga),
        takeLeading(VariantActions.createVariantSizeRequest.type, createVariantSizeSaga),
        takeLeading(VariantActions.updateVariantSizePositionsRequest.type, updateVariantSizePositionsSaga)
    ]);
}

export default variantSaga;
