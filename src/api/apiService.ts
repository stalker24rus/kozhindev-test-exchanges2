import axios from "axios";
import {
  API_KEY,
  BASE_CURRENCY_CODE,
  REQUEST_CODES,
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
    `/fixer/latest?base=${BASE_CURRENCY_CODE}&symbols=${REQUEST_CODES}`
  );
}
