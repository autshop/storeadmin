import { FC, memo } from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
//
import variantSelectors from "redux/variant/selectors";
import orderSelectors from "redux/order/selectors";
//
import css from "./style.module.scss";

type Props = {
    orderSizeId: number;
};

const OrderSizeListItem: FC<Props> = ({ orderSizeId }) => {
    const orderSize = useSelector(orderSelectors.createGetOrderSizeByOrderSizeId(orderSizeId));
    const variant = useSelector(variantSelectors.createGetVariantById(get(orderSize, "size.variantId")));

    if (!orderSize || !variant) {
        return null;
    }

    console.log(orderSize);

    return (
        <div className={css["OrderSizeListItem"]}>
            <div className={css["OrderSizeListItem__content"]}>
                <div className={css["OrderSizeListItem__content__image"]}>
                    <img src={get(variant, "images[0].src")} alt="" />
                </div>
                <div className={css["OrderSizeListItem__content__details"]}>
                    <p>Title: {variant.name}</p>
                    <p>Description: {variant.description}</p>
                    <p>
                        Size <b>{orderSize.size?.measurement}</b>
                    </p>
                    <p>
                        Quantity <b>{orderSize.quantity}</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(OrderSizeListItem);
