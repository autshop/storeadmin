import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
//
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";

type Props = {
    sizeId: number;
    index: number;
};

const SizesListItem: FC<Props> = ({ sizeId, index }) => {
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
                    <span className={css["SizeListItem__item__printed-value"]}>{size.measurement}</span>
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
