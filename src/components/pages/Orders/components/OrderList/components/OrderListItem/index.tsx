import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
//
import css from "./style.module.scss";

type Props = {
    orderId: number;
};

const OrderListItem: FC<Props> = ({ orderId }) => {
    const Order = null;
    return (
        <div className={css["OrderListItem"]}>
            <div className={css["OrderListItem__order-number"]}>
                <span>#23237263</span>
            </div>
            <div className={css["OrderListItem__submitted-at"]}>
                <span>2020. 02. 13. 12:15</span>
            </div>
            <div className={css["OrderListItem__variant-count"]}>
                <span>3</span>
            </div>
            <div className={css["OrderListItem__customer"]}>
                <span>Lucie Macé</span>
            </div>
            <div className={css["OrderListItem__total"]}>
                <span>200 EUR</span>
            </div>
        </div>
    );
};

export default memo(OrderListItem);
