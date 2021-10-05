import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/variant/state";
import { Variant } from "redux/variant/types";
import { Product } from "../product/types";

const VariantSlice = createSlice({
    name: "Variant",
    initialState,
    reducers: {
        setIsLoading: noop as CaseReducer,
        loadVariantsRequest: state => {
            state.isLoading = true;
        },
        loadVariantsSuccess: (state, action: PayloadAction<{ variants: Variant[] }>) => {
            state.variants = action.payload.variants;
            state.isLoading = false;
        },
        loadVariantsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        createVariantRequest: (
            state,
            action: PayloadAction<{
                data: { name: string; description: string };
                historyPush: Function;
                productId: number;
            }>
        ) => {
            state.isLoading = true;
        },
        createVariantSuccess: state => {
            state.isLoading = false;
        },
        createVariantFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        createVariantSizeRequest: (state, action: PayloadAction<{ variantId: number }>) => {
            state.isLoading = true;
        },
        createVariantSizeSuccess: state => {
            state.isLoading = false;
        },
        createVariantSizeFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        updateVariantSizePositionsRequest: (state, action: PayloadAction<{ sizeIds: number[]; variantId: number }>) => {
            state.isLoading = true;
        },
        updateVariantSizePositionsSuccess: state => {
            state.isLoading = false;
        },
        updateVariantSizePositionsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: VariantActions, reducer: VariantReducer } = VariantSlice;
export type { VariantState } from "redux/variant/state";
export { initialState } from "redux/variant/state";
