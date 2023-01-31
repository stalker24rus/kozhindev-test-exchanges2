import {
  IApiRequestResult,
  ICurrencyConverterItems,
  ICurrencyConverterRecord,
} from "models";

export default function getNewConverterState(
  changedField: { [key: string]: any },
  converterState: ICurrencyConverterItems,
  currencyRates: IApiRequestResult["rates"]
) {
  const { firstField, secondField } = changedField;

  if (firstField && !secondField) {
    return getUpdatedFields(
      {
        name: "firstField",
        content: { ...converterState.firstField, ...firstField },
      },
      {
        name: "secondField",
        content: { ...converterState.secondField },
      },
      currencyRates
    );
  }

  if (!firstField && secondField) {
    return getUpdatedFields(
      {
        name: "secondField",
        content: { ...converterState.secondField, ...secondField },
      },
      {
        name: "firstField",
        content: { ...converterState.firstField },
      },
      currencyRates
    );
  }

  return converterState;
}

export function getUpdatedFields(mainField, slaveField, rates) {
  const { name: mainFieldName, content: mainFieldContent } = mainField;
  const { name: slaveFieldName, content: slaveFieldContent } = slaveField;

  const newFieldValue = getNewFieldValue(
    mainFieldContent,
    slaveFieldContent,
    rates
  );

  return {
    [mainFieldName]: { ...mainFieldContent },
    [slaveFieldName]: {
      value: newFieldValue,
      currency: slaveFieldContent.currency,
    },
  };
}

export const getNewFieldValue = (
  from: ICurrencyConverterRecord,
  to: ICurrencyConverterRecord,
  rates: IApiRequestResult["rates"]
): number => {
  const { value: value1, currency: currency1 } = from;
  const { currency: currency2 } = to;
  return parseFloat(
    convertCurrency(value1, rates[currency1], rates[currency2]).toFixed(2)
  );
};

export function convertCurrency(
  count: number,
  baseFrom: number,
  baseTo: number
): number {
  return (count / baseFrom) * baseTo;
}
