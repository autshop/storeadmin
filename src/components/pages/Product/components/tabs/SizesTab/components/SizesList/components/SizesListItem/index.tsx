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
    index: number;
};

const SizesListItem: FC<Props> = ({ sizeId, isEditMode, index }) => {
    const size = useSelector(variantSelectors.createGetSizeById(sizeId));

    //const measurement = useWatch({ control, name: `items[${index}].measurement` });
    //const quantity = useWatch({ control, name: `items[${index}].quantity` });

    //console.log(field);

    if (!size) {
        return null;
    }

    return (
        <div className={css["SizeListItem"]}>
            <div className={css["SizeListItem__item"]}>
                <div className={css["SizeListItem__item__field"]}>
                    {isEditMode ? (
                        <TextField
                        /*value={field?.measurement}
                            onChange={e => {
                                const value = get(e, "target.value", "");
                                console.log(value);
                                console.log(setValue);
                                if (isFunction(setValue)) {
                                    console.log("a");
                                    setValue(`items[${index}].measurement`, value);
                                }
                            }}*/
                        />
                    ) : (
                        <span className={css["SizeListItem__item__printed-value"]}>{size.measurement}</span>
                    )}
                </div>
                <div className={css["SizeListItem__item__field"]}>
                    {isEditMode ? (
                        <TextField
                        /*value={field?.quantity}
                            onChange={e => {
                                const value = get(e, "target.value", "");
                                if (isFunction(setValue)) {
                                    setValue(`items[${index}].quantity`, value);
                                }
                            }}*/
                        />
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
