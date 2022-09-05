import { useState } from "react";

import type { CalcVals, ChainCalcVals, EnemyCalcVals } from "fgo-calc";

interface ResultProps {
  vals: CalcVals | ChainCalcVals | EnemyCalcVals;
  type: "card" | "enemy" | "chain";
}

const useResults = () => {
  const [dmgResult, setDmgResult] = useState<ResultProps>();

  return {
    dmgResult,
    setDmgResult,
  };
};

export default useResults;
