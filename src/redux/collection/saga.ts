import { all, takeLeading } from "redux-saga/effects";
//
import { CollectionActions } from "redux/collection/slice";
import loadCollectionsSaga from "redux/collection/sagas/loadCollectionsSaga";

function* collectionSaga() {
    yield all([takeLeading(CollectionActions.loadCollectionsRequest.type, loadCollectionsSaga)]);
}

export default collectionSaga;
