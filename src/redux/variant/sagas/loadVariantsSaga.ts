import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Variant } from "redux/variant/types";
import { VariantActions } from "redux/variant/slice";

function* loadVariantsSaga() {
    try {
        type ResponseType = { variants: Variant[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/variant");
        const variants: Variant[] = parseStandardResponse<ResponseType>(response);

        yield put(VariantActions.loadVariantsSuccess({ variants }));
    } catch (e) {
        //TODO ERROR
        yield put(VariantActions.loadVariantsFailure({ error: "error" }));
    }
}

export default loadVariantsSaga;
