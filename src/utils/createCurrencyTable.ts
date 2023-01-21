import { CURRENCY_LIST } from "constants/currencies";
import { ICurrencyTableRecord } from "models";
import getCurrencyRateCollumns from "./getCurrencyRateCollumns";

export default function createCurrencyTable(
  rates: any
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
      ...getCurrencyRateCollumns(rowCurrency, rates),
    });
    i++;
  }

  return table;
}
