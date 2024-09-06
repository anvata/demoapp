import { LegacyRef, ReactNode, forwardRef } from 'react';
import './styles.css';

type MenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
    children: ReactNode;
}



const Menu = forwardRef<HTMLUListElement, MenuProps>((props: MenuProps, ref: LegacyRef<HTMLUListElement>) => {
    const { children, className, ...rest } = props;
    return (
        <ul ref={ref} {...rest} className={`menu ${className ?? null}`}>
            {children}
        </ul>
    )
});

export default Menu;