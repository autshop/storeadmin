import { ProductState, initialState as initialProductState } from "redux/product/state";
import { AuthState, initialState as initialAuthState } from "redux/auth/state";
import { AppState, initialState as initialAppState } from "redux/app/state";
import { OrderState, initialState as initialOrderState } from "redux/order/state";
import { VariantState, initialState as initialVariantState } from "redux/variant/state";

export type StoreState = {
    product: ProductState;
    auth: AuthState;
    app: AppState;
    order: OrderState;
    variant: VariantState;
};

const initialState: StoreState = {
    product: initialProductState,
    auth: initialAuthState,
    app: initialAppState,
    order: initialOrderState,
    variant: initialVariantState
};

export default initialState;
