import { FC, memo, ReactNode, useMemo, useState } from "react";
import { find, map, forEach } from "lodash";
//
import css from "./style.module.scss";

type TabBase = {
    key: string;
    name: string;
    content: ReactNode | null;
};

export type SubTab = TabBase;

export type Tab = TabBase & { children: SubTab[] };

const getDefaultTabKey = (tabs: Tab[]): string => {
    const firstTab = tabs[0];

    if (!!firstTab.children.length) {
        return firstTab.children[0].key;
    }
    return firstTab.key;
};

const findActiveTab = (tabs: Tab[], activeTabKey: string): Tab | SubTab | undefined => {
    let activeTab = undefined;

    forEach(tabs, tab => {
        if (tab.key === activeTabKey) {
            activeTab = tab;
            return;
        }

        const subTab = find(tab.children, ["key", activeTabKey]);
        if (!!subTab) {
            activeTab = subTab;
            return;
        }
    });

    return activeTab;
};

type Props = {
    tabs: Tab[];
};

const TabLayout: FC<Props> = ({ tabs }) => {
    const [activeTabKey, setActiveTabKey] = useState(getDefaultTabKey(tabs));

    const activeTab = useMemo(() => findActiveTab(tabs, activeTabKey), [activeTabKey, tabs]);

    const createHandleTabClick = (key: string) => () => setActiveTabKey(key);

    return (
        <div className={css["TabLayout"]}>
            <div className={css["TabLayout__sidebar"]}>
                {map(tabs, tab => (
                    <div className={css["TabLayout__sidebar__item"]}>
                        <span
                            className={css["TabLayout__sidebar__item__title"]}
                            onClick={createHandleTabClick(tab.key)}
                        >
                            {tab.name}
                        </span>
                        {map(tab.children, subTab => (
                            <div className={css["TabLayout__sidebar__item"]}>
                                <span
                                    className={css["TabLayout__sidebar__item__title"]}
                                    onClick={createHandleTabClick(subTab.key)}
                                >
                                    {subTab.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {!!activeTab && <div className={css["TabLayout__content"]}>{activeTab.content}</div>}
        </div>
    );
};

export default memo(TabLayout);
