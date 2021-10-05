import { FC, memo } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
//
import CollectionList from "components/pages/Collections/components/CollectionList";
import PageLayout from "components/common/layout/PageLayout";
//
import css from "./style.module.scss";

const Collections: FC = () => {
    const history = useHistory();

    const handleNewVariantClick = () => history.push("/collections/add");

    return (
        <PageLayout title="Collections">
            <div className={css["Collections"]}>
                <div className={css["Collections__list-header"]}>
                    <div className={css["Collections__list-header__collection-name"]}>
                        <span>Collection Name</span>
                    </div>
                    <div className={css["Collections__list-header__variant-count"]}>
                        <span>Variant Count</span>
                    </div>
                </div>
                <div className={css["Collections__list-wrapper"]}>
                    <CollectionList />
                </div>

                <Button variant="contained" color="primary" onClick={handleNewVariantClick}>
                    Add collection
                </Button>
            </div>
        </PageLayout>
    );
};

export default memo(Collections);
