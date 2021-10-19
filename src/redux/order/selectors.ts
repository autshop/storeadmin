import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.order;

const getOrders = (state: StoreState) => getState(state).orders;

const createGetOrderById = (id: number) => (state: StoreState) => find(getOrders(state), ["id", id]);

const createGetOrderSizeByOrderSizeId = (id: number) => (state: StoreState) => {
    const order = find(getOrders(state), order => !!find(order.orderSizes, ({ id: _id }) => _id === id));
    return find(order?.orderSizes, ({ id: _id }) => _id === id);
};

const orderSelectors = { getOrders, createGetOrderById, createGetOrderSizeByOrderSizeId };

export default orderSelectors;
