import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.product;

const getProducts = (state: StoreState) => getState(state).products;

const createGetProductById = (id: number) => (state: StoreState) => find(getProducts(state), ["id", id]);

const productSelectors = { getProducts, createGetProductById };

export default productSelectors;
