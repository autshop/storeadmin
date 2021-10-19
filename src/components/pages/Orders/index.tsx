import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import OrderList from "components/pages/Orders/components/OrderList";
import PageLayout from "components/common/layout/PageLayout";
import { OrderActions } from "redux/order/slice";
//
import css from "./style.module.scss";

const Orders: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(OrderActions.loadOrdersRequest());
    }, [dispatch]);

    return (
        <PageLayout title="Orders">
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
        </PageLayout>
    );
};

export default memo(Orders);
