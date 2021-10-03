import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/variant/state";
import { Variant } from "redux/variant/types";

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
        }
    }
});

export const { actions: VariantActions, reducer: VariantReducer } = VariantSlice;
export type { VariantState } from "redux/variant/state";
export { initialState } from "redux/variant/state";
