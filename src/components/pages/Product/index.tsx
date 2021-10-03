import { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { map } from "lodash";
//
import productSelectors from "redux/product/selectors";
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import variantSelectors from "redux/variant/selectors";
//

const Product: FC = () => {
    const { id: idParamAsString } = useParams<{ id?: string }>();
    const id = Number(idParamAsString);

    const product = useSelector(productSelectors.createGetProductById(id));
    const variants = useSelector(variantSelectors.createGetVariantsByProductId(id));

    const productTabs: Tab[] = useMemo(
        () =>
            map(variants, variant => ({
                key: `${variant.id}`,
                name: variant.name,
                children: [
                    { key: `${variant.id}/GENERAL_INFORMATION`, name: "General Information", content: null },
                    { key: `${variant.id}/SIZES`, name: "Sizes", content: null }
                ],
                content: null
            })),
        [variants, id]
    );

    if (!id || !product) {
        return null;
    }

    return (
        <PageLayout title={`Product ${product.name}`} backHref="/">
            <TabLayout tabs={productTabs} />
        </PageLayout>
    );
};

export default memo(Product);
