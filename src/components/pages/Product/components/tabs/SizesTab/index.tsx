import { FC, memo, useState } from "react";
import { map } from "lodash";
//
import SizesList from "components/pages/Product/components/tabs/SizesTab/components/SizesList";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { VariantActions } from "redux/variant/slice";

export type SizeListItem = {
    id: number;
};

type Props = {
    variantId: number;
};

const SizesTab: FC<Props> = ({ variantId }) => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [items, setItems] = useState<SizeListItem[]>([]);

    const handleEditButtonClick = () => setIsEditMode(!isEditMode);
    const handleAddButtonClick = () => dispatch(VariantActions.createVariantSizeRequest({ variantId }));
    const handleSaveVariantSizePositions = () =>
        dispatch(VariantActions.updateVariantSizePositionsRequest({ variantId, sizeIds: map(items, "id") }));

    return (
        <>
            <Button
                variant="contained"
                color={isEditMode ? "default" : "primary"}
                style={{ marginBottom: "16px" }}
                onClick={handleEditButtonClick}
            >
                Edit Values
            </Button>
            <Button
                variant="contained"
                color={isEditMode ? "default" : "primary"}
                style={{ marginBottom: "16px", marginLeft: "16px" }}
                onClick={handleAddButtonClick}
            >
                Add Size
            </Button>
            <Button
                variant="contained"
                color={isEditMode ? "default" : "primary"}
                style={{ marginBottom: "16px", marginLeft: "16px" }}
                onClick={handleSaveVariantSizePositions}
            >
                Save Positions
            </Button>
            <SizesList variantId={variantId} isEditMode={isEditMode} items={items} setItems={setItems} />
        </>
    );
};

export default memo(SizesTab);
