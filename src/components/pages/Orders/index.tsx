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
                    <span>#23237263</span>
                </div>
                <div className={css["Orders__list-header__submitted-at"]}>
                    <span>2020. 02. 13. 12:15</span>
                </div>
                <div className={css["Orders__list-header__variant-count"]}>
                    <span>3</span>
                </div>
                <div className={css["Orders__list-header__customer"]}>
                    <span>Lucie Macé</span>
                </div>
                <div className={css["Orders__list-header__total"]}>
                    <span>200 EUR</span>
                </div>
            </div>
            <div className={css["Orders__list-wrapper"]}>
                <OrderList />
            </div>
        </div>
    </CommonLayout>
);

export default memo(Orders);
