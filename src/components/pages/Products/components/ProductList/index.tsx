import { FC, memo } from "react";
import { map } from "lodash";
//
import ProductListItem from "components/pages/Products/components/ProductList/components/ProductListItem";
//
import css from "./style.module.scss";

const ProductList: FC = () => (
    <div className={css["ProductList"]}>
        <div className={css["ProductList__container"]}>
            {map([1, 1, 1, 1], id => (
                <ProductListItem productId={id} />
            ))}
        </div>
    </div>
);

export default memo(ProductList);
