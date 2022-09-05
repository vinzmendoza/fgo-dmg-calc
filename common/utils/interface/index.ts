export interface enemyClass {
  name: string;
  value: string;
}

export interface enemyAttribute {
  name: string;
  value: string;
}

export interface FormValues {
  atk: number;
  atkMod: number;
  autoSuggest: string;
  cardMod: number;
  ceAtk: number;
  className: string;
  enemyAttribute: enemyAttribute;
  enemyCardResDown: number;
  enemyClass: enemyClass;
  enemyDefDown: number;
  enemyDmgCut: number;
  enemySpecialRes: number;
  flatDmg: number;
  fou: number;
  lvl: number;
  npDmgBuff: number;
  npExtraDmgMod: number;
  npLvl: number;
  npType: string;
  powerMod: number;
  servantSelected: string;
  servantId: string | number;
}
