import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import ProductList from "components/pages/Products/components/ProductList";
import PageLayout from "components/common/layout/PageLayout";
import { ProductActions } from "redux/product/slice";
import { VariantActions } from "redux/variant/slice";
//
import css from "./style.module.scss";

const Products: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductActions.loadProductsRequest());
        dispatch(VariantActions.loadVariantsRequest());
    }, [dispatch]);

    return (
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
};

export default memo(Products);
