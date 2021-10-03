import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.order;

const getOrders = (state: StoreState) => getState(state).orders;

const createGetOrderById = (id: number) => (state: StoreState) => find(getOrders(state), ["id", id]);

const orderSelectors = { getOrders, createGetOrderById };

export default orderSelectors;
