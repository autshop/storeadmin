import { FC, memo, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { get } from "lodash";
//
import { StorefrontPropertiesFormTypes } from "utils/forms/types";
import { StorefrontPropertyActions } from "redux/storefrontProperty/slice";
import storefrontPropertySelectors from "redux/storefrontProperty/selectors";

const StorefrontPropertiesTab: FC = () => {
    const storefrontPropertyNavBarHeader = useSelector(
        storefrontPropertySelectors.createGetStorefrontPropertyByKey("site.nav-bar.header")
    );
    const storefrontPropertySiteBackground = useSelector(
        storefrontPropertySelectors.createGetStorefrontPropertyByKey("site.background.color")
    );

    const storefrontPropertiesIsLoading = useSelector(storefrontPropertySelectors.getStorefrontPropertiesIsLoading);

    const dispatch = useDispatch();
    const { register, handleSubmit, setValue } = useForm<StorefrontPropertiesFormTypes>();

    const handleFormSubmit = (formData: StorefrontPropertiesFormTypes) =>
        dispatch(StorefrontPropertyActions.updateStorefrontPropertyRequest({ data: formData }));

    useEffect(() => {
        if (!storefrontPropertiesIsLoading) {
            setValue("siteNavBarHeader", storefrontPropertyNavBarHeader?.value || "");
            setValue("siteBackgroundColor", storefrontPropertySiteBackground?.value || "");
        }
    }, [storefrontPropertiesIsLoading]);

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="siteNavBarHeader">Navigation Header</label>
                    <br />
                    <TextField
                        id="siteNavBarHeader"
                        name="siteNavBarHeader"
                        placeholder="Navigation Header"
                        inputRef={register}
                        required={true}
                        style={{ marginBottom: "16px" }}
                    />
                </div>
                <div>
                    <label htmlFor="siteBackgroundColor">Site Background Color</label>
                    <br />
                    <TextField
                        id="siteBackgroundColor"
                        name="siteBackgroundColor"
                        inputRef={register}
                        required={true}
                    />
                </div>
                <div style={{ paddingTop: "16px" }}>
                    <Button type="submit" variant="contained" color="primary">
                        <b>SAVE</b>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default memo(StorefrontPropertiesTab);
