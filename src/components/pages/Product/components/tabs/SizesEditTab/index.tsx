import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
//
import variantSelectors from "redux/variant/selectors";
import SizesList from "components/pages/Product/components/tabs/SizesEditTab/components/SizesList";
import { VariantActions } from "redux/variant/slice";

export type SizeListItem = {
    id: number;
};

type Props = {
    variantId: number;
};

const SizesEditTab: FC<Props> = ({ variantId }) => {
    const isLoading = useSelector(variantSelectors.getIsLoading);

    const dispatch = useDispatch();
    const handleCreateVariantSize = () => dispatch(VariantActions.createVariantSizeRequest({ variantId }));

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Button
                variant="contained"
                color={"primary"}
                style={{ marginBottom: "16px" }}
                onClick={handleCreateVariantSize}
            >
                Add Size
            </Button>
            <SizesList variantId={variantId} />
        </>
    );
};

export default memo(SizesEditTab);
