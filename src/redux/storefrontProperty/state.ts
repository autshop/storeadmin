import { StorefrontProperty } from "redux/storefrontProperty/types";

export type StorefrontPropertyState = {
    storefrontProperties: StorefrontProperty[];
    isLoading: boolean;
};

export const initialState: StorefrontPropertyState = {
    storefrontProperties: [],
    isLoading: false
};
