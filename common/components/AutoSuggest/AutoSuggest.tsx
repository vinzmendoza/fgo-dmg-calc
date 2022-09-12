import { Enemy, Servant } from "@atlasacademy/api-connector";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import useAutoSuggest from "../../hooks/useAutoSuggest";
import { FormValues } from "../../utils/interface";
import { Tooltip } from "../Tooltip";

type AppProps = {
  value: string;
  onChange: (e: string | undefined) => void;
  callback: (e: Servant.Servant | Enemy.Enemy | undefined) => void;
  isReset: boolean;
  setIsReset: (val: boolean) => void;
};

const AutoSuggest = ({
  value,
  onChange,
  callback,
  isReset,
  setIsReset,
}: AppProps) => {
  const {
    error,
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    selectedServant,
    suggestions,
  } = useAutoSuggest(value, onChange, isReset, setIsReset);

  const {
    formState: { errors },
    watch,
  } = useFormContext<FormValues>();

  useEffect(() => {
    callback(selectedServant);
  }, [selectedServant, callback]);

  const servantWatched = watch("servantSelected");

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <label
          className="after:content-['_*'] flex items-center gap-x-1"
          {...getLabelProps()}
        >
          Name
          <Tooltip>
            <>
              Type atleast 2 character combinations
              <br /> to trigger the auto-suggest
              <br /> &#40;ex. &apos;ar&apos;&#x29;
            </>
          </Tooltip>
        </label>
        <div className="" {...getComboboxProps()}>
          <input
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:transition focus:ease-in focus:duration-200 dark:bg-zinc-900/70 dark:focus:bg-zinc-900 ${
              errors.autoSuggest &&
              (servantWatched === undefined || servantWatched === "")
                ? "ring-1 ring-red-500 border-transparent"
                : "focus:ring-blue-500 focus:border-transparent dark:border-zinc-600 dark:focus:border-transparent"
            }`}
            {...getInputProps()}
            placeholder="Search"
          />
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className={`${
          (suggestions === undefined || !isOpen) && "hidden"
        } absolute mt-2 overflow-y-auto border rounded bg-zinc-50 max-h-72 w-full shadow-lg dark:bg-zinc-700 dark:border-transparent`}
      >
        {suggestions?.length === 0 && <li className="p-2">No matches found</li>}
        {isOpen &&
          suggestions?.map((item, index) => (
            <li
              className={`
             ${
               highlightedIndex === index &&
               selectedItem !== item &&
               "bg-blue-100 dark:bg-zinc-600"
             }
             ${
               selectedItem === item && "bg-blue-500 text-zinc-100 font-bold"
             } p-2 cursor-pointer
            `}
              key={`${item.name}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
      <div className="h-4 mt-1">
        {errors.autoSuggest?.type === "checkServantSelected" &&
          (servantWatched === undefined || servantWatched === "") && (
            <span className="flex flex-row items-center text-sm text-red-500 gap-x-1">
              <ExclamationTriangleIcon />
              Search and select a servant first
            </span>
          )}
      </div>
    </div>
  );
};

export default AutoSuggest;
