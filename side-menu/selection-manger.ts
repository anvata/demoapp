import { createContext, Key, useContext, useState } from "react"

export type SelectionManager = {
    selectedItem?: Key | undefined | null;
    selectItem: (item: Key | undefined | null) => void;
}


export type MenuSelector = {
    selectedItem?: Key | undefined | null;
    selectItem: (item: Key | undefined | null) => void;
}
export const useSelection = (defaultSelectedItem: Key | undefined, selectionChnaged?: (selectedItem?: Key | undefined | null) => void): MenuSelector => {
    const [selectedItem, setSelectedItem] = useState<Key | undefined | null>(defaultSelectedItem);
    const selectItem = (item: Key | undefined | null) => {
        setSelectedItem(item);
        selectionChnaged?.(item);
    }

    return { selectedItem, selectItem };
}

export const SelectionManagerContext = createContext<SelectionManager | undefined>(undefined);

export const useSelectionMangerContext = () => {
    const context = useContext<SelectionManager | undefined>(SelectionManagerContext);
    return context;
}


