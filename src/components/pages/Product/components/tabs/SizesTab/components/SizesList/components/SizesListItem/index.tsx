import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
//
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";

type Props = {
    sizeId: number;
};

const SizesListItem: FC<Props> = ({ sizeId }) => {
    const size = useSelector(variantSelectors.createGetSizeById(sizeId));

    if (!size) {
        return null;
    }

    return (
        <div className={css["SizeListItem"]}>
            <div className={css["SizeListItem__item"]}>
                <div className={css["SizeListItem__item__field"]}>
                    <TextField value={size.measurement} />
                </div>
                <div className={css["SizeListItem__item__field"]}>
                    <TextField value={size.quantity} />
                </div>
            </div>
            <div className={css["SizeListItem__handle"]}>
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};

export default memo(SizesListItem);
