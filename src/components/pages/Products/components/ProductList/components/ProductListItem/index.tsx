import { FC, memo } from "react";
import { useSelector } from "react-redux";
//
//
import css from "./style.module.scss";

type Props = {
    productId: number;
};

const ProductListItem: FC<Props> = ({ productId }) => {
    const product = null;
    return (
        <div className={css["ProductListItem"]}>
            <div className={css["ProductListItem__image-wrapper"]}>
                <img
                    src="https://cdn.shopify.com/s/files/1/2530/3930/files/CommunityClothing134124_1200x_cea165fb-496c-4eaa-b1cc-2c209f03046a_800x.jpg?v=1615482666"
                    alt=""
                />
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
