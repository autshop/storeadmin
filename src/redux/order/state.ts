import { Order } from "redux/order/types";

export type OrderState = {
    isLoading: boolean;
    orders: Order[];
    error: string | null;
};

export const initialState: OrderState = {
    isLoading: false,
    orders: [],
    error: null
};
