import { call, put } from "redux-saga/effects";
//
import ApiResponse from "lib/api/type";
import serverApi from "lib/api";
import { parseStandardResponse } from "lib/api/util";
import { StorefrontProperty } from "redux/storefrontProperty/types";
import { StorefrontPropertyActions } from "redux/storefrontProperty/slice";

function* loadStorefrontPropertySaga() {
    try {
        type ResponseType = { storefrontProperties: StorefrontProperty[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/storefrontProperty");
        const storefrontProperties: StorefrontProperty[] = parseStandardResponse<ResponseType>(response);

        yield put(StorefrontPropertyActions.loadStorefrontPropertySuccess({ storefrontProperties }));
    } catch (e) {
        yield put(StorefrontPropertyActions.loadStorefrontPropertyFailure({ error: "error" }));
    }
}
export default loadStorefrontPropertySaga;
