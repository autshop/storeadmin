import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import { initialState } from "redux/collection/state";
import { Collection } from "redux/collection/types";

const CollectionSlice = createSlice({
    name: "Collection",
    initialState,
    reducers: {
        setIsLoading: noop as CaseReducer,
        loadCollectionsRequest: state => {
            state.isLoading = true;
        },
        loadCollectionsSuccess: (state, action: PayloadAction<{ collections: Collection[] }>) => {
            state.collections = action.payload.collections;
            state.isLoading = false;
        },
        loadCollectionsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        addVariantRequest: (state, action: PayloadAction<{ collectionId: number; variantId: number }>) => {
            state.isLoading = true;
        },
        addVariantSuccess: state => {
            state.isLoading = false;
        },
        addVariantFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        },
        createCollectionRequest: (
            state,
            action: PayloadAction<{
                data: { name: string; description: string };
                historyPush: Function;
            }>
        ) => {
            state.isLoading = true;
        },
        createCollectionSuccess: state => {
            state.isLoading = false;
        },
        createCollectionFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            //state.error = action.payload.error;
        }
    }
});

export const { actions: CollectionActions, reducer: CollectionReducer } = CollectionSlice;
export type { CollectionState } from "redux/collection/state";
export { initialState } from "redux/collection/state";
