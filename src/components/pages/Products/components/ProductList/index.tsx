import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
//
import ProductListItem from "components/pages/Products/components/ProductList/components/ProductListItem";
import productSelectors from "redux/product/selectors";
//
import css from "./style.module.scss";

const ProductList: FC = () => {
    const products = useSelector(productSelectors.getProducts);
    const productIds = map(products, "id");
    return (
        <div className={css["ProductList"]}>
            <div className={css["ProductList__container"]}>
                {map(productIds, id => (
                    <ProductListItem productId={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(ProductList);
