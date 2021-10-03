import { FC, memo } from "react";
//
import ProductList from "components/pages/Products/components/ProductList";
import CommonLayout from "components/common/layout/CommonLayout";
//
import css from "./style.module.scss";

const Products: FC = () => (
    <CommonLayout>
        <div className={css["Products"]}>
            <div className={css["Products__title"]}>Products</div>
            <div className={css["Products__list-wrapper"]}>
                <ProductList />
            </div>
        </div>
    </CommonLayout>
);

export default memo(Products);
