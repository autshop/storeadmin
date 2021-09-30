import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { ProductReducer } from "redux/product/slice";
import { AuthReducer } from "redux/auth/slice";
import { AppReducer } from "redux/app/slice";

const combinedReducers = combineReducers<StoreState>({
    product: ProductReducer,
    auth: AuthReducer,
    app: AppReducer
});

export default combinedReducers;
