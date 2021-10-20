import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.storefrontProperty;

const getStorefrontProperties = (state: StoreState) => getState(state).storefrontProperties;

const getStorefrontPropertiesIsLoading = (state: StoreState) => getState(state).isLoading;

const createGetStorefrontPropertyByKey = (key: string) => (state: StoreState) =>
    find(getStorefrontProperties(state), ({ key: __key }) => __key === key);

const storefrontPropertySelectors = {
    getStorefrontProperties,
    createGetStorefrontPropertyByKey,
    getStorefrontPropertiesIsLoading
};

export default storefrontPropertySelectors;
