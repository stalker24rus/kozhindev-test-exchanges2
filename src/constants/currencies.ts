import { ICurrencyRecord, IDropDownOption } from "models";

export const MIN_ROW_NUMBER_FOR_VIEW = 5;

export const CURRENCY_TABLE_COLUMNS = [
  {
    Header: "Код валюты (ISO 4217)",
    accessor: "code",
  },
  {
    Header: "Название валюты",
    accessor: "name",
  },
  {
    Header: "Курс к рублю",
    accessor: "RUB",
  },
  {
    Header: "Курс к доллару",
    accessor: "USD",
  },
  {
    Header: "Курс к Евро",
    accessor: "EUR",
  },
  {
    Header: "Курс к Юаню",
    accessor: "CNY",
  },
];

export const CURRENCY_LIST: ICurrencyRecord[] = [
  {
    id: "RUB",
    label: "Российский рубль",
  },
  {
    id: "EUR",
    label: "Евро",
  },
  {
    id: "USD",
    label: "Доллар США",
  },
  {
    id: "CNY",
    label: "Китайский юань",
  },
  {
    id: "AED",
    label: "Дирхам",
  },
  {
    id: "UAH",
    label: "Гривна",
  },
  {
    id: "JPY",
    label: "Йена",
  },
  {
    id: "GBP",
    label: "Фунт Стерлингов",
  },
  {
    id: "INR",
    label: "Индийская рупия",
  },
  {
    id: "AMD",
    label: "Драхм",
  },
  {
    id: "THB",
    label: "Бат",
  },
  {
    id: "TRY",
    label: "Турецкая лира",
  },
];

// export const CURRENCY_OBJECT = CURRENCY_LIST.map(item);
