import { useDispatch, useSelector } from "react-redux";
import { FC, memo, useState } from "react";
import { filter, map } from "lodash";
import { Button, Popover } from "@material-ui/core";
//
import collectionSelectors from "redux/collection/selectors";
import variantSelectors from "redux/variant/selectors";
//
import css from "./style.module.scss";
import { CollectionActions } from "../../../../../redux/collection/slice";

type Props = {
    collectionId: number;
};

const VariantAddButton: FC<Props> = ({ collectionId }) => {
    const collection = useSelector(collectionSelectors.createGetCollectionById(collectionId));
    const variants = useSelector(variantSelectors.getVariants);

    const dispatch = useDispatch();

    const variantIds = collection?.variantIds || [];
    const filteredVariants = filter(variants, ({ id }) => !variantIds.includes(id));

    const [anchorEl, setAnchorEl] = useState(null);

    const handleToggleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleListItemClick = (variantId: number) => () => {
        dispatch(CollectionActions.addVariantRequest({ variantId }));
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className={css["VariantAddButton"]}>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleToggleClick}>
                Add variant
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
            >
                <div className={css["VariantAddButton__list"]}>
                    {map(filteredVariants, ({ id, name }) => (
                        <div className={css["VariantAddButton__list__item"]} onClick={handleListItemClick(id)}>
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </Popover>
        </div>
    );
};

export default memo(VariantAddButton);
