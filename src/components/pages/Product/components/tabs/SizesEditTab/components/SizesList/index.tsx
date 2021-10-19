import { FC, memo, useEffect } from "react";
import { map, sortBy } from "lodash";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
//
import variantSelectors from "redux/variant/selectors";
import { VariantSize } from "redux/variant/types";
import SizesListItem from "components/pages/Product/components/tabs/SizesEditTab/components/SizesList/components/SizesListItem";

type Props = {
    variantId: number;
    setFieldValues: (values: VariantSize[]) => void;
};

const SizesList: FC<Props> = ({ variantId, setFieldValues }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes: VariantSize[] = sortBy(variant?.sizes || [], "position");

    const items = map(sizes, ({ id, quantity, measurement, position }) => ({ id, quantity, measurement, position }));

    const methods = useForm({
        defaultValues: { items },
        context: items
    });

    const { fields } = useFieldArray({ control: methods.control, name: "items" });

    const fieldsValues = methods.watch("items");
    useEffect(() => {
        console.log(fieldsValues);
        setFieldValues(fieldsValues);
    }, [fieldsValues, setFieldValues]);

    return (
        <FormProvider {...methods}>
            <form>
                {map(fields, (field, index) => (
                    <SizesListItem index={index} key={index} />
                ))}
            </form>
        </FormProvider>
    );
};
export default memo(SizesList);
