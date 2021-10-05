import { FC, memo, useMemo } from "react";
//
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import ProductAddTab from "components/pages/ProductAdd/components/tabs/ProductAddTab";
//

const ProductAdd: FC = () => {
    const productAddTabs: Tab[] = useMemo(
        () => [
            {
                key: `PRODUCT_ADD`,
                name: "Product Add",
                children: [],
                content: <ProductAddTab />
            }
        ],
        []
    );

    return (
        <PageLayout title={`Product Add`} backHref="/">
            <TabLayout tabs={productAddTabs} />
        </PageLayout>
    );
};

export default memo(ProductAdd);
