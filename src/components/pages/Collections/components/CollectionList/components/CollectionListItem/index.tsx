import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import collectionSelectors from "redux/collection/selectors";
//
import css from "./style.module.scss";

type Props = {
    collectionId: number;
};

const CollectionListItem: FC<Props> = ({ collectionId }) => {
    const collection = useSelector(collectionSelectors.createGetCollectionById(collectionId));

    const history = useHistory();

    const handleClick = () => history.push(`/collections/${collectionId}`);

    if (!collection) {
        return null;
    }

    return (
        <div className={css["CollectionListItem"]} onClick={handleClick}>
            <div className={css["CollectionListItem__collection-number"]}>
                <span>{`#${collection.id}`}</span>
            </div>
            <div className={css["CollectionListItem__variant-count"]}>
                <span>{collection.variantIds.length}</span>
            </div>
        </div>
    );
};

export default memo(CollectionListItem);
