import { FC, memo } from "react";
import SizesList from "./components/SizesList";

type Props = {
    variantId: number;
};

const SizesTab: FC<Props> = ({ variantId }) => <SizesList variantId={variantId} />;

export default memo(SizesTab);
