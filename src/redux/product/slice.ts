import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/product/state";

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        setIsLoading: noop as CaseReducer,
        loadProductsRequest: state => {
            state.isLoading = true;
        },
        //TODO
        loadProductsSuccess: (state, action: PayloadAction<{ products: any[] }>) => {
            state.isLoading = false;
        },
        loadProductsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: ProductActions, reducer: ProductReducer } = ProductSlice;
export type { ProductState } from "redux/product/state";
export { initialState } from "redux/product/state";
