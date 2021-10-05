import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { CollectionActions } from "redux/collection/slice";

function* createCollectionSaga({
    payload: {
        data: { name, description },
        historyPush
    }
}: ReturnType<typeof CollectionActions.createCollectionRequest>) {
    try {
        yield call(serverApi.post, "/collection", {
            name,
            description
        });

        yield put(CollectionActions.createCollectionSuccess());
        yield put(CollectionActions.loadCollectionsRequest());
        historyPush("/collections");
    } catch (e) {
        yield put(CollectionActions.loadCollectionsFailure({ error: "error" }));
    }
}

export default createCollectionSaga;
