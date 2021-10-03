import { FC, memo, ReactNode } from "react";
//
//
import css from "./style.module.scss";

type Props = {
    children: ReactNode;
};

const MainContent: FC<Props> = ({ children }) => <div className={css["MainContent"]}>{children}</div>;

export default memo(MainContent);
