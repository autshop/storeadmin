import { all, takeLeading } from "redux-saga/effects";
//
import { StorefrontPropertyActions } from "redux/storefrontProperty/slice";
import loadStorefrontPropertySaga from "redux/storefrontProperty/sagas/loadStorefrontPropertySaga";
import updateStorefrontPropertySaga from "redux/storefrontProperty/sagas/updateStorefrontPropertySaga";
//

function* storefrontPropertySaga() {
    yield all([
        takeLeading(StorefrontPropertyActions.loadStorefrontPropertyRequest.type, loadStorefrontPropertySaga),
        takeLeading(StorefrontPropertyActions.updateStorefrontPropertyRequest.type, updateStorefrontPropertySaga)
    ]);
}

export default storefrontPropertySaga;
