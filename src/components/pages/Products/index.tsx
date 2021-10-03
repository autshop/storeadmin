import { FC, memo } from "react";
//
import ProductList from "components/pages/Products/components/ProductList";
import PageLayout from "components/common/layout/PageLayout";
//
import css from "./style.module.scss";

const Products: FC = () => (
    <PageLayout title="Products">
        <div className={css["Products"]}>
            <div className={css["Products__list-header"]}>
                <div className={css["Products__list-header__name"]}>
                    <span>Product Name</span>
                </div>
                <div className={css["Products__list-header__variant-count"]}>
                    <span>Variants</span>
                </div>
            </div>
            <div className={css["Products__list-wrapper"]}>
                <ProductList />
            </div>
        </div>
    </PageLayout>
);

export default memo(Products);
