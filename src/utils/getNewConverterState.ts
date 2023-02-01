import { IApiRequestResult, ICurrencyConverterItems } from "models";

//FIXME  Код с запашком
export default function getNewConverterState(
  changes: any,
  converter: ICurrencyConverterItems,
  currencyRates: IApiRequestResult["rates"]
) {
  const { firstCurrency, secondCurrency } = changes;

  if (firstCurrency && !secondCurrency) {
    const newFirstCurrency = {
      ...converter.firstCurrency,
      ...firstCurrency,
    };

    const newSecondCurrencyValue = getConvertedValue(
      newFirstCurrency.value,
      currencyRates[newFirstCurrency.code],
      currencyRates[converter.secondCurrency.code]
    );

    if (isValidValue(newSecondCurrencyValue)) {
      return {
        firstCurrency: { ...newFirstCurrency },
        secondCurrency: {
          ...converter.secondCurrency,
          value: newSecondCurrencyValue,
        },
      };
    }
  }

  if (!firstCurrency && secondCurrency) {
    const newSecondCurrency = {
      ...converter.secondCurrency,
      ...secondCurrency,
    };

    const newFirstCurrencyValue = getConvertedValue(
      newSecondCurrency.value,
      currencyRates[newSecondCurrency.code],
      currencyRates[converter.firstCurrency.code]
    );

    if (isValidValue(newFirstCurrencyValue)) {
      return {
        firstCurrency: {
          ...converter.firstCurrency,
          value: newFirstCurrencyValue,
        },
        secondCurrency: { ...newSecondCurrency },
      };
    }
  }

  return converter;
}

function isValidValue(value: typeof NaN | null | number) {
  return !(isNaN(value) || value === null);
}

function getConvertedValue(amount: number, fromRate: number, toRate: number) {
  return parseFloat(((amount / fromRate) * toRate).toFixed(2));
}
