import React, { useEffect } from "react";
import { NextPage } from "next";
import { calcSvt } from "fgo-calc";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import useCurrentServant from "../common/hooks/useCurrentServant";
import { ServantStatus } from "../common/components/ServantStatus";
import { EnemyStatus } from "../common/components/EnemyStatus";
import formatCalcString from "../common/utils/helpers/formatCalcString";
import { Results } from "../common/components/Results";
import useResults from "../common/hooks/useResults";
import { FormValues } from "../common/utils/interface";
import { PageLayout } from "../common/components/PageLayout";

const defaultValues = {
  atk: 0,
  atkMod: 0,
  autoSuggest: "",
  cardMod: 0,
  ceAtk: 0,
  className: "",
  enemyAttribute: { name: "", value: "" },
  enemyCardResDown: 0,
  enemyClass: { name: "", value: "" },
  enemyDefDown: 0,
  enemyDmgCut: 0,
  enemySpecialRes: 0,
  flatDmg: 0,
  fou: 0,
  lvl: 1,
  npDmgBuff: 0,
  npExtraDmgMod: 0,
  npLvl: 1,
  npType: "",
  powerMod: 0,
};

const Home: NextPage = () => {
  const methods = useForm<FormValues>({ defaultValues });
  const { handleSubmit, reset, setValue, watch } = methods;

  const { servantData, setServantData, isReset, setIsReset } =
    useCurrentServant();
  const { dmgResult, setDmgResult } = useResults();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (!servantData) return;
    const calcString = formatCalcString(data);
    const result = calcSvt(servantData, calcString);
    setDmgResult(result);
  };

  const currentLvl = watch("lvl");

  useEffect(() => {
    setValue("atk", servantData ? servantData.atkGrowth[currentLvl - 1] : 0);
    setValue(
      "className",
      servantData ? servantData.className.replace(/[A-Z]/g, " $&").trim() : ""
    ); //add spacing of servant class name
    setValue("servantSelected", servantData ? servantData.name : "");
    setValue("servantId", servantData ? servantData.id : "");
  }, [currentLvl, servantData, setValue]);

  return (
    <PageLayout title="Home">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 gap-y-4 md:grid md:grid-cols-main md:gap-x-4">
            <ServantStatus
              servantData={servantData}
              callback={setServantData}
              isReset={isReset}
              setIsReset={setIsReset}
            />
            <EnemyStatus isReset={isReset} setIsReset={setIsReset} />
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-main">
            <Results
              dmgResult={dmgResult}
              setDmgResult={setDmgResult}
              isReset={isReset}
              setIsReset={setIsReset}
            />

            <div className="md:flex md:items-center md:justify-center">
              <div className="flex flex-row justify-between gap-x-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 border rounded border-neutral-600 hover:bg-neutral-600 hover:text-neutral-100"
                  onClick={() => {
                    setIsReset(true);
                    reset();
                  }}
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 rounded text-neutral-100 hover:bg-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </PageLayout>
  );
};

export default Home;
