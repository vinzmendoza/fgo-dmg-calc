import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import NextImage from "next/image";

import { enemyAttributes } from "../../utils/data/enemyAttributes";
import { enemyClasses } from "../../utils/data/enemyClasses";
import { Dropdown } from "../Dropdown";
import { Tooltip } from "../Tooltip";

type ComponentProps = {
  isReset: boolean;
  setIsReset: (val: boolean) => void;
};

const EnemyStatus = ({ isReset, setIsReset }: ComponentProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4 p-4 border rounded bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-800">
      <h2 className="text-xl font-bold text-center">Enemy Status</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="enemyDefDown" className="flex items-center gap-x-1">
          Defense Down
          <span className="flex items-center">
            <NextImage
              src="/BuffsAndDebuffs/defDown.png"
              height={17}
              width={17}
              alt="defDown"
            />
          </span>
        </label>
        <div className="grid rounded grid-cols-input focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent focus-within:transition focus-within:ease-in focus-within:duration-200">
          <input
            className="w-full p-2 border-l rounded-l border-y focus:outline-none focus:border-transparent dark:bg-zinc-900/80 dark:border-zinc-600 dark:focus:border-transparent"
            id="enemyDefDown"
            type="number"
            step="any"
            {...register("enemyDefDown")}
          />
          <span className="flex items-center justify-center rounded-r text-zinc-600 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-100">
            %
          </span>
        </div>
        <div className="h-4"></div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="enemyCardResDown" className="flex items-center gap-x-1">
          Card Res Down
          <span className="flex items-center">
            <NextImage
              src="/BuffsAndDebuffs/busterResDown.png"
              height={17}
              width={17}
              alt="busterResDown"
            />
            <NextImage
              src="/BuffsAndDebuffs/artsResDown.png"
              height={17}
              width={17}
              alt="artsResDown"
            />
            <NextImage
              src="/BuffsAndDebuffs/quickResDown.png"
              height={17}
              width={17}
              alt="quickResDown"
            />
          </span>
        </label>
        <div className="grid rounded grid-cols-input focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent focus-within:transition focus-within:ease-in focus-within:duration-200">
          <input
            className="w-full p-2 border-l rounded-l border-y focus:outline-none focus:border-transparent dark:bg-zinc-900/80 dark:border-zinc-600 dark:focus:border-transparent"
            id="enemyCardResDown"
            type="number"
            step="any"
            {...register("enemyCardResDown")}
          />
          <span className="flex items-center justify-center rounded-r text-zinc-600 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-100">
            %
          </span>
        </div>
        <div className="h-4"></div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="enemySpecialRes" className="flex items-center gap-x-1">
          Special Resistance
          <span className="flex items-center">
            <NextImage
              src="/BuffsAndDebuffs/specialDef.png"
              height={17}
              width={17}
              alt="specialDef"
            />
          </span>
          <Tooltip ariaLabel="enemySpecialRes">
            &#x28;ex. Gawain&apos;s encounter in Camelot&#x29;
          </Tooltip>
        </label>
        <div className="grid rounded grid-cols-input focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent focus-within:transition focus-within:ease-in focus-within:duration-200">
          <input
            className="w-full p-2 border-l rounded-l border-y focus:outline-none focus:border-transparent dark:bg-zinc-900/80 dark:border-zinc-600 dark:focus:border-transparent"
            id="enemySpecialRes"
            type="number"
            step="any"
            {...register("enemySpecialRes")}
          />
          <span className="flex items-center justify-center rounded-r text-zinc-600 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-100">
            %
          </span>
        </div>
        <div className="h-4"></div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="enemyDmgCut" className="flex items-center gap-x-1">
          Damage Cut
          <span className="flex items-center">
            <NextImage
              src="/BuffsAndDebuffs/dmgCut.png"
              height={17}
              width={17}
              alt="dmgCut"
            />
          </span>
          <Tooltip ariaLabel="enemyDmgCut">
            <>
              Flat damage cut buff of enemies <br />
              &#x28;ex. Demonic Bodhisattva <br />
              encounter in SE.RA.PH&#x29;
            </>
          </Tooltip>
        </label>
        <input
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:transition focus:ease-in focus:duration-200 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-900/80 dark:border-zinc-600 dark:focus:border-transparent"
          id="enemyDmgCut"
          type="number"
          {...register("enemyDmgCut")}
        />
        <div className="h-4"></div>
      </div>

      <Controller
        control={control}
        name="enemyAttribute"
        render={({ field }) => (
          <Dropdown
            data={enemyAttributes}
            label="Attribute"
            onChange={(e) => field.onChange(e)}
            placeholder="Attribute..."
            type="attributes"
            value={field.value}
            isReset={isReset}
            setIsReset={setIsReset}
            tooltip={
              <>
                If no attribute is selected, calculation will be based on
                <br /> a neutral/equal &#x28;x1&#x29; advantage
              </>
            }
          />
        )}
      />

      <Controller
        name="enemyClass"
        control={control}
        render={({ field }) => (
          <Dropdown
            onChange={(e) => field.onChange(e)}
            value={field.value}
            data={enemyClasses}
            type="classes"
            label="Class"
            placeholder="Class..."
            isReset={isReset}
            setIsReset={setIsReset}
            tooltip={
              <>
                If no class is selected, calculation will be based on
                <br /> a neutral/equal &#x28;x1&#x29; advantage
              </>
            }
          />
        )}
      />
    </div>
  );
};

export default EnemyStatus;
