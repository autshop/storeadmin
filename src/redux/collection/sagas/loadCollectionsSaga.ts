import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Collection } from "redux/collection/types";
import { CollectionActions } from "redux/collection/slice";

function* loadCollectionsSaga() {
    try {
        type ResponseType = { collections: Collection[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/collection");
        const collections: Collection[] = parseStandardResponse<ResponseType>(response);

        yield put(CollectionActions.loadCollectionsSuccess({ collections }));
    } catch (e) {
        yield put(CollectionActions.loadCollectionsFailure({ error: "error" }));
    }
}

export default loadCollectionsSaga;
