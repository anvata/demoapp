import React, { useContext } from 'react';
import { useMenuLinkStyles } from './styles';
import { mergeClasses } from '@fluentui/react-components';
import { NavMenuContext } from '../nav-menu-context';
import type { MenuLinkProps, NavMenuState } from '../types';

export const MenuLink = React.forwardRef<HTMLAnchorElement, MenuLinkProps>(({ icon, children, className, menuKey, ...rest }, ref) => {
    const classes = useMenuLinkStyles();
    const navMenuState = useContext<NavMenuState>(NavMenuContext);
    return (
        <li key={menuKey} className={mergeClasses(classes.root, className)}>
            <a
                key={menuKey}
                ref={ref}
                onClick={() => navMenuState?.onSelect?.(menuKey)}
                className={mergeClasses(classes.grid, !!navMenuState.selectedKey && navMenuState.isMenuItemSelected(menuKey) && classes.selected)}
                {...rest}
                target='_blank'
            >
                <span className={classes.icon}>{icon}</span>

                <span className={classes.label}></span>{children}
            </a >
        </li>
    )
});
