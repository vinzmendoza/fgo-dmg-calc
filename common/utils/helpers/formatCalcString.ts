import { FormValues } from "../interface";

const formatCalcString = (data: FormValues) => {
  //200100 Force Emiya NP dmg calculation using the strengthened version
  const calcString = `${data.lvl && "l" + data.lvl + " "}
${data.fou != 0 ? "f" + data.fou + " " : "f0 "}
${data.ceAtk != 0 ? "ce" + data.ceAtk + " " : ""}
${data.atkMod != 0 ? "a" + data.atkMod + " " : ""}
${data.cardMod != 0 ? "m" + data.cardMod + " " : ""}
${data.enemyCardResDown != 0 ? "m" + data.enemyCardResDown + " " : ""}
${data.npLvl ? "np" + data.npLvl + " " : ""}
${data.npDmgBuff != 0 ? "n" + data.npDmgBuff + " " : ""}
${data.npExtraDmgMod != 0 ? "se" + data.npExtraDmgMod + " " : ""}
${data.powerMod != 0 ? "p" + data.powerMod + " " : ""}
${data.flatDmg != 0 ? "fd" + data.flatDmg + " " : ""}
${
  data.servantId == 200100 && data.npType === ""
    ? "snp1 "
    : data.npType && data.npType + " "
}
${
  data.enemyDefDown > 0
    ? "d-" + data.enemyDefDown + " "
    : data.enemyDefDown < 0
    ? "d" + -data.enemyDefDown + " "
    : ""
}
${data.enemySpecialRes != 0 ? "sdm" + data.enemySpecialRes + " " : ""}
${
  data.enemyDmgCut > 0
    ? "fd-" + data.enemyDmgCut + " "
    : data.enemyDmgCut < 0
    ? "fd" + -data.enemyDmgCut + " "
    : ""
}
${data.enemyClass ? data.enemyClass.value + " " : ""}
${data.enemyAttribute ? data.enemyAttribute.value + " " : ""}`;

  const formattedCalcString = calcString.replace(/[\n\r]/g, "");

  return formattedCalcString;
};

export default formatCalcString;
