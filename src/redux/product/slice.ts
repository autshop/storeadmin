import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/product/state";
import { Product } from "redux/product/types";

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        setIsLoading: noop as CaseReducer,
        loadProductsRequest: state => {
            state.isLoading = true;
        },
        loadProductsSuccess: (state, action: PayloadAction<{ products: Product[] }>) => {
            state.products = action.payload.products;
            state.isLoading = false;
        },
        loadProductsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        createProductRequest: (state, action: PayloadAction<{ data: { name: string }; historyPush: Function }>) => {
            state.isLoading = true;
        },
        createProductSuccess: state => {
            state.isLoading = false;
        },
        createProductFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: ProductActions, reducer: ProductReducer } = ProductSlice;
export type { ProductState } from "redux/product/state";
export { initialState } from "redux/product/state";
