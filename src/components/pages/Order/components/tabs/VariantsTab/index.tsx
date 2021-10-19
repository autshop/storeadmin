import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import orderSelectors from "redux/order/selectors";
import OrderSizeListItem from "components/pages/Order/components/tabs/VariantsTab/components/OrderSizeListItem";
//
import css from "./style.module.scss";

type Props = {
    orderId: number;
};

const VariantsTab: FC<Props> = ({ orderId }) => {
    const order = useSelector(orderSelectors.createGetOrderById(orderId));
    const orderSizeIds = map(order?.orderSizes || [], "id");

    if (!order) {
        return null;
    }

    return (
        <div className={css["VariantsTab"]}>
            <div className={css["VariantsTab__list"]}>
                {map(orderSizeIds, id => (
                    <OrderSizeListItem orderSizeId={id} key={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(VariantsTab);
