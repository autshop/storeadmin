import { ChangeEvent, ChangeEventHandler, FC, memo, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { get, map } from "lodash";
//
import variantSelectors from "redux/variant/selectors";
import { VariantActions } from "redux/variant/slice";
//
import css from "./style.module.scss";

type Props = {
    variantId: number;
};

const GeneralInformationTab: FC<Props> = ({ variantId }) => {
    const variant = useSelector(variantSelectors.createGetVariantById(variantId));

    const dispatch = useDispatch();

    const handleFileInputSelectedFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = get(e, "target.files[0]", null);

        if (!file) {
            return null;
        }

        dispatch(VariantActions.uploadVariantImageRequest({ file, variantId }));
    };

    const handleVariantAvailabilityChange = () => {
        dispatch(VariantActions.updateVariantAvailabilityRequest({ enabled: !variant?.enabled, variantId }));
    };

    if (!variant) {
        return null;
    }

    return (
        <div className={css["GeneralInformationTab"]}>
            <div>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={variant.name}
                    disabled
                    style={{ marginBottom: "16px" }}
                />
            </div>
            <div>
                <TextField
                    id="description"
                    name="description"
                    label="Description"
                    value={variant.description}
                    disabled
                    style={{ marginBottom: "16px" }}
                />
            </div>
            <div>
                <TextField
                    id="price"
                    name="price"
                    label="Price"
                    value={variant.price}
                    disabled
                    style={{ marginBottom: "16px" }}
                />
            </div>
            <div>
                <p>
                    Storefront status:{" "}
                    <b>
                        <span>{variant.enabled ? "Enabled" : "Disabled"}</span>
                    </b>
                </p>
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    color={variant.enabled ? "default" : "primary"}
                    onClick={handleVariantAvailabilityChange}
                >
                    <b>{!variant.enabled ? "ENABLE" : "DISABLE"}</b>
                </Button>
            </div>
            <div className={css["GeneralInformationTab__image-upload"]}>
                <input type="file" name="file" onChange={handleFileInputSelectedFileChange} />
            </div>
            {/*TODO components*/}
            <div className={css["GeneralInformationTab__image-list"]}>
                {map(variant.images || [], ({ id, src }) => (
                    <div key={id} className={css["GeneralInformationTab__image-list__item"]}>
                        <img src={src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(GeneralInformationTab);
