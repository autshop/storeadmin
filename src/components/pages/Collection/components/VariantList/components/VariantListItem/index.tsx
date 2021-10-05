import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";

type Props = {
    variantId: number;
};

const VariantListItem: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    if (!variant) {
        return null;
    }

    return (
        <div className={css["VariantListItem"]}>
            <div className={css["VariantListItem__variant-id"]}>
                <span>{`#${variant.id}`}</span>
            </div>
            <div className={css["VariantListItem__variant-name"]}>
                <span>{variant.name}</span>
            </div>
        </div>
    );
};

export default memo(VariantListItem);
