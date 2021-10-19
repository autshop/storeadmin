import { FC, memo, useEffect, useState } from "react";
import { get, map, sortBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";
//
import SizesList from "components/pages/Product/components/tabs/SizesPositionTab/components/SizesList";
import { Button } from "@material-ui/core";
import { VariantActions } from "redux/variant/slice";
import variantSelectors from "redux/variant/selectors";

export type SizeListItem = {
    id: number;
};

type Props = {
    variantId: number;
};

const SizesPositionTab: FC<Props> = ({ variantId }) => {
    const [items, setItems] = useState<SizeListItem[]>([]);

    const dispatch = useDispatch();
    const handleSaveVariantSizePositions = () =>
        dispatch(VariantActions.updateVariantSizePositionsRequest({ variantId, sizeIds: map(items, "id") }));

    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes = get(variant, "sizes", []);
    const sortedSizes = sortBy(sizes, "position");
    const sizeIds = map(sortedSizes, "id");

    useEffect(
        () =>
            setItems(
                map(sizeIds, id => ({
                    id
                }))
            ),
        [variantId]
    );

    return (
        <>
            <Button
                variant="contained"
                color={"primary"}
                style={{ marginBottom: "16px" }}
                onClick={handleSaveVariantSizePositions}
            >
                Save Positions
            </Button>
            <SizesList variantId={variantId} items={items} setItems={setItems} />
        </>
    );
};

export default memo(SizesPositionTab);
