import { FC, memo } from "react";
import { useParams } from "react-router-dom";
//
import VariantList from "components/pages/Collection/components/VariantList";
import PageLayout from "components/common/layout/PageLayout";
//
import css from "./style.module.scss";
import VariantAddButton from "./components/VariantAddButton";

const Collection: FC = () => {
    const { id: idParamAsString } = useParams<{ id?: string }>();
    const id = Number(idParamAsString);

    return (
        <PageLayout title="Collection">
            <div className={css["Collection"]}>
                <div className={css["Collection__list-header"]}>
                    <div className={css["Collection__list-header__variant-id"]}>
                        <span>Variant Id</span>
                    </div>
                    <div className={css["Collection__list-header__variant-name"]}>
                        <span>Variant Name</span>
                    </div>
                </div>
                <div className={css["Collection__list-wrapper"]}>
                    <VariantList collectionId={id} />
                </div>
                <VariantAddButton collectionId={id} />
            </div>
        </PageLayout>
    );
};

export default memo(Collection);
