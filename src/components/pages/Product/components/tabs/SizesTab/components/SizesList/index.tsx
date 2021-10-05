import { FC, memo, ReactNode, useEffect, useMemo, useState } from "react";
import { map, get } from "lodash";
import { ReactSortable } from "react-sortablejs";
import { useSelector } from "react-redux";
//
import SizesListItem from "components/pages/Product/components/tabs/SizesTab/components/SizesList/components/SizesListItem";
import variantSelectors from "redux/variant/selectors";

type Props = {
    variantId: number;
    isEditMode: boolean;
};

type SizeListItem = {
    id: number;
    measurement: string;
    quantity: number;
};

const SizesList: FC<Props> = ({ variantId, isEditMode }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes = get(variant, "sizes", []);

    const [draftSizeList, setDraftSizeList] = useState<SizeListItem[]>([]);

    useEffect(
        () =>
            setDraftSizeList(
                map(sizes, ({ id, measurement, quantity }) => ({
                    id,
                    measurement,
                    quantity
                }))
            ),
        [variantId, sizes]
    );

    const sizesList = map(draftSizeList || [], ({ id }) => <SizesListItem sizeId={id} isEditMode={isEditMode} />);

    if (isEditMode) {
        return <>{sizesList}</>;
    }

    return (
        <ReactSortable list={draftSizeList} setList={setDraftSizeList}>
            {sizesList}
        </ReactSortable>
    );
};

export default memo(SizesList);
