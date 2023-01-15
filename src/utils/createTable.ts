import { ICurrencyTableRecord } from "models";
import calculateRow from "./getRateRow";

export function getTableData(titles, rates): ICurrencyTableRecord[] {
  const tableData = [];
  for (const property in rates) {
    const temp = {
      code: property,
      name: undefined,
      ...calculateRow(titles, rates[property], rates),
    };
    tableData.push(temp);
  }

  return tableData;
}

/*
base: "USD"
rates : {
    "AED": 3.673042, 
    "AMD": 394.672074,
    "CNY": 6.702904,
}
*/
