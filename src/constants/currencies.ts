export const LOCALSTORAGE_CONVERTER = "currenciesConverter";
export const MIN_AMOUNT_ROW_FOR_VIEW = 5;

export const CURRENCY_DICTIONARY = {
  RUB: "Российский рубль",
  EUR: "Евро",
  USD: "Доллар США",
  CNY: "Китайский юань",
  AED: "Дирхам",
  UAH: "Гривна",
  JPY: "Йена",
  GBP: "Фунт Стерлингов",
  INR: "Индийская рупия",
  AMD: "Драхм",
  THB: "Бат",
  TRY: "Турецкая лира",
};

export const CURRENCY_DROPDOWN_LIST = Object.entries(CURRENCY_DICTIONARY).map(
  ([key, value]) => {
    return { id: key, label: value };
  }
);

// FIXME If sortable: true -> Uncaught Error: Not found icon with name "long-arrow-alt-down"

export const TABLE_BASE_COLUMNS = [
  {
    label: "Код валюты (ISO 4217)",
    attribute: "code",
    //sortable: true,
  },
  {
    label: "Название валюты",
    attribute: "name",
    // sortable: true,
  },
];

export const TABLE_EXCHANGE_RATE_COLUMNS = [
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

export const TABLE_COLUMNS = [
  ...TABLE_BASE_COLUMNS,
  ...TABLE_EXCHANGE_RATE_COLUMNS,
];

export const TABLE_EXCHANGE_RATE_CODES = TABLE_EXCHANGE_RATE_COLUMNS.map(
  (element) => element.attribute
);

export const TABLE_SEARCH_FORM = {
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
