import { FC, memo, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { noop } from "lodash";
//
//
import css from "./style.module.scss";

type Props = {
    children: ReactNode;
    title?: string;
    backHref?: string;
};

const MainContent: FC<Props> = ({ children, title = "", backHref }) => {
    const history = useHistory();
    const handleBackClick = () => (!!backHref ? history.push(backHref) : noop);

    return (
        <div className={css["MainContent"]}>
            <div className={css["MainContent__title"]}>
                {!!backHref && (
                    <>
                        <span onClick={handleBackClick} className={css["MainContent__title__back-button"]}>
                            &#60;
                        </span>{" "}
                    </>
                )}
                <span>{title}</span>
            </div>
            <div className={css["MainContent__container"]}>{children}</div>
        </div>
    );
};

export default memo(MainContent);
