export type Address = {
    id: number;
    country: string;
    addressLine: string;
    postalCode: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
};

export type Size = {
    id: number;
    variantId: number;
    measurement: string;
    quantity: number;
    position: number;
};

export type OrderSize = {
    id: number;
    quantity: number;
    size: Size | null;
};

export type Order = {
    id: number;
    customerEmail: string;
    orderState: string;
    orderSizes: OrderSize[];
    address: Address | null;
    shippingMethodId: number;
    createdAt: string;
};
