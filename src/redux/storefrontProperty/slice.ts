import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/storefrontProperty/state";
import { StorefrontProperty } from "./types";
import { StorefrontPropertiesFormTypes } from "../../utils/forms/types";

const StorefrontPropertySlice = createSlice({
    name: "StorefrontProperty",
    initialState,
    reducers: {
        loadStorefrontPropertyRequest: state => {
            state.isLoading = true;
        },
        loadStorefrontPropertySuccess: (
            state,
            action: PayloadAction<{ storefrontProperties: StorefrontProperty[] }>
        ) => {
            state.isLoading = false;
            state.storefrontProperties = action.payload.storefrontProperties;
        },
        loadStorefrontPropertyFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
        },

        updateStorefrontPropertyRequest: (state, action: PayloadAction<{ data: StorefrontPropertiesFormTypes }>) => {
            state.isLoading = true;
        },
        updateStorefrontPropertySuccess: state => {
            state.isLoading = false;
        },
        updateStorefrontPropertyFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
        }
    }
});

export const { actions: StorefrontPropertyActions, reducer: StorefrontPropertyReducer } = StorefrontPropertySlice;
export type { StorefrontPropertyState } from "redux/storefrontProperty/state";
export { initialState } from "redux/storefrontProperty/state";
