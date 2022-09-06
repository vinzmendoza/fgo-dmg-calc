import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Enemy, Servant } from "@atlasacademy/api-connector";
import NextImage from "next/image";

import { AutoSuggest } from "../AutoSuggest";
import { ServantNpType } from "./ServantNpType";
import { FormValues } from "../../utils/interface";
import { Tooltip } from "../Tooltip";

type ComponentProps = {
  servantData: Servant.Servant | Enemy.Enemy | undefined;
  callback: (e: Servant.Servant | Enemy.Enemy | undefined) => void;
  isReset: boolean;
  setIsReset: (val: boolean) => void;
};

const ServantStatus = ({
  servantData,
  callback,
  isReset,
  setIsReset,
}: ComponentProps) => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useFormContext<FormValues>();

  useEffect(() => {
    if (servantData) setValue("npType", "");
  }, [servantData, setValue, watch]);

  let finalAsc;
  const images = servantData?.extraAssets.faces.ascension;
  for (const image in images) {
    finalAsc = images[image as unknown as number];
  }

  const selectedNPType = watch("npType");

  return (
    <div className="p-4 border rounded bg-neutral-50">
      <h2 className="mb-4 text-xl font-bold text-center">Servant Status</h2>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
        <div className="relative flex items-center justify-center md:order-last">
          <NextImage
            alt="servant-img"
            height={135}
            width={135}
            src={finalAsc ? finalAsc : "/blank.png"}
          />
        </div>
        <div className="flex flex-col w-full gap-y-4 lg:col-span-2 md:col-auto">
          <Controller
            control={control}
            name="autoSuggest"
            rules={{
              validate: {
                checkServantSelected: () => servantData !== undefined,
              },
            }}
            render={({ field }) => (
              <AutoSuggest
                onChange={(e) => field.onChange(e)}
                value={field.value}
                callback={callback}
                isReset={isReset}
                setIsReset={setIsReset}
              />
            )}
          />
          <div className="flex flex-col gap-4 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="servantSelected">Servant Selected</label>
              <input
                className="p-2 capitalize border rounded"
                disabled={true}
                id="servantSelected"
                required={true}
                type="string"
                {...register("servantSelected")}
              />
              <div className="h-4"></div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="className">Class</label>
              <input
                className="p-2 capitalize border rounded"
                disabled={true}
                id="class"
                required={true}
                type="string"
                {...register("className")}
              />
              <div className="h-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="atk">Attack</label>
          <input
            className="p-2 border rounded"
            disabled={true}
            id="atk"
            type="number"
            {...register("atk")}
          />
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lvl" className="after:content-['_*']">
            Level
          </label>
          <input
            className={`p-2 border rounded ${
              errors.lvl && "border-red-500 focus:border-inherit"
            }  focus:outline-2 focus:outline`}
            id="lvl"
            type="number"
            {...register("lvl", { min: 1, max: 120, required: true })}
          />
          <div className="h-4">
            {errors.lvl &&
              (errors.lvl.type === "required" ? (
                <span className="text-sm text-red-500">Level is required</span>
              ) : errors.lvl.type === "min" ? (
                <span className="text-sm text-red-500">Minimum level is 1</span>
              ) : (
                <span className="text-sm text-red-500">Max level is 120</span>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="npLvl" className="after:content-['_*']">
            NP Level
          </label>
          <input
            className={`p-2 border rounded ${
              errors.npLvl && "border-red-500 focus:border-inherit"
            }  focus:outline-2 focus:outline`}
            id="npLvl"
            type="number"
            {...register("npLvl", { required: true, min: 1, max: 5 })}
          />
          <div className="h-4">
            {errors.npLvl &&
              (errors.npLvl.type === "required" ? (
                <span className="text-sm text-red-500">
                  NP Level is required
                </span>
              ) : errors.npLvl.type === "min" ? (
                <span className="text-sm text-red-500">Min NP level is 1</span>
              ) : (
                <span className="text-sm text-red-500">Max NP level is 5</span>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fou">Fou</label>
          <input
            className={`p-2 border rounded ${
              errors.fou && "border-red-500 focus:border-inherit"
            }  focus:outline-2 focus:outline`}
            id="fou"
            type="number"
            {...register("fou", { min: 0, max: 2000 })}
          />
          <div className="h-4">
            {errors.fou &&
              (errors.fou.type === "min" ? (
                <span className="text-sm text-red-500">Min Fou is 0</span>
              ) : (
                <span className="text-sm text-red-500">Max Fou is 2000</span>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="ceAtk">Craft Essence Attack</label>
          <input
            className={`p-2 border rounded ${
              errors.ceAtk && "border-red-500 focus:border-inherit"
            } focus:outline-2 focus:outline`}
            id="ceAtk"
            type="number"
            {...register("ceAtk", { min: 0, max: 2400 })}
          />
          <div className="h-4">
            {errors.ceAtk &&
              (errors.ceAtk.type === "min" ? (
                <span className="text-sm text-red-500">Min CE Attack is 0</span>
              ) : (
                <span className="text-sm text-red-500">
                  Max CE Attack is 2400
                </span>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="atkMod" className="flex items-center gap-x-1">
            Attack Modifier
            <span className="flex items-center">
              <NextImage
                src="/BuffsAndDebuffs/atkUp.png"
                height={17}
                width={17}
                alt="atkUp"
              />
            </span>
          </label>
          <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
            <input
              className="p-2 border rounded-l focus:outline-none"
              id="atkMod"
              type="number"
              {...register("atkMod")}
            />
            <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
              %
            </span>
          </div>
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cardMod" className="flex items-center gap-x-1">
            Card Buff Modifier{" "}
            <span className="flex items-center">
              <NextImage
                src="/BuffsAndDebuffs/busterUp.png"
                height={17}
                width={17}
                alt="busterUp"
              />{" "}
              <NextImage
                src="/BuffsAndDebuffs/artsUp.png"
                height={17}
                width={17}
                alt="artsUp"
              />{" "}
              <NextImage
                src="/BuffsAndDebuffs/quickUp.png"
                height={17}
                width={17}
                alt="quickUp"
              />
            </span>
          </label>
          <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
            <input
              className="p-2 border rounded-l focus:outline-none"
              id="cardMod"
              type="number"
              {...register("cardMod")}
            />
            <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
              %
            </span>
          </div>
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="npDmgBuff" className="flex items-center gap-x-1">
            NP Damage Buff{" "}
            <span className="flex items-center">
              <NextImage
                src="/BuffsAndDebuffs/npUp.png"
                height={17}
                width={17}
                alt="npUp"
              />
            </span>
          </label>
          <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
            <input
              className="p-2 border rounded-l focus:outline-none"
              id="npDmgBuff"
              type="number"
              {...register("npDmgBuff")}
            />
            <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
              %
            </span>
          </div>
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="powerMod" className="flex items-center gap-x-1">
            Power Modifier Buff
            <span className="flex items-center">
              <NextImage
                src="/BuffsAndDebuffs/spDmgUp.png"
                height={17}
                width={17}
                alt="spDmgUp"
              />
            </span>
            <Tooltip>
              <>
                Special Atk bonus from event modifiers or
                <br /> trait/attribute/alignment damage
                <br /> &#x28;ex. Kriemhild vs Chaotic enemies&#x29;
              </>
            </Tooltip>
          </label>
          <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
            <input
              className="p-2 border rounded-l focus:outline-none"
              id="powerMod"
              type="number"
              {...register("powerMod")}
            />
            <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
              %
            </span>
          </div>
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="npExtraDmgMod" className="flex items-center gap-x-1">
            NP Extra Damage Modifier
            <Tooltip>
              <>
                Extra NP dmg against
                <br /> specific traits/attributes/alignments
                <br /> &#x28;ex. Gil&apos;s extra dmg against servants&#x29;
              </>
            </Tooltip>
          </label>
          <div className="grid rounded grid-cols-input focus-within:outline-2 focus-within:outline">
            <input
              className="p-2 border rounded-l focus:outline-none"
              id="npExtraDmgMod"
              type="number"
              {...register("npExtraDmgMod")}
            />
            <span className="flex items-center justify-center rounded-r text-neutral-600 bg-neutral-200">
              %
            </span>
          </div>
          <div className="h-4"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="flatDmg" className="flex items-center gap-x-1">
            Flat Damage
            <Tooltip>
              <>
                Servants with divinity passives are
                <br /> already included in the calculation.
                <br /> Active skills however should be manually included. <br />
                &#x28;ex. Waver&apos;s third skill of increasing dmg by
                500&#x29;
              </>
            </Tooltip>
          </label>
          <input
            className="p-2 border rounded focus:outline-2 focus:outline"
            id="flatDmg"
            type="number"
            {...register("flatDmg")}
          />
          <div className="h-4"></div>
        </div>

        <ServantNpType
          servantData={servantData}
          selectedNPType={selectedNPType}
        />

        <input type="hidden" {...register("servantId")} />
      </div>
    </div>
  );
};

export default ServantStatus;
