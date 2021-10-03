import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import productSelectors from "redux/product/selectors";
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
//

const ProductTabs: Tab[] = [
    {
        key: "Variant1",
        name: "Variant1",
        children: [{ key: "Variant1/GENERAL", name: "General Information", content: <p>Hey</p> }],
        content: null
    }
];

const Product: FC = () => {
    const { id: idParamAsString } = useParams<{ id?: string }>();
    const id = Number(idParamAsString);

    const product = useSelector(productSelectors.createGetProductById(id));

    if (!id || !product) {
        return null;
    }

    return (
        <PageLayout title={`Product ${product.name}`} backHref="/">
            <TabLayout tabs={ProductTabs} />
        </PageLayout>
    );
};

export default memo(Product);
