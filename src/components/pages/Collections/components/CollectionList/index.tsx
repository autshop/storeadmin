import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
//
import CollectionListItem from "components/pages/Collections/components/CollectionList/components/CollectionListItem";
import collectionSelectors from "redux/collection/selectors";
//
import css from "./style.module.scss";

const CollectionList: FC = () => {
    const collections = useSelector(collectionSelectors.getCollections);
    const collectionIds = map(collections, "id");

    return (
        <div className={css["CollectionList"]}>
            <div className={css["CollectionList__container"]}>
                {map(collectionIds, id => (
                    <CollectionListItem collectionId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(CollectionList);
