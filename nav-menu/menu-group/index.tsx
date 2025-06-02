import React, { useContext, useState } from 'react';
import type { NavMeenuGroupProps, NavMenuState } from '../types';
import { useMenuGroupStyles } from './styles';
import { renderMenuItems } from '../render-helper';
import { ChevronDownRegular } from '@fluentui/react-icons'
import { Divider, mergeClasses, Popover, PopoverSurface, PopoverTrigger } from '@fluentui/react-components';
import { NavMenuContext } from '../nav-menu-context';

function MenuGroup({ menuItem, level, isCollapsed }: NavMeenuGroupProps) {
    const classes = useMenuGroupStyles();
    const [isSubMenuCollapsed, setIsCollapsed] = useState(false);
    const navMenuState = useContext<NavMenuState>(NavMenuContext);

    const { icon, label, children, menuKey } = menuItem;
    const subMenuClases = mergeClasses(isSubMenuCollapsed && classes.collapsed);
    if (isCollapsed && level === 1) {
        return (
            <Popover openOnHover trapFocus positioning={{ position: 'after' }}>
                <PopoverTrigger disableButtonEnhancement>
                    <div
                        className={mergeClasses(classes.menuHeaderWrapper, !!navMenuState.selectedKey && navMenuState.isMenuItemSelected(menuKey) && classes.selected)}
                        role="button"
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        <span className={classes.icon}>{icon}</span>
                        {!isCollapsed && (<div className={classes.menuHeader}>
                            <span>{label}</span>
                            <span><ChevronDownRegular /></span>
                        </div>)
                        }
                    </div>
                </PopoverTrigger>

                <PopoverSurface className={classes.popupContent}>
                    <div>
                        <div className={classes.menuHeaderWrapper} role="button" onClick={() => setIsCollapsed(!isCollapsed)}>
                            <span className={classes.icon}>{icon}</span>
                            <div className={classes.menuHeader}>
                                <span>{label}</span>
                            </div>
                        </div>
                        <Divider />
                        <ul className={subMenuClases} style={{ paddingLeft: `${10 * level}px` }}>
                            {children && renderMenuItems(children, level + 1, isCollapsed)}
                        </ul>
                    </div>
                </PopoverSurface>
            </Popover>
        );
    }
    return (
        <div className={classes.root}>
            <div
                className={mergeClasses(classes.menuHeaderWrapper, !!navMenuState.selectedKey && navMenuState.isMenuItemSelected(menuKey) && classes.selected)}
                role="button"
                onClick={() => setIsCollapsed(!isSubMenuCollapsed)}>
                <span className={classes.icon}>{icon}</span>
                <div className={classes.menuHeader}>
                    <span>{label}</span>
                    <span><ChevronDownRegular /></span>
                </div>
            </div>
            <ul className={subMenuClases} style={{ paddingLeft: `${10 * level}px` }}>
                {children && renderMenuItems(children, level + 1, isCollapsed)}
            </ul>
        </div>
    )
}

export { MenuGroup };