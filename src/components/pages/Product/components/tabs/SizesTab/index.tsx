import { FC, memo, useState } from "react";
//
import SizesList from "components/pages/Product/components/tabs/SizesTab/components/SizesList";
import { Button } from "@material-ui/core";

type Props = {
    variantId: number;
};

const SizesTab: FC<Props> = ({ variantId }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditButtonClick = () => setIsEditMode(!isEditMode);

    return (
        <>
            <Button
                variant="contained"
                color={isEditMode ? "default" : "primary"}
                style={{ marginBottom: "16px" }}
                onClick={handleEditButtonClick}
            >
                Edit values
            </Button>
            <SizesList variantId={variantId} isEditMode={isEditMode} />
        </>
    );
};

export default memo(SizesTab);
