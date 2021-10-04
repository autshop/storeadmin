import { FC, memo } from "react";
//
import CollectionList from "components/pages/Collections/components/CollectionList";
import PageLayout from "components/common/layout/PageLayout";
//
import css from "./style.module.scss";

const Collections: FC = () => (
    <PageLayout title="Collections">
        <div className={css["Collections"]}>
            <div className={css["Collections__list-header"]}>
                <div className={css["Collections__list-header__collection-number"]}>
                    <span>Collection Number</span>
                </div>
                <div className={css["Collections__list-header__variant-count"]}>
                    <span>Variant Count</span>
                </div>
            </div>
            <div className={css["Collections__list-wrapper"]}>
                <CollectionList />
            </div>
        </div>
    </PageLayout>
);

export default memo(Collections);
