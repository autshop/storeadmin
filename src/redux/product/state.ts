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
    products: [
        {
            id: 1,
            name: "Example Product #1",
            imgURLs: [
                "https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
            ]
        },
        {
            id: 2,
            name: "Example Product #2",
            imgURLs: [
                "https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
            ]
        },
        {
            id: 3,
            name: "Example Product #3",
            imgURLs: [
                "https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
            ]
        },
        {
            id: 4,
            name: "Example Product #4",
            imgURLs: [
                "https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
            ]
        },
        {
            id: 5,
            name: "Example Product #5",
            imgURLs: [
                "https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
            ]
        }
    ],
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
