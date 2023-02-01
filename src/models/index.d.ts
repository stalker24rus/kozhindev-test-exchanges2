export interface ICurrencyTableRecord {
  code: string;
  name: string;
  [key: string]: string;
}

export interface ICurrencyConverterItems {
  firstCurrency: ICurrencyConverterRecord;
  secondCurrency: ICurrencyConverterRecord;
}

export interface ICurrencyConverterRecord {
  value: number;
  code: string;
}

export interface IDropDownFieldProps {
  name?: string;
  selected: IDropDownOption;
  items: IDropDownOption[];
  onChange: Function;
}

export interface IDropDownOption {
  id: string;
  label: string;
}

export interface IApiRequestResult {
  base: string;
  date: string;
  rates: { [key: string]: number };
}
