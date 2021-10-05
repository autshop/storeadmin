import { all, takeLeading } from "redux-saga/effects";
//
import { CollectionActions } from "redux/collection/slice";
import loadCollectionsSaga from "redux/collection/sagas/loadCollectionsSaga";
import addVariantSaga from "redux/collection/sagas/addVariantSaga";
import createCollectionSaga from "redux/collection/sagas/createCollectionSaga";

function* collectionSaga() {
    yield all([
        takeLeading(CollectionActions.loadCollectionsRequest.type, loadCollectionsSaga),
        takeLeading(CollectionActions.addVariantRequest.type, addVariantSaga),
        takeLeading(CollectionActions.createCollectionRequest.type, createCollectionSaga)
    ]);
}

export default collectionSaga;
