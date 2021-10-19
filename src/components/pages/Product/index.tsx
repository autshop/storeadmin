import { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { map } from "lodash";
//
import productSelectors from "redux/product/selectors";
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import variantSelectors from "redux/variant/selectors";
import SizesPositionTab from "components/pages/Product/components/tabs/SizesPositionTab";
import VariantAddTab from "components/pages/Product/components/tabs/VariantAddTab";
import GeneralInformationTab from "components/pages/Product/components/tabs/GeneralInformationTab";
//

const Product: FC = () => {
    const { id: idParamAsString } = useParams<{ id?: string }>();
    const id = Number(idParamAsString);

    const product = useSelector(productSelectors.createGetProductById(id));
    const variants = useSelector(variantSelectors.createGetVariantsByProductId(id));

    const productTabs: Tab[] = useMemo(
        () => [
            ...map(variants, variant => ({
                key: `${variant.id}`,
                name: variant.name,
                children: [
                    {
                        key: `${variant.id}/GENERAL_INFORMATION`,
                        name: "General Information",
                        content: <GeneralInformationTab variantId={variant.id} />
                    },
                    {
                        key: `${variant.id}/SIZES`,
                        name: "Size positions",
                        content: <SizesPositionTab variantId={variant.id} />
                    }
                ],
                content: null
            })),
            { key: "ADD_VARIANT", name: "Add Variant", children: [], content: <VariantAddTab productId={id} /> }
        ],
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
