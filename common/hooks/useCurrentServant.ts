import { useEffect, useState } from "react";

import { Enemy, Servant } from "@atlasacademy/api-connector";

const useCurrentServant = () => {
  const [servantData, setServantData] = useState<
    Servant.Servant | Enemy.Enemy
  >();
  const [isReset, setIsReset] = useState<boolean>(false);

  return {
    servantData,
    setServantData,
    isReset,
    setIsReset,
  };
};

export default useCurrentServant;
