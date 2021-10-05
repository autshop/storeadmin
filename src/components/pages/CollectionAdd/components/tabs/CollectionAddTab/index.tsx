import { FC, memo } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//
import { NewCollectionFormTypes } from "utils/forms/types";
import { CollectionActions } from "redux/collection/slice";

const CollectionAddTab: FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<NewCollectionFormTypes>();
    const { push: historyPush } = useHistory();

    const handleFormSubmit = (formData: NewCollectionFormTypes) =>
        dispatch(CollectionActions.createCollectionRequest({ data: formData, historyPush }));

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
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

export default memo(CollectionAddTab);
