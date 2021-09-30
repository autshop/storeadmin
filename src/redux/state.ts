import { ProductState, initialState as initialProductState } from "redux/product/state";
import { AuthState, initialState as initialAuthState } from "redux/auth/state";

export type StoreState = { product: ProductState; auth: AuthState };

const initialState: StoreState = { product: initialProductState, auth: initialAuthState };

export default initialState;
