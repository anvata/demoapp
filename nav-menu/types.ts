import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type NavMenuKey = string | number;

export type MenuLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon: ReactNode,
    menuKey: NavMenuKey,
};

export type NavMenuProps = HTMLAttributes<HTMLDivElement> &
{
    menuItems: NavMenuItem[];
    isCollapsed: boolean;
    onSelectMenuItem?: (key: NavMenuKey) => void;
}

export type NavMeenuGroupProps =
    {
        menuItem: NavMenuItem;
        level: number,
        isCollapsed: boolean,
    }


export type NavMenuItem = {
    icon: ReactNode,
    menuKey: NavMenuKey,
    label: ReactNode,
    className?: string,
    style?: React.CSSProperties | undefined
    children?: NavMenuItem[],
    href?: string,
};


export interface NavMenuState {
    selectedKey?: string | number;
    menuItems: NavMenuItem[];
    onSelect?: (key: NavMenuKey) => void;
    isMenuItemSelected: (key: NavMenuKey) => boolean;
}
