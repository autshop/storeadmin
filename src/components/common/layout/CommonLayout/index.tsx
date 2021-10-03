import { FC, memo, ReactNode } from "react";
//
import Sidebar from "components/common/layout/CommonLayout/components/Sidebar";
import MainContent from "components/common/layout/CommonLayout/components/MainContent";
//
import css from "./style.module.scss";

type Props = {
    children: ReactNode;
};

const CommonLayout: FC<Props> = ({ children }) => (
    <div className={css["CommonLayout"]}>
        <Sidebar />
        <MainContent>{children}</MainContent>
    </div>
);

export default memo(CommonLayout);
