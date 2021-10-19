import { FC, memo } from "react";
import { map, sortBy } from "lodash";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
//
import variantSelectors from "redux/variant/selectors";
import { VariantSize } from "redux/variant/types";
import SizesListItem from "components/pages/Product/components/tabs/SizesEditTab/components/SizesList/components/SizesListItem";
import { TextField } from "@material-ui/core";

type Props = {
    variantId: number;
};

const SizesList: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const sizes: VariantSize[] = sortBy(variant?.sizes || [], "position");

    const items = map(sizes, ({ id, quantity, measurement }) => ({ id, quantity, measurement }));

    const methods = useForm({
        defaultValues: { items },
        context: items
    });

    const { fields } = useFieldArray({ control: methods.control, name: "items" });

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
