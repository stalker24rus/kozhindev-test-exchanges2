import { CURRENCY_LIST } from "constants/currencies";
import { ICurrencyTableRecord } from "models";
import calculateRow from "./getRateRow";

export default function createTable(title, rates): ICurrencyTableRecord[] {
  const table = [];
  for (const property in rates) {
    const temp = {
      code: property,
      name:
        CURRENCY_LIST.find((element) => element.id === property)?.label ||
        undefined,
      ...calculateRow(property, rates[property], title, rates),
    };
    table.push(temp);
  }

  return table;
}

/*
base: "USD"
rates : {
    "AED": 3.673042, 
    "AMD": 394.672074,
    "CNY": 6.702904,
}
*/
