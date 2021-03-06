import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import productSelectors from "redux/product/selectors";
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";

type Props = {
    productId: number;
};

const ProductListItem: FC<Props> = ({ productId }) => {
    const product = useSelector(productSelectors.createGetProductById(productId));
    const variants = useSelector(variantSelectors.createGetVariantsByProductId(productId));

    const history = useHistory();

    const handleClick = () => history.push(`/products/${productId}`);

    if (!product) {
        return null;
    }

    return (
        <div className={css["ProductListItem"]} onClick={handleClick}>
            <div className={css["ProductListItem__name"]}>
                <span>{product.name}</span>
            </div>
            <div className={css["ProductListItem__variant-count"]}>
                <span>{variants.length}</span>
            </div>
        </div>
    );
};

export default memo(ProductListItem);
