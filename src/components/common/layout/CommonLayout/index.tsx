import { FC, memo } from "react";
//
import Sidebar from "components/common/layout/CommonLayout/components/Sidebar";
import MainContent from "components/common/layout/CommonLayout/components/MainContent";
//
import css from "./style.module.scss";

const CommonLayout: FC = () => (
    <div className={css["CommonLayout"]}>
        <Sidebar />
        <MainContent />
    </div>
);

export default memo(CommonLayout);
