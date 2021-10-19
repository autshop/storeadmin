import { FC, memo } from "react";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import variantSelectors from "redux/variant/selectors";

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
