import { Collection } from "redux/collection/types";

export type CollectionState = {
    isLoading: boolean;
    collections: Collection[];
};

export const initialState: CollectionState = {
    isLoading: false,
    collections: []
};
