import React, { useEffect, useRef, useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { enemyClass, enemyAttribute } from "../../utils/interface";
import useDropdown from "../../hooks/useDropdown";
import { Tooltip } from "../Tooltip";

type ComponentProps = {
  data: enemyClass[] | enemyAttribute[];
  type: string;
  label: string;
  placeholder: string;
  value: string;
  isReset: boolean;
  onChange: (e: enemyClass | enemyAttribute | undefined | null) => void;
  setIsReset: (val: boolean) => void;
  tooltip: string | JSX.Element;
};

const Dropdown = ({
  data,
  type,
  label,
  placeholder,
  onChange,
  isReset,
  setIsReset,
  tooltip,
}: ComponentProps) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useDropdown(data, type, onChange);

  useEffect(() => {
    if (isReset) reset();
    setIsReset(false);
  }, [isReset, reset, setIsReset]);

  const dropdownRef = useRef(null);

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <label {...getLabelProps()} className="flex items-center gap-x-1">
          {label}
          <Tooltip ariaLabel={`dropdown-${type}`}>{tooltip}</Tooltip>
        </label>
        <button
          aria-label={`toggle-menu-${type}`}
          className={`flex items-center justify-between bg-white p-2 mb-1 border rounded focus:outline-none focus:ring-2 focus:transition focus:ease-in focus:duration-200 dark:bg-zinc-900/80 ${
            isOpen
              ? "ring-2 ring-blue-500 border-transparent dark:border-transparent transition ease-in duration-200"
              : "focus:ring-blue-500 focus:border-transparent dark:border-zinc-600 dark:focus:border-transparent"
          }`}
          type="button"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem.name : placeholder}</span>
          <span className="px-2">
            <CaretDownIcon
              className={`transition ease-in-out duration-200 ${
                isOpen && "rotate-180"
              }`}
            />
          </span>
        </button>
      </div>
      <ul
        {...getMenuProps()}
        className={`${
          !isOpen && "hidden"
        } absolute mt-2 overflow-y-auto border rounded bg-zinc-50 max-h-64 w-full shadow-lg z-50 dark:bg-zinc-700 dark:border-transparent ${
          isOpen && "outline-none"
        } `}
      >
        {isOpen &&
          data.map((item, index) => (
            <li
              className={`
              ${
                highlightedIndex === index &&
                selectedItem !== item &&
                "bg-blue-100 dark:bg-zinc-600"
              }
              ${
                selectedItem === item && "bg-blue-500 text-zinc-100 font-bold"
              } py-2 px-2 cursor-pointer
             `}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
      <div className="h-4"></div>
    </div>
  );
};

export default Dropdown;
