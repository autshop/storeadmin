import { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import PageLayout from "components/common/layout/PageLayout";
import TabLayout, { Tab } from "components/common/layout/TabLayout";
import orderSelectors from "redux/order/selectors";
import VariantsTab from "components/pages/Order/components/tabs/VariantsTab";
import GeneralInformationTab from "./components/tabs/GeneralInformationTab";
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
                content: <GeneralInformationTab orderId={id} />
            },
            {
                key: "VARIANTS",
                name: "Variants",
                children: [],
                content: <VariantsTab orderId={id} />
            }
        ],
        [id]
    );

    if (!id || !order) {
        return null;
    }

    return (
        <PageLayout title={`Order - #${order.id}`} backHref="/orders">
            <TabLayout tabs={orderTabs} />
        </PageLayout>
    );
};

export default memo(Order);
