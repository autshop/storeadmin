import { FC, memo } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//
import { NewProductFormTypes, NewVariantFormTypes } from "utils/forms/types";
import { ProductActions } from "redux/product/slice";
import { VariantActions } from "../../../../../../redux/variant/slice";
import variantSelectors from "../../../../../../redux/variant/selectors";

type Props = {
    variantId: number;
};

const GeneralInformationTab: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    if (!variant) {
        return null;
    }

    return (
        <div>
            <div>
                <TextField id="name" name="name" label="Name" value={variant.name} disabled />
            </div>
            <div>
                <TextField
                    id="description"
                    name="description"
                    label="Description"
                    value={variant.description}
                    disabled
                />
            </div>
        </div>
    );
};

export default memo(GeneralInformationTab);
