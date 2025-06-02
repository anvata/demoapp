import { MenuGroup } from "./menu-group";
import { MenuLink } from "./menu-link";
import type { NavMenuItem } from "./types";

export const renderMenuItems = (items: NavMenuItem[], level: number, isCollapsed: boolean) => {
    return items.map(c => c.children ? renderMenuGroup(c, level + 1, isCollapsed) : renderMenuItem(c))
}
export const renderMenuItem = (item: NavMenuItem) => {
    const { icon, label, ...rest } = item;

    return <MenuLink icon={icon} {...rest}>{label}</MenuLink>
}

export const renderMenuGroup = (item: NavMenuItem, level: number, isCollapsed: boolean) => {
    const { icon, children, label } = item;
    return (
        <>
            <MenuGroup isCollapsed={isCollapsed} menuItem={item} level={level} />
        </>
    )
}
