import React, { useState } from 'react';
import { useNavMenuStyles } from './styles';
import { mergeClasses } from '@fluentui/react-components';
import { NavMenuContext } from './nav-menu-context';
import type { NavMenuItem, NavMenuKey, NavMenuProps } from './types';
import { renderMenuItems } from './render-helper';


function findPathInForest(roots: NavMenuItem[], targetId: NavMenuKey): NavMenuItem[] | null {
    for (const root of roots) {
        const path = findPathToNode(root, targetId);
        if (path) return path;
    }
    return null;
}

function findPathToNode(node: NavMenuItem, targetId: NavMenuKey): NavMenuItem[] | null {
    if (node.menuKey === targetId) {
        return [node];
    }

    if (node.children) {
        for (const child of node.children) {
            const childPath = findPathToNode(child, targetId);
            if (childPath) {
                return [node, ...childPath];
            }
        }
    }

    return null;
}


export const NavMenu = React.forwardRef<HTMLDivElement, NavMenuProps>(({ menuItems, className, onSelectMenuItem, isCollapsed, ...rest }, ref) => {
    const [key, setKey] = useState<NavMenuKey | undefined>();
    const classes = useNavMenuStyles();
    const onSelectItem = (key: NavMenuKey) => {
        onSelectMenuItem?.(key);
        setKey(key);
    }
    const isMenuSelected = (navMenuKey: NavMenuKey) => {
        if (key) {
            const selectedItems = findPathInForest(menuItems, key);
            const item = selectedItems?.find(s => s.menuKey === navMenuKey);
            return !!item;
        }
        return false;
    }
    return (
        <NavMenuContext.Provider value={{ selectedKey: key, onSelect: onSelectItem, menuItems, isMenuItemSelected: isMenuSelected }}>
            <nav
                ref={ref}
                className={mergeClasses(classes.root, className, isCollapsed && classes.collapsed)}
                {...rest}
            >
                <ul>
                    {
                        renderMenuItems(menuItems, 0, isCollapsed)
                    }
                </ul>
            </nav>
        </NavMenuContext.Provider>
    )
})

