import { FC, memo, useMemo, useState } from "react";
import { map, sortBy } from "lodash";
import { ReactSortable } from "react-sortablejs";
import { useSelector } from "react-redux";
//
import SizesListItem from "components/pages/Product/components/tabs/SizesTab/components/SizesList/components/SizesListItem";
import variantSelectors from "redux/variant/selectors";

type Props = {
    variantId: number;
};

const SizesList: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const defaultSizeList = useMemo(
        () =>
            map(variant?.sizes, ({ id, measurement }) => ({
                id,
                measurement
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
