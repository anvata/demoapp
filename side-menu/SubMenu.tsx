import { LegacyRef, ReactNode, forwardRef, useState } from 'react';
import './styles.css';

type MenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
    children: ReactNode;
    header: ReactNode;
    defaultExpanded?: boolean;
}



const SubMenu = forwardRef<HTMLUListElement, MenuProps>((props: MenuProps, ref: LegacyRef<HTMLUListElement>) => {
    const { children, header, style, className, defaultExpanded, ...rest } = props;
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    return (
        <li style={style} className="sub-menu">
            <div className='sub-menu-header' onClick={() => setIsExpanded(!isExpanded)}>{header}
                <span>{isExpanded ? "➖" : "➕"}</span>
            </div>
            {isExpanded && (
                <ul ref={ref} {...rest} className={`menu ${className ?? null}`}>
                    {children}
                </ul>
            )
            }
        </li>
    )
});

export default SubMenu;