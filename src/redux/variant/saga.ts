import { all, takeLeading } from "redux-saga/effects";
//
import { VariantActions } from "redux/variant/slice";
import loadVariantsSaga from "redux/variant/sagas/loadVariantsSaga";
import createVariantSaga from "redux/variant/sagas/createVariantSaga";
import createVariantSizeSaga from "redux/variant/sagas/createVariantSizeSaga";
import updateVariantSizePositionsSaga from "redux/variant/sagas/updateVariantSizePositionsSaga";
import updateVariantSizesSaga from "redux/variant/sagas/updateVariantSizesSaga";
import uploadVariantImageSaga from "redux/variant/sagas/uploadVariantImageSaga";
import updateVariantAvailabilitySaga from "redux/variant/sagas/updateVariantAvailabilitySaga";

function* variantSaga() {
    yield all([
        takeLeading(VariantActions.loadVariantsRequest.type, loadVariantsSaga),
        takeLeading(VariantActions.createVariantRequest.type, createVariantSaga),
        takeLeading(VariantActions.createVariantSizeRequest.type, createVariantSizeSaga),
        takeLeading(VariantActions.updateVariantSizePositionsRequest.type, updateVariantSizePositionsSaga),
        takeLeading(VariantActions.updateVariantSizesRequest.type, updateVariantSizesSaga),
        takeLeading(VariantActions.uploadVariantImageRequest.type, uploadVariantImageSaga),
        takeLeading(VariantActions.updateVariantAvailabilityRequest.type, updateVariantAvailabilitySaga)
    ]);
}

export default variantSaga;
