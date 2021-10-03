import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/order/state";
import { Order } from "redux/order/types";

const OrderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {
        setIsLoading: noop as CaseReducer,
        loadOrdersRequest: state => {
            state.isLoading = true;
        },
        loadOrdersSuccess: (state, action: PayloadAction<{ orders: Order[] }>) => {
            state.orders = action.payload.orders;
            state.isLoading = false;
        },
        loadOrdersFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const { actions: OrderActions, reducer: OrderReducer } = OrderSlice;
export type { OrderState } from "redux/order/state";
export { initialState } from "redux/order/state";
