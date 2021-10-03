import { FC, memo } from "react";
import { map } from "lodash";
//
import OrderListItem from "components/pages/Orders/components/OrderList/components/OrderListItem";
//
import css from "./style.module.scss";

const OrderList: FC = () => (
    <div className={css["OrderList"]}>
        <div className={css["OrderList__container"]}>
            {map([1, 1, 1, 1], id => (
                <OrderListItem orderId={id} />
            ))}
        </div>
    </div>
);

export default memo(OrderList);
