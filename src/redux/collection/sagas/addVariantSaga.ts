import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { CollectionActions } from "redux/collection/slice";
import { VariantActions } from "redux/variant/slice";

function* addVariantSaga({
    payload: { collectionId, variantId }
}: ReturnType<typeof CollectionActions.addVariantRequest>) {
    try {
        yield call(serverApi.put, `/collection/${collectionId}`, {
            variantIds: [variantId]
        });

        yield put(CollectionActions.loadCollectionsRequest());
        yield put(VariantActions.loadVariantsRequest());
        yield put(CollectionActions.addVariantSuccess());
    } catch (e) {
        yield put(CollectionActions.addVariantFailure({ error: "error" }));
    }
}

export default addVariantSaga;
