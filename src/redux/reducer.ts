import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { ProductReducer } from "redux/product/slice";
import { AuthReducer } from "redux/auth/slice";

const combinedReducers = combineReducers<StoreState>({
    product: ProductReducer,
    auth: AuthReducer
});

export default combinedReducers;
