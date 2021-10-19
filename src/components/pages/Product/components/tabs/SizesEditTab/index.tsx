import { FC, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
//
import variantSelectors from "redux/variant/selectors";
import SizesList from "components/pages/Product/components/tabs/SizesEditTab/components/SizesList";
import { VariantActions } from "redux/variant/slice";
import { VariantSize } from "../../../../../../redux/variant/types";

export type SizeListItem = {
    id: number;
};

type Props = {
    variantId: number;
};

const SizesEditTab: FC<Props> = ({ variantId }) => {
    const [fieldValues, setFieldValues] = useState<VariantSize[]>([]);

    const isLoading = useSelector(variantSelectors.getIsLoading);

    const dispatch = useDispatch();
    const handleCreateVariantSize = () => dispatch(VariantActions.createVariantSizeRequest({ variantId }));
    const handleUpdateVariantSizes = () =>
        dispatch(VariantActions.updateVariantSizesRequest({ variantId, sizes: fieldValues }));

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
            <Button
                variant="contained"
                color={"primary"}
                style={{ marginBottom: "16px", marginLeft: "16px" }}
                onClick={handleUpdateVariantSizes}
            >
                Save
            </Button>
            <SizesList variantId={variantId} setFieldValues={setFieldValues} />
        </>
    );
};

export default memo(SizesEditTab);
