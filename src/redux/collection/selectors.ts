import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.collection;

const getCollections = (state: StoreState) => getState(state).collections;

const createGetCollectionById = (id: number) => (state: StoreState) => find(getCollections(state), ["id", id]);

const collectionSelectors = {
    getCollections,
    createGetCollectionById
};

export default collectionSelectors;
