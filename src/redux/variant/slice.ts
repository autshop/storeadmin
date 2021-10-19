import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/variant/state";
import { Variant, VariantSize } from "redux/variant/types";

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
        },
        updateVariantSizesRequest: (state, action: PayloadAction<{ sizes: VariantSize[]; variantId: number }>) => {
            state.isLoading = true;
        },
        updateVariantSizesSuccess: state => {
            state.isLoading = false;
        },
        updateVariantSizesFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        uploadVariantImageRequest: (state, action: PayloadAction<{ file: File; variantId: number }>) => {
            state.isLoading = true;
        },
        uploadVariantImageSuccess: state => {
            state.isLoading = false;
        },
        uploadVariantImageFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: VariantActions, reducer: VariantReducer } = VariantSlice;
export type { VariantState } from "redux/variant/state";
export { initialState } from "redux/variant/state";
