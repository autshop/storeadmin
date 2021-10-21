import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import { VariantActions } from "redux/variant/slice";

function* uploadVariantImageSaga({
    payload: { file, variantId }
}: ReturnType<typeof VariantActions.uploadVariantImageRequest>) {
    try {
        const formData = new FormData();
        formData.append("file", file);
        yield call(serverApi.post, `/variant/${variantId}/images`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        yield put(VariantActions.uploadVariantImageSuccess());
    } catch (e) {
        yield put(VariantActions.uploadVariantImageFailure({ error: "error" }));
    } finally {
        yield put(VariantActions.loadVariantsRequest());
    }
}

export default uploadVariantImageSaga;
