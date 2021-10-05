import { FC, memo } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//
import { NewProductFormTypes } from "utils/forms/types";
import { ProductActions } from "redux/product/slice";

const ProductAddTab: FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<NewProductFormTypes>();
    const { push: historyPush } = useHistory();

    const handleFormSubmit = (formData: NewProductFormTypes) =>
        dispatch(ProductActions.createProductRequest({ data: formData, historyPush }));

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextField id="name" name="name" label="Name" inputRef={register} required={true} />
                <div style={{ paddingTop: "16px" }}>
                    <Button type="submit" variant="contained" color="primary">
                        <b>CREATE</b>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default memo(ProductAddTab);
