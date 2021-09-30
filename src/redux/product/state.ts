import { Product } from "redux/product/types";

export type ProductState = {
    isLoading: boolean;
    products: Product[];
    createProduct: {
        isSaving: boolean;
        error: string | null;
    };
    deleteProduct: {
        isSaving: boolean;
        error: string | null;
    };
    updateProduct: {
        isSaving: boolean;
        error: string | null;
    };
};

export const initialState: ProductState = {
    isLoading: false,
    products: [],
    createProduct: {
        isSaving: false,
        error: null
    },
    deleteProduct: {
        isSaving: false,
        error: null
    },
    updateProduct: {
        isSaving: false,
        error: null
    }
};
