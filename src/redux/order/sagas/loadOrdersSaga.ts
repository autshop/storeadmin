import { put, call } from "redux-saga/effects";
//
import serverApi from "lib/api";
import ApiResponse from "lib/api/type";
import { parseStandardResponse } from "lib/api/util";
import { Order } from "redux/order/types";
import { OrderActions } from "redux/order/slice";

function* loadOrdersSaga() {
    try {
        type ResponseType = { orders: Order[] };
        const response: ApiResponse<ResponseType> = yield call(serverApi.get, "/orders");
        const orders: Order[] = parseStandardResponse<ResponseType>(response);

        yield put(OrderActions.loadOrdersSuccess({ orders }));
    } catch (e) {
        yield put(OrderActions.loadOrdersFailure({ error: "error" }));
    }
}

export default loadOrdersSaga;
