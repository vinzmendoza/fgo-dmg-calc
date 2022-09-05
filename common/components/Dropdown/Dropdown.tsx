import React, { useEffect, useRef, useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";

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
          <Tooltip>{tooltip}</Tooltip>
        </label>
        <button
          aria-label="toggle menu"
          className={`flex items-center justify-between p-2 mb-1 bg-white border rounded focus:outline focus:outline-2 ${
            isOpen && "outline outline-2"
          }`}
          type="button"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem.name : placeholder}</span>
          <span className="px-2">
            {isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
          </span>
        </button>
      </div>
      <ul
        {...getMenuProps()}
        className={`${
          !isOpen && "hidden"
        } absolute mt-2 overflow-y-auto border rounded bg-neutral-50 max-h-64 w-full shadow-lg z-50 ${
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
                "bg-blue-100 "
              }
              ${
                selectedItem === item && "bg-blue-300 "
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
