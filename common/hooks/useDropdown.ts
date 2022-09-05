import { useSelect } from "downshift";
import { enemyAttribute, enemyClass } from "../utils/interface";

interface dropdownData {
  name: string;
  value: string;
}

function itemToString(item: dropdownData | null) {
  return item ? item.name : "";
}

const useDropdown = (
  data: dropdownData[],
  type: string,
  onChange: (e: enemyClass | enemyAttribute | undefined | null) => void
) => {
  const {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    reset,
  } = useSelect({
    items: data,
    itemToString,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      onChange(newSelectedItem);
    },
    id: type,
  });

  return {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    reset,
  };
};

export default useDropdown;
