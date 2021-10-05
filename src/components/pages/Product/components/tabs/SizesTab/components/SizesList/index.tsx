import { FC, memo, useEffect, useState } from "react";
import { map, get } from "lodash";
import { ReactSortable } from "react-sortablejs";
import { useDispatch, useSelector } from "react-redux";
//
import SizesListItem from "components/pages/Product/components/tabs/SizesTab/components/SizesList/components/SizesListItem";
import variantSelectors from "redux/variant/selectors";
import { VariantActions } from "../../../../../../../../redux/variant/slice";
import { SizeListItem } from "../../index";

type Props = {
    variantId: number;
    isEditMode: boolean;
    items: SizeListItem[];
    setItems: (items: SizeListItem[]) => void;
};

const SizesList: FC<Props> = ({ variantId, isEditMode, items, setItems }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes = get(variant, "sizes", []);
    const sizeIds = map(sizes, "id");

    /*const methods = useForm({
        defaultValues: { items },
        context: items
    });
    const { control, setValue } = methods;
    const { fields } = useFieldArray({ control, name: "items" });
*/

    /*useEffect(() => {
        setValue("items", items);
    }, [items]);

    console.log(fields);*/

    useEffect(
        () =>
            setItems(
                map(sizeIds, id => ({
                    id
                }))
            ),
        [variantId]
    );

    const sizesList = map(items || [], ({ id }, index) => (
        <SizesListItem key={id} sizeId={id} isEditMode={isEditMode} index={index} />
    ));

    if (isEditMode) {
        return <>{sizesList}</>;
    }

    return (
        <ReactSortable list={items} setList={setItems}>
            {sizesList}
        </ReactSortable>
    );
};

export default memo(SizesList);
