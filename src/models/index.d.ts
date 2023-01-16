export interface ICurrencyTableRecord {
  code: string;
  name: string;
  roubleExchangeRate: number;
  usaExchangeRate: number;
  euroExchangeRate: number;
  yuanExchangeRate: number;
}

export interface ICurrencyCounterItems {
  first: ICurrencyCounterRecord;
  second: ICurrencyCounterRecord;
}

export interface ICurrencyCounterRecord {
  value: number;
  currency: IDropDownOption;
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

export interface INumberFieldProps {
  name?: string;
  min?: number;
  max?: number;
  step?: number | string;
  value: number;
  onChange: Function;
}

export interface ICurrencyRecord {
  id: string;
  label: string;
}
