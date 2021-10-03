import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { ProductReducer } from "redux/product/slice";
import { AuthReducer } from "redux/auth/slice";
import { AppReducer } from "redux/app/slice";
import { OrderReducer } from "redux/order/slice";

const combinedReducers = combineReducers<StoreState>({
    product: ProductReducer,
    auth: AuthReducer,
    app: AppReducer,
    order: OrderReducer
});

export default combinedReducers;
