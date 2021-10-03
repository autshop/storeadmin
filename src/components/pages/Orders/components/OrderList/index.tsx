import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
//
import OrderListItem from "components/pages/Orders/components/OrderList/components/OrderListItem";
import orderSelectors from "redux/order/selectors";
//
import css from "./style.module.scss";

const OrderList: FC = () => {
    const orders = useSelector(orderSelectors.getOrders);
    const orderIds = map(orders, "id");

    return (
        <div className={css["OrderList"]}>
            <div className={css["OrderList__container"]}>
                {map(orderIds, id => (
                    <OrderListItem orderId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(OrderList);
