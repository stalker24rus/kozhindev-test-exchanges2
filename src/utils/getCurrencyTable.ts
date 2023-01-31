import { CURRENCY_LIST } from "constants/currencies";
import { IApiRequestResult, ICurrencyTableRecord } from "models";

export default function getCurrencyTable(
  rates: IApiRequestResult["rates"]
): ICurrencyTableRecord[] {
  const table = [];
  let i = 0;

  for (const rowCurrency in rates) {
    const currencyName =
      CURRENCY_LIST.find((element) => element.id === rowCurrency)?.label ||
      undefined;

    table.push({
      code: rowCurrency,
      name: currencyName,
      ...getRateRows(rowCurrency, rates),
    });
    i++;
  }

  return table;
}

function getRateRows(
  rowCurrencyCode: string,
  rates: IApiRequestResult["rates"]
): { [key: string]: number } {
  const currencyCource = {};
  const сourseСollumns = ["RUB", "USD", "EUR", "CNY"];

  for (let i = 0; i < сourseСollumns.length; i++) {
    const сourseCollumn = сourseСollumns[i];
    const baseRate = rates[rowCurrencyCode];

    if (rates[сourseCollumn] !== undefined) {
      currencyCource[сourseCollumn] =
        rowCurrencyCode !== сourseCollumn
          ? (baseRate / rates[сourseCollumn]).toFixed(2)
          : 1;
    }
  }
  return currencyCource;
}
