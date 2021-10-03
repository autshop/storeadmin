import { FC, memo, ReactNode } from "react";
//
//
import css from "./style.module.scss";

type Props = {
    children: ReactNode;
    title?: string;
};

const MainContent: FC<Props> = ({ children, title = "" }) => (
    <div className={css["MainContent"]}>
        <div className={css["MainContent__title"]}>
            <span>{title}</span>
        </div>
        <div className={css["MainContent__container"]}>{children}</div>
    </div>
);

export default memo(MainContent);
