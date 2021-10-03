import { Order } from "redux/order/types";

export type OrderState = {
    isLoading: boolean;
    orders: Order[];
    error: string | null;
};

export const initialState: OrderState = {
    isLoading: false,
    orders: [
        { id: 1, customerName: "Lucie Macé", submittedAt: "2020. 02. 13. 12:15", total: 200, variantIds: [1, 2, 3, 4] },
        { id: 2, customerName: "Lucie Macé", submittedAt: "2020. 02. 13. 12:15", total: 200, variantIds: [1, 2, 3, 4] },
        { id: 3, customerName: "Lucie Macé", submittedAt: "2020. 02. 13. 12:15", total: 200, variantIds: [1, 2, 3, 4] }
    ],
    error: null
};
