import React, { forwardRef, Key, LegacyRef, ReactNode, useContext } from 'react';
import './styles.css';
import { SelectionManagerContext, SelectionManager } from '../utils/selection-manger';

type MenuItemSlots = {
    icon?: ReactNode;
}

type MenuItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLLIElement> & MenuItemSlots & {
    children: ReactNode;
    itemKey: Key;
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props: MenuItemProps, ref: LegacyRef<HTMLLIElement>) => {
    const { children, className, itemKey, icon, ...rest } = props;
    const menuSelector = useContext<SelectionManager | undefined>(SelectionManagerContext);
    const isSelected = menuSelector?.selectedItem && itemKey && menuSelector?.selectedItem === itemKey;
    return (
        <li onClick={() => {
            menuSelector?.selectItem(itemKey);
            console.log('INSIDE')
        }}
            ref={ref} {...rest}
            className={`menu_item ${className && className} ${isSelected && 'selected'} `}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <span className='menu-icon'>{icon}</span>
                {children}
            </div>
        </li>
    )
});

export default MenuItem;