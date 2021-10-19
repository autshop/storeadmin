import { FC, memo } from "react";
import { map } from "lodash";
import { ReactSortable } from "react-sortablejs";
//
import SizesListItem from "components/pages/Product/components/tabs/SizesPositionTab/components/SizesList/components/SizesListItem";
import { SizeListItem } from "components/pages/Product/components/tabs/SizesPositionTab";

type Props = {
    variantId: number;
    items: SizeListItem[];
    setItems: (items: SizeListItem[]) => void;
};

const SizesList: FC<Props> = ({ variantId, items, setItems }) => (
    <ReactSortable list={items} setList={setItems}>
        {map(items || [], ({ id }, index) => (
            <SizesListItem key={id} sizeId={id} index={index} />
        ))}
    </ReactSortable>
);

export default memo(SizesList);
