import { ProductState, initialState as initialProductState } from "redux/product/state";
import { AuthState, initialState as initialAuthState } from "redux/auth/state";
import { AppState, initialState as initialAppState } from "redux/app/state";

export type StoreState = { product: ProductState; auth: AuthState; app: AppState };

const initialState: StoreState = { product: initialProductState, auth: initialAuthState, app: initialAppState };

export default initialState;
