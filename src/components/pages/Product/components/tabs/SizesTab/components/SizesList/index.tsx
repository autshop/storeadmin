import { FC, memo, useMemo, useState } from "react";
import { map, get } from "lodash";
import { ReactSortable } from "react-sortablejs";
import { useSelector } from "react-redux";
//
import SizesListItem from "components/pages/Product/components/tabs/SizesTab/components/SizesList/components/SizesListItem";
import variantSelectors from "redux/variant/selectors";
import { useFieldArray, useForm } from "react-hook-form";

type Props = {
    variantId: number;
};

type SizeListItem = {
    id: number;
    measurement: string;
    quantity: number;
};

const SizesList: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes = get(variant, "sizes", []);

    const defaultSizeList: SizeListItem[] = useMemo(
        () =>
            map(sizes, ({ id, measurement, quantity }) => ({
                id,
                measurement,
                quantity
            })),
        [variant?.sizes]
    );

    const [draftSizeList, setDraftSizeList] = useState(defaultSizeList);

    return (
        <ReactSortable list={draftSizeList} setList={setDraftSizeList}>
            {map(draftSizeList, ({ id }) => (
                <SizesListItem sizeId={id} />
            ))}
        </ReactSortable>
    );
};

export default memo(SizesList);
