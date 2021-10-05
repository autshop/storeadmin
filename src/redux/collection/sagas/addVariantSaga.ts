import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Collection } from "redux/collection/types";
import { CollectionActions } from "redux/collection/slice";

function* addVariantSaga({ payload: { variantId } }: ReturnType<typeof CollectionActions.addVariantRequest>) {
    try {
        type ResponseType = { collection: Collection };
        const response: ApiResponse<ResponseType> = yield call(serverApi.put, "/collection", { variantId });
        const collection: Collection = parseStandardResponse<ResponseType>(response);

        yield put(CollectionActions.addVariantSuccess({ collection }));
    } catch (e) {
        //TODO ERROR
        yield put(CollectionActions.addVariantFailure({ error: "error" }));
    }
}

export default addVariantSaga;
