import { all, takeLeading } from "redux-saga/effects";
//
import { AuthActions } from "redux/auth/slice";
import initializeAuthSaga from "redux/auth/sagas/initializeAuthSaga";
import loginUserSaga from "redux/auth/sagas/loginUserSaga";

function* authSaga() {
    yield all([
        takeLeading(AuthActions.initializeAuthRequest.type, initializeAuthSaga),
        takeLeading(AuthActions.loginUserRequest.type, loginUserSaga)
    ]);
}

export default authSaga;
