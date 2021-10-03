import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import orderSelectors from "redux/order/selectors";
import VariantListItem from "components/pages/Order/components/tabs/VariantsTab/components/VariantListItem";
//
import css from "./style.module.scss";

type Props = {
    orderId: number;
};

const VariantsTab: FC<Props> = ({ orderId }) => {
    const order = useSelector(orderSelectors.createGetOrderById(orderId));

    if (!order) {
        return null;
    }

    return (
        <div className={css["VariantsTab"]}>
            <div className={css["VariantsTab__list"]}>
                {map([1, 1, 1, 1, 1, 1, 1], id => (
                    <VariantListItem variantId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(VariantsTab);
