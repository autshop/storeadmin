import { FC, memo, ReactNode } from "react";
//
import Sidebar from "components/common/layout/PageLayout/components/Sidebar";
import MainContent from "components/common/layout/PageLayout/components/MainContent";
//
import css from "./style.module.scss";

type Props = {
    children: ReactNode;
    title?: string;
    backHref?: string;
};

const PageLayout: FC<Props> = ({ children, title = "", backHref }) => (
    <div className={css["PageLayout"]}>
        <Sidebar />
        <span />
        <MainContent title={title} backHref={backHref}>
            {children}
        </MainContent>
    </div>
);

export default memo(PageLayout);
