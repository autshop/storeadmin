import { FC, memo, ReactNode, useMemo, useState } from "react";
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

    const defaultSizeList: SizeListItem[] = useMemo(
        () =>
            map(sizes, ({ id, measurement, quantity }) => ({
                id,
                measurement,
                quantity
            })),
        [variant?.sizes, variantId]
    );

    const [draftSizeList, setDraftSizeList] = useState(defaultSizeList);

    const createSortableWrapper = (children: ReactNode) =>
        isEditMode ? (
            <>{children}</>
        ) : (
            <ReactSortable list={draftSizeList} setList={setDraftSizeList}>
                {children}
            </ReactSortable>
        );

    return createSortableWrapper(
        <>
            {map(draftSizeList || [], ({ id }) => (
                <SizesListItem sizeId={id} isEditMode={isEditMode} />
            ))}
        </>
    );
};

export default memo(SizesList);
