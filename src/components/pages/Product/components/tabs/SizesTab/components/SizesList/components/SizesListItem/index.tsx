import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
//
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";

type Props = {
    sizeId: number;
    isEditMode: boolean;
};

const SizesListItem: FC<Props> = ({ sizeId, isEditMode }) => {
    const size = useSelector(variantSelectors.createGetSizeById(sizeId));

    if (!size) {
        return null;
    }

    return (
        <div className={css["SizeListItem"]}>
            <div className={css["SizeListItem__item"]}>
                <div className={css["SizeListItem__item__field"]}>
                    {isEditMode ? (
                        <TextField value={size.measurement} />
                    ) : (
                        <span className={css["SizeListItem__item__printed-value"]}>{size.measurement}</span>
                    )}
                </div>
                <div className={css["SizeListItem__item__field"]}>
                    {isEditMode ? (
                        <TextField value={size.quantity} />
                    ) : (
                        <span className={css["SizeListItem__item__printed-value"]}>{size.quantity}</span>
                    )}
                </div>
            </div>
            {!isEditMode && (
                <div className={css["SizeListItem__handle"]}>
                    <span />
                    <span />
                    <span />
                </div>
            )}
        </div>
    );
};

export default memo(SizesListItem);
