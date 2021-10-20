import { FC, memo, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
//
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import StorefrontPropertiesTab from "components/pages/StorefrontProperties/components/tabs/StorefrontPropertiesTab";
import { StorefrontPropertyActions } from "redux/storefrontProperty/slice";
//

const StorefrontProperties: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StorefrontPropertyActions.loadStorefrontPropertyRequest());
    }, [dispatch]);

    const storefrontPropertiesTabs: Tab[] = useMemo(
        () => [
            {
                key: `STOREFRONT_PROPERTIES`,
                name: "Storefront Properties",
                children: [],
                content: <StorefrontPropertiesTab />
            }
        ],
        []
    );

    return (
        <PageLayout title={`Storefront Properties`} backHref="/">
            <TabLayout tabs={storefrontPropertiesTabs} />
        </PageLayout>
    );
};

export default memo(StorefrontProperties);
