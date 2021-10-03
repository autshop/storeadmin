import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.variant;

const getVariants = (state: StoreState) => getState(state).variants;

const createGetVariantById = (id: number) => (state: StoreState) => find(getVariants(state), ["id", id]);

const variantSelectors = { getVariants, createGetVariantById };

export default variantSelectors;
