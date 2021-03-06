import { FC, memo, useMemo } from "react";
import { map } from "lodash";
//
//
import css from "./style.module.scss";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

type MenuItem = {
    id: number;
    imgSrc: string;
    href: string;
};

const Sidebar: FC = () => {
    const history = useHistory();
    const menus = useMemo(
        (): MenuItem[] => [
            { id: 0, imgSrc: "https://cdn-icons-png.flaticon.com/512/863/863684.png", href: "/products" },
            { id: 1, imgSrc: "https://cdn-icons-png.flaticon.com/512/743/743131.png", href: "/orders" },
            { id: 2, imgSrc: "https://cdn-icons-png.flaticon.com/512/1150/1150895.png", href: "/collections" },
            { id: 3, imgSrc: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png", href: "/storefrontProperties" }
        ],
        []
    );

    const handleClick = (href: string) => () => history.push(href);

    const isRouteActive = (href: string) => {
        const hrefRoot = href.split("/")[1];
        const pathRoot = history.location.pathname.split("/")[1];

        return hrefRoot === pathRoot;
    };

    return (
        <div className={css["Sidebar"]}>
            <div className={css["Sidebar__menu"]}>
                {map(menus, ({ id, imgSrc, href }, index) => (
                    <div
                        key={index}
                        className={classNames(css["Sidebar__menu__item"], {
                            [css["Sidebar__menu__item-active"]]: isRouteActive(href)
                        })}
                        onClick={handleClick(href)}
                    >
                        <img src={imgSrc} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Sidebar);
