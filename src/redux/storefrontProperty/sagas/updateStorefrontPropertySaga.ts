import { call, put } from "redux-saga/effects";
import { get } from "lodash";
//
import serverApi from "lib/api";
import { StorefrontPropertyActions } from "redux/storefrontProperty/slice";

function* updateStorefrontPropertySaga({
    payload: { data }
}: ReturnType<typeof StorefrontPropertyActions.updateStorefrontPropertyRequest>) {
    try {
        console.log(data);
        yield call(serverApi.put, "/storefrontProperty", {
            key: "site.background.color",
            value: get(data, "siteBackgroundColor", "")
        });
        yield call(serverApi.put, "/storefrontProperty", {
            key: "site.nav-bar.header",
            value: get(data, "siteNavBarHeader", "")
        });

        yield put(StorefrontPropertyActions.updateStorefrontPropertySuccess());
        yield put(StorefrontPropertyActions.loadStorefrontPropertyRequest());
    } catch (e) {
        yield put(StorefrontPropertyActions.updateStorefrontPropertyFailure({ error: "error" }));
    }
}
export default updateStorefrontPropertySaga;
