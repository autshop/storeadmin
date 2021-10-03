export type VariantSize = {
    id: number;
    quantity: number;
    measurement: string;
    position: number;
};

export type Variant = {
    id: number;
    name: string;
    description: string;
    sku: number;
    productId: number;
    status: string; //TODO
    imageSrc: string; //TODO
    sizes: VariantSize[]; //TODO
};
