import React from "react";
import NextImage from "next/image";
import { Enemy, Servant } from "@atlasacademy/api-connector";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../../../utils/interface";
import { Tooltip } from "../../Tooltip";

type ComponentProps = {
  servantData: Servant.Servant | Enemy.Enemy | undefined;
  selectedNPType: any;
};

const ServantNpType = ({ servantData, selectedNPType }: ComponentProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="flex flex-col gap-1 mb-8 h-14 md:mb-0">
      <p className="flex items-center cursor-default gap-x-1">
        NP Type{" "}
        <Tooltip>
          <>
            When nothing is selected, it will use
            <br /> the latest default NP of the servant
          </>
        </Tooltip>
      </p>
      <div className="flex flex-row gap-x-2">
        {servantData?.noblePhantasms?.map((np, index) => {
          //Musashi (Saber) NP duplicate
          if (servantData.id === 101700) {
            if (np.condQuestPhase === 3) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (np.condQuestPhase === 0) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return;
            }
          }

          //Schez NP duplicate
          if (servantData.id === 503000) {
            if (np.id === 503003) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (np.id === 503001) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return;
            }
          }

          //Wu (Assassin) NP duplicate
          if (servantData.id === 602700) {
            if (np.id === 602703) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (np.id === 602701) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return;
            }
          }

          //Tomoe (Archer) NP duplicate
          if (servantData.id === 202100) {
            if (np.id === 202103) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (np.id === 202101) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`str0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "str0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return;
            }
          }

          //Melusine NP Color Change
          if (servantData.id === 304800) {
            if (index === 0) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            }
          }

          //Astarte NP Color Change
          if (servantData.id === 1100900) {
            if (index === 0) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (index === 1) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp2`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp2" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            }
          }

          //Emiya NP Color Change
          if (servantData.id === 200100) {
            if (index === 0) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp0`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp0" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (index === 1) {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp1`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp1" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else if (index === 2) {
              return (
                <div key={index} className="order-last">
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp2`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}-luded.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp2" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <input
                    className="appearance-none"
                    id={index.toString()}
                    type="radio"
                    value={`snp3`}
                    {...register("npType")}
                  />
                  <label className="cursor-pointer" htmlFor={index.toString()}>
                    <NextImage
                      src={`/NPType/${np.card}.png`}
                      height={50}
                      width={50}
                      className={`${
                        selectedNPType !== "snp3" ? "grayscale" : "grayscale-0"
                      } hover:grayscale-0`}
                    />
                  </label>
                </div>
              );
            }
          }

          //All other servants
          if (np.condQuestPhase !== 0) {
            return (
              <div key={index}>
                <input
                  type="radio"
                  {...register("npType")}
                  value={`str1`}
                  className="appearance-none"
                  id={index.toString()}
                />
                <label className="cursor-pointer" htmlFor={index.toString()}>
                  <NextImage
                    src={`/NPType/${np.card}-luded.png`}
                    height={50}
                    width={50}
                    className={`${
                      selectedNPType !== "str1" ? "grayscale" : "grayscale-0"
                    } hover:grayscale-0`}
                  />
                </label>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <input
                  type="radio"
                  {...register("npType")}
                  value={`str0`}
                  className="outline-none appearance-none"
                  id={index.toString()}
                />
                <label className="cursor-pointer " htmlFor={index.toString()}>
                  <NextImage
                    src={`/NPType/${np.card}.png`}
                    height={50}
                    width={50}
                    className={`${
                      selectedNPType !== "str0" ? "grayscale" : "grayscale-0"
                    } hover:grayscale-0`}
                  />
                </label>
              </div>
            );
          }
        })}
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default ServantNpType;
