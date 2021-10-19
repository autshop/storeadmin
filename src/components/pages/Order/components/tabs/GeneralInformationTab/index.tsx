import { FC, memo } from "react";
import { Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import orderSelectors from "redux/order/selectors";
//
import css from "./style.module.scss";

type Props = {
    orderId: number;
};

const GeneralInformationTab: FC<Props> = ({ orderId }) => {
    const order = useSelector(orderSelectors.createGetOrderById(orderId));

    if (!order) {
        return null;
    }

    return (
        <div className={css["GeneralInformationTab"]}>
            <div className={css["GeneralInformationTab__fields"]}>
                <TextField
                    className={css["GeneralInformationTab__fields__field"]}
                    disabled
                    value={`#${order.id}`}
                    label={"Order Number"}
                />
                <TextField
                    className={css["GeneralInformationTab__fields__field"]}
                    disabled
                    value={order.createdAt}
                    label={"Submitted At"}
                />
                <TextField
                    className={css["GeneralInformationTab__fields__field"]}
                    disabled
                    value={order.customerEmail}
                    label={"Customer"}
                />
                <TextField
                    className={css["GeneralInformationTab__fields__field"]}
                    disabled
                    value={444}
                    label={"Total"}
                />
            </div>
            <div className={css["GeneralInformationTab__buttons"]}>
                <Button variant="contained" color="secondary">
                    CANCEL
                </Button>
                <Button variant="contained" color="primary">
                    ACCEPT
                </Button>
            </div>
        </div>
    );
};

export default memo(GeneralInformationTab);
