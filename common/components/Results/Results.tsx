import React, { useEffect } from "react";

type ComponentProps = {
  dmgResult: ResultProps | undefined;
  isReset: boolean;
  setIsReset: (val: boolean) => void;
  setDmgResult: (val: ResultProps | undefined) => void;
};

type ResultProps = {
  vals: any;
  type: "card" | "enemy" | "chain";
};

const Results = ({
  dmgResult,
  setDmgResult,
  isReset,
  setIsReset,
}: ComponentProps) => {
  useEffect(() => {
    if (isReset) {
      setIsReset(false);
      setDmgResult(undefined);
    }
  }, [isReset, setIsReset, setDmgResult]);

  return (
    <div className="flex flex-col gap-4 p-4 border rounded md:grid md:grid-cols-3 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-800">
      <div className="flex flex-col gap-1">
        <label htmlFor="minRoll">Min Damage:</label>
        <input
          id="minRoll"
          name="minRoll"
          type="string"
          value={
            dmgResult
              ? dmgResult.vals.damageFields.minrollDamage.toLocaleString(
                  "en-US"
                )
              : 0
          }
          disabled
          className="w-full p-2 font-bold border rounded cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-600"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="averageRoll">Average Damage: </label>
        <input
          id="averageRoll"
          name="averageRoll"
          type="string"
          value={
            dmgResult
              ? dmgResult.vals.damageFields.damage.toLocaleString("en-US")
              : 0
          }
          disabled
          className="w-full p-2 font-bold border rounded cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-600"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="maxRoll">Max Damage: </label>
        <input
          id="maxRoll"
          name="maxRoll"
          type="string"
          value={
            dmgResult
              ? dmgResult.vals.damageFields.maxrollDamage.toLocaleString(
                  "en-US"
                )
              : 0
          }
          disabled
          className="w-full p-2 font-bold border rounded cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-600"
        />
      </div>
    </div>
  );
};

export default Results;
