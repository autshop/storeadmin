import { find, filter } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.variant;

const getVariants = (state: StoreState) => getState(state).variants;

const createGetVariantById = (id: number) => (state: StoreState) => find(getVariants(state), ["id", id]);

const createGetVariantsByProductId = (id: number) => (state: StoreState) =>
    filter(getVariants(state), ["productId", id]);

const createGetSizeById = (sizeId: number) => (state: StoreState) => {
    const variant = find(getVariants(state), ({ sizes }) => !!find(sizes, ({ id }) => id === sizeId));
    return find(variant?.sizes, ({ id }) => sizeId === id);
};

const variantSelectors = { getVariants, createGetVariantById, createGetVariantsByProductId, createGetSizeById };

export default variantSelectors;
