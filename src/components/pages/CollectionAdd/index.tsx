import { FC, memo, useMemo } from "react";
//
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import CollectionAddTab from "components/pages/CollectionAdd/components/tabs/CollectionAddTab";
//

const CollectionAdd: FC = () => {
    const collectionAddTabs: Tab[] = useMemo(
        () => [
            {
                key: `Collection_ADD`,
                name: "Collection Add",
                children: [],
                content: <CollectionAddTab />
            }
        ],
        []
    );

    return (
        <PageLayout title={`Collection Add`} backHref="/">
            <TabLayout tabs={collectionAddTabs} />
        </PageLayout>
    );
};

export default memo(CollectionAdd);
