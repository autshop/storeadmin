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
        createProductRequest: state => {
            state.isLoading = true;
        },
        createProductSuccess: (state, action: PayloadAction<{ products: Product[] }>) => {
            state.isLoading = false;
        },
        createProductFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        deleteProductRequest: state => {
            state.isLoading = true;
        },
        deleteProductSuccess: (state, action: PayloadAction<{ products: any[] }>) => {
            state.isLoading = false;
        },
        deleteProductFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        updateProductRequest: state => {
            state.isLoading = true;
        },
        updateProductSuccess: (state, action: PayloadAction<{ products: any[] }>) => {
            state.isLoading = false;
        },
        updateProductFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: ProductActions, reducer: ProductReducer } = ProductSlice;
export type { ProductState } from "redux/product/state";
export { initialState } from "redux/product/state";
