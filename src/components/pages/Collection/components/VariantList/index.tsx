import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
//
import VariantListItem from "components/pages/Collection/components/VariantList/components/VariantListItem";
import collectionSelectors from "redux/collection/selectors";
//
import css from "./style.module.scss";

type Props = {
    collectionId: number;
};

const VariantList: FC<Props> = ({ collectionId }) => {
    const collection = useSelector(collectionSelectors.createGetCollectionById(collectionId));
    const variantIds = collection?.variantIds || [];
    return (
        <div className={css["VariantList"]}>
            <div className={css["VariantList__container"]}>
                {map(variantIds, id => (
                    <VariantListItem variantId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(VariantList);
