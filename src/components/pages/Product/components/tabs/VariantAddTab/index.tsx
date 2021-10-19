import { FC, memo } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//
import { NewVariantFormTypes } from "utils/forms/types";
import { VariantActions } from "redux/variant/slice";

type Props = {
    productId: number;
};

const VariantAddTab: FC<Props> = ({ productId }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<NewVariantFormTypes>();
    const { push: historyPush } = useHistory();

    const handleLoginSubmit = (formData: NewVariantFormTypes) =>
        dispatch(VariantActions.createVariantRequest({ data: formData, historyPush, productId }));

    return (
        <div>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
                <div>
                    <TextField id="name" name="name" label="Name" inputRef={register} required={true} />
                </div>
                <div>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        inputRef={register}
                        required={true}
                    />
                </div>
                <div style={{ paddingTop: "16px" }}>
                    <Button type="submit" variant="contained" color="primary">
                        <b>CREATE</b>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default memo(VariantAddTab);
