import { FC, memo } from "react";
//
//
import css from "./style.module.scss";

type Props = {
    variantId: number;
};

const VariantListItem: FC<Props> = ({ variantId }) => {
    //TODO SELECT VARIANT

    return (
        <div className={css["VariantListItem"]}>
            <div className={css["VariantListItem__content"]}>
                <div className={css["VariantListItem__content__image"]}>
                    <img
                        src="https://s13emagst.akamaized.net/products/26996/26995983/images/res_243c0956dd30efcfc06377e897453e78.jpg"
                        alt=""
                    />
                </div>
                <div className={css["VariantListItem__content__details"]}>
                    <p>Title</p>
                    <p>Description</p>
                    <p>
                        Size <b>OS</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(VariantListItem);
