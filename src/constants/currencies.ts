import { ICurrencyRecord, IDropDownOption } from "models";

export const MIN_ROW_NUMBER_FOR_VIEW = 5;
export const DEFAULT_CURENCY_LANGUAGES = "ruRU";

export const COLUMNS = [
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

export const CURRENCY_OBJECT_LIST: ICurrencyRecord[] = [
  {
    id: "643",
    code: "RUB",
    ruRU: "Российский рубль",
  },
  {
    id: "978",
    code: "EUR",
    ruRU: "Евро",
  },
  {
    id: "840",
    code: "USD",
    ruRU: "Доллар США",
  },
  {
    id: "156",
    code: "CNY",
    ruRU: "Китайский юань",
  },
  {
    id: "784",
    code: "AED",
    ruRU: "Дирхам",
  },
  {
    id: "980",
    code: "UAH",
    ruRU: "Гривна",
  },
  {
    id: "392",
    code: "JPY",
    ruRU: "Йена",
  },
  {
    id: "826",
    code: "GBP",
    ruRU: "Фунт Стерлингов",
  },
  {
    id: "356",
    code: "INR",
    ruRU: "Индийская рупия",
  },
  {
    id: "051",
    code: "AMD",
    ruRU: "Драхм",
  },
  {
    id: "764",
    code: "THB",
    ruRU: "Бат",
  },
  {
    id: "949",
    code: "TRY",
    ruRU: "Турецкая лира",
  },
];
