import { all, takeLeading } from "redux-saga/effects";
//
import loadVariantsSaga from "redux/variant/sagas/loadVariantsSaga";
import { VariantActions } from "redux/variant/slice";

function* variantSaga() {
    yield all([takeLeading(VariantActions.loadVariantsRequest.type, loadVariantsSaga)]);
}

export default variantSaga;
