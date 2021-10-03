import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import orderSelectors from "redux/order/selectors";
import VariantListItem from "components/pages/Order/components/tabs/Variants/components/VariantListItem";
//
import css from "./style.module.scss";

type Props = {
    orderId: number;
};

const Variants: FC<Props> = ({ orderId }) => {
    const order = useSelector(orderSelectors.createGetOrderById(orderId));

    if (!order) {
        return null;
    }

    return (
        <div className={css["Variants"]}>
            <div className={css["Variants__list"]}>
                {map([1, 1, 1, 1, 1, 1, 1], id => (
                    <VariantListItem variantId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(Variants);
