import { CURRENCY_LIST } from "./currencies";

export const URL = "https://api.apilayer.com";
export const BASE_CURRENCY = "USD";
export const API_KEY = "YQlJXYAdRIRgUMlXFrEG7vYHalwQ72S3";
export const REQUSTED_SIMBOLS = CURRENCY_LIST.map((element) => element.id).join(
  ","
);
