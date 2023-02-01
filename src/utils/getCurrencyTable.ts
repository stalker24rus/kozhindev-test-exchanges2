import {
  CURRENCY_DICTIONARY,
  TABLE_EXCHANGE_RATE_CODES,
} from "constants/currencies";
import { IApiRequestResult, ICurrencyTableRecord } from "models";

export default function getCurrencyTable(
  rates: IApiRequestResult["rates"]
): ICurrencyTableRecord[] {
  const table: ICurrencyTableRecord[] = [];

  for (const rowBaseCurrency in rates) {
    table.push({
      code: rowBaseCurrency,
      name: CURRENCY_DICTIONARY[rowBaseCurrency],
      ...getRateRows(rowBaseCurrency, rates),
    });
  }

  return table;
}

function getRateRows(
  rowCurrencyCode: string,
  rates: IApiRequestResult["rates"]
): { [key: string]: number } {
  const exchangeRates = {};
  for (let i = 0; i < TABLE_EXCHANGE_RATE_CODES.length; i++) {
    const exhangeRateCode = TABLE_EXCHANGE_RATE_CODES[i];
    const baseRate = rates[rowCurrencyCode];

    if (rates[exhangeRateCode] !== undefined) {
      exchangeRates[exhangeRateCode] =
        rowCurrencyCode !== exhangeRateCode
          ? (baseRate / rates[exhangeRateCode]).toFixed(2).replace(".", ",")
          : "1";
    }
  }
  return exchangeRates;
}
