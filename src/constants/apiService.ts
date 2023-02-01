import { CURRENCY_DICTIONARY } from "./currencies";

export const URL = "https://api.apilayer.com";
export const BASE_CURRENCY_CODE = "USD";
export const API_KEY = "YQlJXYAdRIRgUMlXFrEG7vYHalwQ72S3";

export const REQUEST_CODES = Object.entries(CURRENCY_DICTIONARY)
  .map(([key]) => key)
  .join(",");
