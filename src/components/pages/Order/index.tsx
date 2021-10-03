import { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import orderSelectors from "redux/order/selectors";
import Variants from "components/pages/Order/components/tabs/Variants";
//

const Order: FC = () => {
    const { id: idParamAsString } = useParams<{ id?: string }>();
    const id = Number(idParamAsString);

    const order = useSelector(orderSelectors.createGetOrderById(id));

    const orderTabs: Tab[] = useMemo(
        () => [
            {
                key: "GENERAL_INFORMATION",
                name: "General Information",
                children: [],
                content: null
            },
            {
                key: "VARIANTS",
                name: "Variants",
                children: [],
                content: <Variants orderId={id} />
            }
        ],
        [id]
    );

    if (!id || !order) {
        return null;
    }

    return (
        <PageLayout title={`Order - #${order.id}`} backHref="/">
            <TabLayout tabs={orderTabs} />
        </PageLayout>
    );
};

export default memo(Order);
