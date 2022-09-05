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
    <div className="flex flex-col gap-4 p-4 border rounded bg-neutral-50">
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
        <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
          <input
            className="w-full p-2 border rounded-l focus:outline-none"
            id="enemyDefDown"
            type="number"
            {...register("enemyDefDown")}
          />
          <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
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
        <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
          <input
            className="w-full p-2 border rounded-l focus:outline-none"
            id="enemyCardResDown"
            type="number"
            {...register("enemyCardResDown")}
          />
          <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
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
          <Tooltip>ex. Gawain&apos;s encounter in Camelot</Tooltip>
        </label>
        <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
          <input
            className="w-full p-2 border rounded-l focus:outline-none"
            id="enemySpecialRes"
            type="number"
            {...register("enemySpecialRes")}
          />
          <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
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
          <Tooltip>
            <>
              Flat damage cut buff of enemies <br />
              ex. Demonic Bodhisattva&apos;s <br />
              encounter in SE.RA.PH
            </>
          </Tooltip>
        </label>
        <input
          className="w-full p-2 border rounded focus:outline-2 focus:outline"
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
                <br /> the attribute the selected servant is neutral to
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
                <br /> the class the selected servant is neutral to
              </>
            }
          />
        )}
      />
    </div>
  );
};

export default EnemyStatus;
