import { FC, memo } from "react";
//
//
import css from "./style.module.scss";
import { useSelector } from "react-redux";

type Props = {
    productId: number;
};

const ProductListItem: FC<Props> = ({ productId }) => {
    const product = null;
    return (
        <div className={css["ProductListItem"]}>
            <div className={css["ProductListItem__image-wrapper"]}>
                <img src="" alt="" />
            </div>
            <div className={css["ProductListItem__name"]}>
                <span>Example Product #1</span>
            </div>
            <div className={css["ProductListItem__variant-count"]}>
                <span>3</span>
            </div>
        </div>
    );
};

export default memo(ProductListItem);
