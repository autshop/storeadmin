import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
import orderSelectors from "redux/order/selectors";
//
import css from "./style.module.scss";
import { useHistory } from "react-router-dom";

type Props = {
    orderId: number;
};

const OrderListItem: FC<Props> = ({ orderId }) => {
    const order = useSelector(orderSelectors.createGetOrderById(orderId));

    const history = useHistory();

    const handleClick = () => history.push(`/orders/${orderId}`);

    if (!order) {
        return null;
    }

    return (
        <div className={css["OrderListItem"]} onClick={handleClick}>
            <div className={css["OrderListItem__order-number"]}>
                <span>{`#${order.id}`}</span>
            </div>
            <div className={css["OrderListItem__submitted-at"]}>
                <span>{order.submittedAt}</span>
            </div>
            <div className={css["OrderListItem__variant-count"]}>
                <span>{order.variantIds.length}</span>
            </div>
            <div className={css["OrderListItem__customer-name"]}>
                <span>{order.customerName}</span>
            </div>
            <div className={css["OrderListItem__total"]}>
                <span>{`${order.total} EUR`}</span>
            </div>
        </div>
    );
};

export default memo(OrderListItem);
