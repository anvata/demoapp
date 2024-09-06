import { Key, LegacyRef, ReactNode, forwardRef } from 'react';
import './styles.css';
import { SelectionManagerContext, useSelection } from '../utils/selection-manger';

type SideBarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    children: ReactNode;
    defaulSelectedKey: Key;
    selectionChange?: (itemKey: Key | undefined | null) => void;
}



const SideBar = forwardRef<HTMLElement, SideBarProps>((props: SideBarProps, ref: LegacyRef<HTMLElement>) => {
    const { children, className, defaulSelectedKey, selectionChange, ...rest } = props;
    const onselectionchanged = (selectedItem?: Key | undefined | null) => {
        selectionChange?.(selectedItem);
    }

    const selectionContext = useSelection(defaulSelectedKey, onselectionchanged);
    return (
        <SelectionManagerContext.Provider value={selectionContext}>
            <nav ref={ref} {...rest} className={`side_bar ${className ?? null}`}>
                {children}
            </nav>
        </SelectionManagerContext.Provider>
    )
});

export default SideBar;