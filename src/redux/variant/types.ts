export type VariantSize = {
    id: number;
    quantity: number;
    measurement: string;
    position: number;
};

export type VariantImages = {
    id: number;
    src: string;
};

export type Variant = {
    id: number;
    name: string;
    description: string;
    sku: number;
    productId: number;
    sizes: VariantSize[];
    images: VariantImages[];
    enabled: boolean;
    price: number;
};
