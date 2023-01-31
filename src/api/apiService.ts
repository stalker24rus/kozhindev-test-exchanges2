import axios from "axios";
import {
  API_KEY,
  BASE_CURRENCY,
  REQUSTED_SIMBOLS,
  URL,
} from "constants/apiService";

const axiosInstance = axios.create({
  headers: {
    apikey: API_KEY,
  },
  baseURL: URL,
});

export function getNewCurrencyRates() {
  return axiosInstance.get(
    `/fixer/latest?base=${BASE_CURRENCY}&symbols=${REQUSTED_SIMBOLS}`
  );
}
