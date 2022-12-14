import { useEffect, useState } from "react";
import { Enemy, NoblePhantasm, Servant } from "@atlasacademy/api-connector";
import { useQuery } from "@tanstack/react-query";
import { useCombobox } from "downshift";

import { apiConnector, cacheDuration } from "../utils/api/connector";
import { servants } from "../utils/data/servants";
import { sortDescending } from "../utils/helpers/sort";
import useDebounce from "./useDebounce";

const useAutoSuggest = (
  value: string,
  onChange: (e: string | undefined) => void,
  isReset: boolean,
  setIsReset: (val: boolean) => void,
  setIsLoading: (val: boolean) => void
) => {
  const [selectedServant, setSelectedServant] = useState<
    Servant.Servant | Enemy.Enemy
  >();

  const debouncedInput = useDebounce(value, 500);

  let bazettNP: NoblePhantasm.NoblePhantasm;

  const suggestServant = async () => {
    const servantList = servants.filter((servant) =>
      servant.name
        .toLowerCase()
        .normalize("NFD") //remove diacritics or accents
        .replace(/[\u0300-\u036f]/g, "")
        .includes(debouncedInput)
    );

    sortDescending(servantList);

    return value.length === 0 ? [] : servantList;
  };

  const { data: suggestions, error } = useQuery(
    ["servants", debouncedInput],
    suggestServant,
    {
      enabled: debouncedInput.length > 1,
      staleTime: 10 * 1000,
    }
  );

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    reset,
  } = useCombobox({
    onInputValueChange: ({ inputValue }) => {
      onChange(inputValue?.toLowerCase());
    },
    items: suggestions ? suggestions : [],
    itemToString(item) {
      return item ? item.name : "";
    },
    onSelectedItemChange: async ({ selectedItem }) => {
      if (!selectedItem) return;

      try {
        setIsLoading(true);
        const data = await apiConnector.servant(
          selectedItem?.id,
          false,
          cacheDuration
        );

        if (data.collectionNo === 336) {
          if (!bazettNP) {
            bazettNP = await apiConnector.noblePhantasm(1001150);
          }

          data.noblePhantasms = [bazettNP];
        }

        setSelectedServant(data);
      } catch (err) {
        return;
      }
    },
    id: "auto-suggest",
  });

  useEffect(() => {
    if (isReset) {
      setSelectedServant(undefined);
      setIsReset(false);
      reset();
    }
  }, [isReset, setIsReset, reset]);

  return {
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
    reset,
  };
};

export default useAutoSuggest;
