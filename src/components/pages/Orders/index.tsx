import { FC, memo } from "react";
//
import OrderList from "components/pages/Orders/components/OrderList";
import CommonLayout from "components/common/layout/CommonLayout";
//
import css from "./style.module.scss";

const Orders: FC = () => (
    <CommonLayout title="Orders">
        <div className={css["Orders"]}>
            <div className={css["Orders__list-header"]}>
                <div className={css["Orders__list-header__order-number"]}>
                    <span>Order Number</span>
                </div>
                <div className={css["Orders__list-header__submitted-at"]}>
                    <span>Submitted At</span>
                </div>
                <div className={css["Orders__list-header__variant-count"]}>
                    <span>Variants</span>
                </div>
                <div className={css["Orders__list-header__customer-name"]}>
                    <span>Customer</span>
                </div>
                <div className={css["Orders__list-header__total"]}>
                    <span>Total</span>
                </div>
            </div>
            <div className={css["Orders__list-wrapper"]}>
                <OrderList />
            </div>
        </div>
    </CommonLayout>
);

export default memo(Orders);
