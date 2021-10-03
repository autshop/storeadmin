import { Variant } from "redux/variant/types";

export type VariantState = {
    isLoading: boolean;
    variants: Variant[];
    createVariant: {
        isSaving: boolean;
        error: string | null;
    };
};

export const initialState: VariantState = {
    isLoading: false,
    variants: [],
    createVariant: {
        isSaving: false,
        error: null
    }
};
