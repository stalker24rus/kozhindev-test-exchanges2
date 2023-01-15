import { ICurrencyTableRecord } from "models";

export function convertCurrencies(
  count: number,
  baseFrom: number,
  baseTo: number
): number {
  return (count / baseFrom) * baseTo;
}

export function getTitleCurrencies(
  titleCurrencies: string[],
  baseRate: number,
  rates: { [key: string]: number }
): { [key: string]: number } | undefined {
  const result = {};

  for (let i = 0; i < titleCurrencies.length; i++) {
    const name = titleCurrencies[i];

    if (rates[name] !== undefined) {
      result[name] = convertCurrencies(1, baseRate, rates[name]);
    }
  }
  return result;
}

export function getTableData(titles, rates): ICurrencyTableRecord[] {
  // const titleCurrencies = ["RUB", "EUR", "USD", "CNY"];
  const tableData = [];
  for (const property in rates) {
    const temp = {
      code: property,
      name: undefined,
      ...getTitleCurrencies(titles, rates[property], rates),
    };
    //console.log(`${property}: ${rates[property]}`);
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
 {
    Header: "Код валюты (ISO 4217)",
    accessor: "id",
  },
  {
    Header: "Название валюты",
    accessor: "name",
  },
  {
    Header: "Курс к рублю",
    accessor: "roubleExchangeRate",
  },
  {
    Header: "Курс к доллару",
    accessor: "usaExchangeRate",
  },
  {
    Header: "Курс к Евро",
    accessor: "euroExchangeRate",
  },
  {
    Header: "Курс к Юаню",
    accessor: "yuanExchangeRate",
  },
*/
