import React, { forwardRef, LegacyRef } from 'react';
import './styles.css';


type MenuSeparatorProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>



const MenuSeparator = forwardRef<HTMLHRElement, MenuSeparatorProps>((props: MenuSeparatorProps, ref: LegacyRef<HTMLHRElement>) => {
    return (
        <div className="menu-separator" ref={ref} {...props}>
        </div>
    )
});

export default MenuSeparator;