import { ICurrencyRecord } from "models";

export const MIN_ROW_VIEW = 5;

export const COLUMNS = [
  {
    label: "Код валюты (ISO 4217)",
    attribute: "code",
    // FIXME Uncaught Error: Not found icon with name "long-arrow-alt-down"
    //sortable: true,
  },
  {
    label: "Название валюты",
    attribute: "name",
    // sortable: true,
  },
  {
    label: "Курс к рублю",
    attribute: "RUB",
    // sortable: true,
  },
  {
    label: "Курс к доллару",
    attribute: "USD",
    // sortable: true,
  },
  {
    label: "Курс к Евро",
    attribute: "EUR",
    // sortable: true,
  },
  {
    label: "Курс к Юаню",
    attribute: "CNY",
    //sortable: true,
  },
];

export const SEARCH_FORM = {
  layout: "table",
  fields: [
    {
      attribute: "code",
      placeholder: "Код",
      size: "Small",
    },
    {
      attribute: "name",
      placeholder: "Название",
      size: "Small",
    },
    {
      attribute: "RUB",
      placeholder: "RUB",
      size: "Small",
    },
    {
      attribute: "USD",
      placeholder: "USD",
      size: "Small",
    },
    {
      attribute: "EUR",
      placeholder: "EUR",
      size: "Small",
    },
    {
      attribute: "CNY",
      placeholder: "CNY",
      size: "Small",
    },
  ],
};

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

export const LOCALSTORAGE_CONVERTER = "currenciesConverter";

// export const CURRENCY_OBJECT = CURRENCY_LIST.map(item);
